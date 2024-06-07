"use client";

import React, { useState } from "react";
import "../../styles/Accordion.css";

const Accordion = ({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className={`accordion ${show ? "active" : "false"}`}>
      <button
        className="accordion-header"
        onClick={() => setShow(!show)}
        aria-expanded={show}
      >
        {title}
        <svg
          className={`accordion-icon ${show ? "rotate" : ""}`}
          viewBox="0 0 512 512"
          xmlSpace="preserve"
        >
          <path
            fill="currentColor"
            d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592
              c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251
              c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667C514.096,145.416,514.096,131.933,505.755,123.592z"
          ></path>
        </svg>
      </button>
      {show && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
