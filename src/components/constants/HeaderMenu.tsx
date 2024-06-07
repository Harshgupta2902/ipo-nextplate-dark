"use client";

import { usePathname } from "next/navigation";
import React from "react";

interface HeaderMenuProps {
  main: INavigationLink[];
}
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

const HeaderMenu: React.FC<HeaderMenuProps> = ({ main }) => {
  console.log("HeaderMenu received props:", main); // Debugging line

  if (!main || main.length === 0) {
    return "nothigg found ";
  }

  return (
    <ul
      id="nav-menu"
      className="navbar-nav order-3 sm:hidden w-full lg:order-1 lg:flex lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-8"
    >
      {main.map((menu, i) => (
        <React.Fragment key={`menu-${i}`}>
          {menu.hasChildren ? (
            <li className="nav-item nav-dropdown group relative">
              <span
                className={`nav-link inline-flex items-center ${
                  menu.children
                    ?.map(({ url }) => url)
                    .includes(usePathname()) ||
                  menu.children
                    ?.map(({ url }: { url: String }) => `${url}/`)
                    .includes(usePathname())
                    ? "active"
                    : ""
                }`}
              >
                {menu.name}
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>
              <ul className="nav-dropdown-list hidden group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100">
                {menu.children?.map((child, i) => (
                  <li className="nav-dropdown-item" key={`children-${i}`}>
                    <a
                      href={child.url}
                      className={`nav-dropdown-link block ${
                        (usePathname() === `${child.url}/` ||
                          usePathname() === child.url) &&
                        "active"
                      }`}
                    >
                      {child.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li className="nav-item">
              <a
                href={menu.url}
                className={`nav-link block ${
                  (usePathname() === `${menu.url}/` ||
                    usePathname() === menu.url) &&
                  "active"
                }`}
              >
                {menu.name}
              </a>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default HeaderMenu;
