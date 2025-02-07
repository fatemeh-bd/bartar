import React from "react";
import { ButtonProps } from "./types";
import { ColorType } from "@/utils/enums";
import { ArrowUpLeftIcon } from "@heroicons/react/20/solid";
import Loader from "../loaders/Loader";

const MainButton: React.FC<ButtonProps> = ({
  children,
  className = "",
  themeType = ColorType.PRIMARY,
  defaultIcon,
  full,
  outline,
  isLoading,
  ...props
}) => {
  const buttonClass = `${
    full ? "w-full" : ""
  } flex text-sm cursor-pointer font-bold items-center justify-center gap-2 rounded-full transition-all hover:opacity-80 py-3 px-4 ${className} ${
    themeType === ColorType.SECONDARY
      ? "bg-secondary-200 text-black border border-secondary-200 hover:text-primary"
      : themeType === ColorType.ERROR
      ? "bg-rose-600 text-[#fff]"
      : themeType === ColorType.BLACK
      ? " bg-secondary-500 text-black border border-secondary-500"
      : "bg-primary text-white"
  } ${outline ? "!bg-transparent" : ""}`;

  return (
    <button name="mainButton" className={buttonClass} {...props}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {children}
          {defaultIcon && <ArrowUpLeftIcon className="size-5" />}
        </>
      )}
    </button>
  );
};

export default MainButton;
