"use client";
import React, { useEffect, useRef, useState } from "react";
import Paragraph from "../typography/Paragraph";
import FlexItemCenter from "../flex/FlexItemCenter";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { boxClass } from "../inputs/Input";
import { Sizes } from "@/utils/enums";
import { DropDownType } from "./types";
import useOutsideClick from "@/utils/useOutsideClick";

const DropDown = ({
  label,
  className,
  list,
  value,
  setValue,
}: DropDownType) => {
  const [open, setOpen] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(dropDownRef, () => setOpen(false), open);

  return (
    <div className={`${className || ""} my-2`} ref={dropDownRef}>
      {label && (
        <FlexItemCenter className="my-1">
          <FlexItemCenter className="text-nowrap text-sm label text-secondary-700">
            {label}
          </FlexItemCenter>
        </FlexItemCenter>
      )}
      <div className="relative w-full">
        <button
          onClick={() => setOpen(!open)}
          className={`${boxClass} flex items-center  justify-between w-full gap-2`}
        >
          <Paragraph size={Sizes.sm}>{value ? value : "انتخاب کنید"}</Paragraph>
          <ChevronDownIcon
            className={`size-5 transition-transform duration-200 ease-in-out ${
              open ? "rotate-[-180deg]" : "rotate-0"
            }`}
          />
        </button>
        <ul
          className={`${
            open ? `max-h-40 h-fit opacity-100 ` : "opacity-0 h-0"
          } bg-background shadow-lg transition-all duration-300 ease-in-out dark:border py-2 dark:border-secondary-500 overflow-auto rounded-xl  absolute top-12 z-[999] inset-0 `}
        >
          {list?.map((item) => (
            <li
              key={item.value}
              className=" hover:bg-secondary-100 cursor-pointer text-secondary-700 text-xs py-2 p-3 "
              onClick={() => {
                setValue(item);
                setOpen(false);
              }}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
