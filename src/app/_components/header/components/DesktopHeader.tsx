"use client";
import React, { useState } from "react";
import FlexBetween from "../../flex/FlexBetween";
import FlexItemCenter from "../../flex/FlexItemCenter";
import { navItems } from "../Header";
import {
  AcademicCapIcon,
  ArrowLeftStartOnRectangleIcon,
  ChevronDownIcon,
  MoonIcon,
  ShoppingCartIcon,
  SparklesIcon,
  SunIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Paragraph from "../../typography/Paragraph";
import { ColorType, ProfileItem, Sizes } from "../../../../_utiles/enums";
import SubMenu from "../SubMenu";
import { Logo } from "./Logo";
import { Counter } from "./Counter";
import Link from "next/link";
import { ProfileItemType } from "../types";
import { useRouter } from "next/navigation";
const profileList: ProfileItemType[] = [
  {
    text: "مشاهده پروفایل",
    icon: SparklesIcon,
    path: "/profile?page=" + ProfileItem.DASHBOARD,
  },

  {
    text: "دوره ها",
    icon: AcademicCapIcon,
    path: `/profile?page=${ProfileItem.COURSES}`,
  },
];
const DesktopHeader = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showProfileItem, setShowProfileItem] = useState<boolean>(false);
  const router = useRouter();
  return (
    <FlexBetween className="md:flex hidden">
      <FlexItemCenter gap={"gap-8"}>
        <Logo />
        <nav>
          <ul className="flex items-center gap-6">
            {navItems.map((item, index) =>
              item.path ? (
                <Link
                  href={item.path}
                  className="flex items-center gap-2 relative cursor-pointer"
                  key={index}
                >
                  {item.text}
                </Link>
              ) : (
                <SubMenu data={item} key={index} />
              )
            )}
          </ul>
        </nav>
      </FlexItemCenter>
      <FlexItemCenter gap={"gap-4"}>
        {isDarkMode ? (
          <SunIcon
            onClick={() => {
              document.documentElement.classList.toggle("dark");
              setIsDarkMode(false);
            }}
            className="size-9 bg-secondary-100 text-black rounded-full p-2"
          />
        ) : (
          <MoonIcon
            onClick={() => {
              document.documentElement.classList.toggle("dark");
              setIsDarkMode(true);
            }}
            className="size-9 bg-secondary-100 text-black rounded-full p-2"
          />
        )}
        <Link href={"/cart"} className="relative">
          <ShoppingCartIcon className="size-9 bg-secondary-100 text-black rounded-full p-2" />
          <Counter value={2} />
        </Link>
        <UserIcon className="size-9 bg-secondary-100 text-black rounded-full p-2" />

        <FlexItemCenter
          onClick={() => setShowProfileItem(!showProfileItem)}
          className="relative cursor-pointer"
        >
          <div>
            <Paragraph type={ColorType.BLACK} size={Sizes.sm}>
              جلال بهرامی راد
            </Paragraph>
            <Paragraph size={Sizes.sm}>خوش آمـــدید</Paragraph>
          </div>
          <ChevronDownIcon className="size-4" />

          <div
            className={`absolute left-0 top-6 opacity-1   transition-all group-hover/categories:opacity-100 group-hover/categories:visible pt-5 z-10 ${
              !showProfileItem ? " invisible opacity-0" : ""
            }`}
          >
            <ul className="flex flex-col gap-2 p-4 relative w-56 [&>li>a]:!cursor-pointer rounded-xl max-h-[300px] bg-background border border-secondary-500 shadow-2xl shadow-black/5">
              {profileList?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className=" w-full flex items-center relative transition-colors cursor-pointer  hover:[&>div>p]:!text-primary"
                  >
                    <FlexItemCenter className="w-full hover:!text-primary">
                      <item.icon className="size-5" />
                      <Paragraph
                        size={Sizes.xs}
                        type={ColorType.BLACK}
                        className="font-medium"
                      >
                        {item.text}
                      </Paragraph>
                    </FlexItemCenter>
                  </Link>
                </li>
              ))}
              <li
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => router.push("/login")}
              >
                <ArrowLeftStartOnRectangleIcon className="size-5 text-rose-500" />
                <Paragraph
                  type={ColorType.ERROR}
                  className="font-medium !text-xs"
                >
                  خروج از حساب
                </Paragraph>
              </li>
            </ul>
          </div>
        </FlexItemCenter>
      </FlexItemCenter>
    </FlexBetween>
  );
};

export default DesktopHeader;
