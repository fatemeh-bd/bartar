import { ColorType, Sizes } from "@/_utiles/enums";
import React from "react";

const Title = ({
  children,
  className,
  size,
  color,
}: {
  className?: string;
  children: React.ReactNode;
  size?: Sizes.xl | Sizes.lg | Sizes.xs;
  color?: ColorType;
}) => {
  return (
    <h2
      className={`${
        size === Sizes.xl
          ? "text-xl"
          : size === Sizes.lg
          ? "md:text-2xl text-xl"
          : size === Sizes.xs
          ? "text-sm !font-bold"
          : "text-lg"
      } font-black ${
        color === ColorType.PRIMARY ? "text-primary" : "text-black"
      } ${className}`}
    >
      {children}
    </h2>
  );
};

export default Title;
