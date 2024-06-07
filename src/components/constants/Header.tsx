"use server";

import Logo from "./Logo";
import React from "react";
import { IoSearch } from "react-icons/io5";
import HeaderMenu from "./HeaderMenu";
import axios from "axios";
import "../../styles/Header.css";

interface ISubNavigationLink {
  name: string;
  url: string;
  hasChildren: boolean;
  children: ISubNavigationLink[];
}

interface INavigationLink {
  name: string;
  url: string;
  hasChildren: boolean;
  children: ISubNavigationLink[];
}

interface IDataItem {
  nav: string;
  subnav: string;
  url: string;
}

interface IApiResponse {
  result: Record<string, IDataItem[]>;
}

const convertToNavigationLinks = (
  data: Record<string, IDataItem[]>,
): { main: INavigationLink[] } => {
  const main: INavigationLink[] = Object.keys(data).map((navKey) => {
    const nav = data[navKey];
    return {
      name: nav[0].nav,
      url: "",
      hasChildren: true,
      children: nav.map((item: IDataItem) => ({
        name: item.subnav,
        url: item.url,
        hasChildren: false,
        children: [],
      })),
    };
  });
  return { main };
};

const Header = async () => {
  let result = null;

  try {
    const menuResponse = await axios.get<IApiResponse>(
      "https://ipo.onlineinfotech.net/Apis/getNav",
      {
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
      },
    );
    result = convertToNavigationLinks(menuResponse.data.result);
    console.log(result);
  } catch (error) {
    console.error("Error fetching menu data:", error);
  }

  return (
    <header className={`header z-30 sticky top-0`}>
      <nav className="navbar container">
        <div className="order-0">
          <Logo />
        </div>
        <input id="nav-toggle" type="checkbox" style={{ display: "none" }} />
        <label
          htmlFor="nav-toggle"
          className="order-3 cursor-pointer flex items-center lg:hidden dark:text-white lg:order-1"
        >
          <svg
            id="show-button"
            className="h-6 fill-current block"
            viewBox="0 0 20 20"
          >
            <title>Menu Open</title>
            <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
          </svg>
          <svg
            id="hide-button"
            className="h-6 fill-current hidden"
            viewBox="0 0 20 20"
          >
            <title>Menu Close</title>
            <polygon
              points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
              transform="rotate(45 10 10)"
            ></polygon>
          </svg>
        </label>

        <HeaderMenu main={result?.main || []} />

        <div className="order-1 ml-auto flex items-center md:order-2 lg:ml-0">
          <button
            className="border-border hover:text-primary dark:border-darkmode-border mr-5 inline-block border-r pr-5 text-xl dark:text-white dark:hover:text-darkmode-primary"
            aria-label="search"
            data-search-trigger
          >
            <IoSearch />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
