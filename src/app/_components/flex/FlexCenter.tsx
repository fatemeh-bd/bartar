import React from "react";
import { FlexComponentsType } from "./types";

const FlexCenter = ({ children, gap, className }: FlexComponentsType) => {
  return (
    <div
      className={`flex items-center justify-center ${gap ? gap : "gap-2"} ${
        className ?? className
      }`}
    >
      {children}
    </div>
  );
};

export default FlexCenter;
