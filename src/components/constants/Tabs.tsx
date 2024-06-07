"use client";

import {
  KeyboardEvent,
  ReactElement,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

interface TabsProps {
  children: ReactElement | ReactElement[];
}

function Tabs({ children }: TabsProps) {
  const [active, setActive] = useState(0);
  const tabItemsRef: RefObject<(HTMLElement | null)[]> = useRef([]);

  const childArray = Array.isArray(children) ? children : [children];

  useEffect(() => {
    if (tabItemsRef.current && tabItemsRef.current[active]) {
      tabItemsRef.current[active]?.focus();
    }
  }, [active]);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      setActive(index);
    } else if (event.key === "ArrowRight") {
      setActive((active + 1) % childArray.length);
    } else if (event.key === "ArrowLeft") {
      setActive((active - 1 + childArray.length) % childArray.length);
    }
  };

  return (
    <div className="tab">
      <ul className="tab-nav" role="tablist">
        {childArray.map((item: ReactElement, index: number) => (
          <li
            key={index}
            className={`tab-nav-item ${index === active ? "text-white active font-bold" : ""}`}
            role="tab"
            style={{
              borderColor: "transparent",
              color: index === active ? "white" : "",
              fontSize: 16,
            }}
            tabIndex={index === active ? 0 : -1}
            aria-selected={index === active}
            onClick={() => setActive(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(ref) => {
              if (tabItemsRef.current) {
                tabItemsRef.current[index] = ref;
              }
            }}
          >
            {item.props.name}
          </li>
        ))}
      </ul>

      {childArray.map((data: ReactElement, index: number) => (
        <div
          key={index}
          role="tabpanel"
          className={`tab-content ${index === active ? "block" : "hidden"}`}
        >
          {data.props.children}
        </div>
      ))}
    </div>
  );
}

export default Tabs;
