"use client";

import { ReactNode, ReactElement } from "react";

interface TabProps {
  name: string;
  children: ReactNode;
}

function Tab({ children, name }: TabProps): ReactElement {
  return <div className="tab-content-panel">{children}</div>;
}

export default Tab;
