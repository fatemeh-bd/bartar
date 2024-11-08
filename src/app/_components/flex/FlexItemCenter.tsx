import React from "react";
import { FlexComponentsType } from "./types";

const FlexItemCenter = ({
  children,
  gap,
  className,
  onClick,
}: FlexComponentsType) => {
  return (
    <div
      className={`flex items-center ${gap ? gap : "gap-2"} ${
        className ?? className
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default FlexItemCenter;
