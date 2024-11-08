import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";
import FlexBetween from "../flex/FlexBetween";
import Paragraph from "../typography/Paragraph";
import { Sizes } from "@/_utiles/enums";
import { NavItemType } from "./types";

const SubMenu = ({ data }: { data: NavItemType }) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  return (
    <li
      className="flex items-center gap-2 relative cursor-pointer"
      onMouseEnter={() => setOpenSubMenu(true)}
      onMouseLeave={() => setOpenSubMenu(false)}
    >
      <p className="flex items-center gap-2">
        {data.text}
        <ChevronDownIcon className="size-4" />
      </p>

      <div
        className={`absolute right-0 top-full opacity-1  transition-all group-hover/categories:opacity-100 group-hover/categories:visible pt-5 z-10 ${
          !openSubMenu ? " invisible opacity-0" : ""
        }`}
      >
        <ul className="flex flex-col relative w-56 max-h-[300px] bg-background border border-secondary-500 shadow-2xl shadow-black/5">
          {data.childrens?.map((item, index) => (
            <li className="group" key={index}>
              <Link
                href={item.path}
                className=" w-full flex items-center relative transition-colors cursor-pointer  hover:[&>div>p]:!text-primary py-2 px-3"
              >
                <FlexBetween className="w-full">
                  <Paragraph size={Sizes.sm}>{item.text}</Paragraph>
                  {/* <ChevronLeftIcon className="size-4 text-secondary-700" /> */}
                </FlexBetween>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default SubMenu;
