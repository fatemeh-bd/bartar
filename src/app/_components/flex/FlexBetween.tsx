import React from "react";
import { FlexComponentsType } from "./types";

const FlexBetween = ({ children, className, gap,onClick }: FlexComponentsType) => {
  return (
    <div
      className={`flex items-center justify-between ${className || ""} ${
        gap || ""
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default FlexBetween;
