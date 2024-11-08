import { ClockIcon, InformationCircleIcon, Squares2X2Icon, UserGroupIcon } from "@heroicons/react/20/solid";
import React from "react";
import Paragraph from "../../../typography/Paragraph";
import { Sizes } from "@/_utiles/enums";
const iconClass = "size-11 mx-auto text-primary bg-background rounded-full p-3";
const items = [
  {
    title: " مدت دوره",
    icon: <ClockIcon className={iconClass} />,
    desc: "  ۱۴:۵۴:۱۶",
  },
  {
    title: " تعداد جلسات",
    icon: <Squares2X2Icon className={iconClass} />,
    desc: " ۹۹",
  },

  {
    title: " نوع دوره",
    icon: <InformationCircleIcon className={iconClass} />,
    desc: " ویژه / نقدی",
  },
  {
    title: " شرکت‌کنندگان",
    icon: <UserGroupIcon className={iconClass} />,
    desc: "  ۱۲۲ دانشجو",
  },
];
const InfoItemsList = () => {
  return (
    <div className="grid grid-cols-12 gap-5">
      {items.map(({ icon, title, desc }, index) => (
        <div
          key={index}
          className="lg:col-span-3 col-span-6 space-y-2 bg-secondary-200 border border-border rounded-2xl cursor-default p-3"
        >
          {icon}
          <div className="text-center space-y-1">
            <Paragraph
              size={Sizes.sm}
              className="font-medium text-xs text-secondary-700 line-clamp-1"
            >
              {title}
            </Paragraph>
            <span className="font-medium text-sm text-black line-clamp-1">
              {desc}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoItemsList;
