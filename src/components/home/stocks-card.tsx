"use client";
import axios from "axios";
import { useState, useRef } from "react";
import GainersCard from "./gainers";
export default function StocksCard() {
  const [activeMenuItem, setActiveMenuItem] = useState<string>("gainers");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleMenuItemClick = async (menuItem: string) => {
    console.log("Clicked index:", menuItem);

    setActiveMenuItem(menuItem);
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://analyze.api.tickertape.in/homepage/stocks?universe=SmallCap&type=${menuItem}&dataCount=5&offset=0`,
      );
      setData(response.data);
    } catch (error: any) {
      console.log("API Error: " + error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }

    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section">
      <div className="container">
        <ul className="mb-4">
          {[
            { name: "Top Gainers", route: "gainers" },
            { name: "Top Losers", route: "losers" },
            { name: "Most Active", route: "active" },
            { name: "52-W High", route: "approachingHigh" },
            { name: "52-W Low", route: "approachingLow" },
          ].map((item) => (
            <li className="m-3 inline-block" key={item.name}>
              <a
                href=""
                onClick={async (e) => {
                  e.preventDefault();
                  await handleMenuItemClick(item.route);
                }}
                className={`block rounded bg-theme-light px-4 py-2 text-xl text-dark dark:bg-darkmode-theme-light dark:text-darkmode-dark ${
                  activeMenuItem === item.name ? "active" : ""
                }`}
              >
                {item.name.replace(/([A-Z])/g, " $1").trim()}
              </a>
            </li>
          ))}
        </ul>

        {activeMenuItem === "gainers" && (
          <div ref={contentRef}>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && data && (
              <GainersCard gainers={data.data.gainers} />
            )}
          </div>
        )}

        {activeMenuItem === "losers" && (
          <div ref={contentRef}>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && data && (
              <GainersCard gainers={data.data.losers} />
            )}
          </div>
        )}

        {activeMenuItem === "active" && (
          <div ref={contentRef}>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && data && (
              <GainersCard gainers={data.data.active} />
            )}
          </div>
        )}

        {activeMenuItem === "approachingHigh" && (
          <div ref={contentRef}>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && data && (
              <GainersCard gainers={data.data.approachingHigh} />
            )}
          </div>
        )}

        {activeMenuItem === "approachingLow" && (
          <div ref={contentRef}>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && data && (
              <GainersCard gainers={data.data.approachingLow} />
            )}
          </div>
        )}

        {/* <div ref={contentRef}>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {!loading && !error && data && (
            <GainersCard gainers={data.data.gainers} />
          )}
        </div> */}
      </div>
    </section>
  );
}
