import React from "react";

const GradientBox = ({
  children,
  className,
  type,
}: {
  className?: string;
  children: React.ReactNode;
  type?: "top" | "bottom";
}) => {
  return (
    <div
      className={` ${
        type === "top"
          ? "bg-gradient-to-t"
          : type === "bottom"
          ? "bg-gradient-to-b"
          : "bg-gradient-to-l "
      }
       space-y-1 from-secondary-200 to-transparent rounded-2xl  p-4 mx-auto
       ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default GradientBox;
