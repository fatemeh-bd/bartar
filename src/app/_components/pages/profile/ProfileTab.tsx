"use client";
import React from "react";
import { ProfileItemType } from "../../header/types";
import {
  AcademicCapIcon,
  ArrowLeftStartOnRectangleIcon,
  BellIcon,
  HeartIcon,
  PencilIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import Paragraph from "../../typography/Paragraph";
import { ProfileItem, Sizes } from "@/_utiles/enums";
import { useRouter, useSearchParams } from "next/navigation";
const profileItemlist: ProfileItemType[] = [
  {
    icon: Squares2X2Icon,
    text: "پیشخوان",
    path: ProfileItem.DASHBOARD,
  },
  {
    icon: AcademicCapIcon,
    text: "دوره ها",
    path: ProfileItem.COURSES,
  },
  {
    icon: HeartIcon,
    text: "علاقمندی ها",
    path: ProfileItem.FAVORITE,
  },
  {
    icon: BellIcon,
    text: "اعلانات",
    path: ProfileItem.NOTIFICATIONS,
  },
  {
    icon: PencilIcon,
    text: "ویرایش پروفایل",
    path: ProfileItem.PROFILE_EDIT,
  },
  {
    icon: ArrowLeftStartOnRectangleIcon,
    text: "خروج از حساب ",
    path: "/login",
  },
];
const ProfileTab = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const router = useRouter();
  return (
    <div className="bg-secondary-200 rounded-3xl p-4 my-6">
      {profileItemlist.map((item, index) => (
        <div
          key={index}
          onClick={() =>
            index === profileItemlist.length - 1
              ? router.replace(item.path)
              : router.push(`?page=${item.path}`)
          }
          className={`flex items-center gap-2 cursor-pointer ${
            page === item.path
              ? "bg-primary [&>*]:!text-[#fff]"
              : "bg-background text-secondary-700"
          } rounded-full p-3 my-3`}
        >
          <item.icon className="size-5 " />
          <Paragraph size={Sizes.sm}>{item.text}</Paragraph>
        </div>
      ))}
    </div>
  );
};

export default ProfileTab;
