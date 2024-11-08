import React from "react";
import DashboardInfoBox, { DashboardInfoItem } from "./DashboardInfoBox";
import FlexBetween from "@/app/_components/flex/FlexBetween";
import {
  AcademicCapIcon,
  CursorArrowRaysIcon,
  StarIcon,
  WalletIcon,
} from "@heroicons/react/20/solid";
import SectionTitle from "@/app/_components/typography/SectionTitle";
import { sampleData } from "../../landing/LastCourses/LastCourses";
import CourseBox from "@/app/_components/courseBox/CourseBox";
const dashboardItemList: DashboardInfoItem[] = [
  {
    title: "باقیمانده اشتراک",
    desc: "عضو ویژه نیستید",
    icon: CursorArrowRaysIcon,
    color: "text-cyan-500",
  },
  {
    title: "درحال یادگیری",
    desc: "۷ دوره",
    icon: AcademicCapIcon,
    color: "text-green-500",
  },
  {
    title: "امتیازات",
    desc: "۸۵,۴۸۰ ستاره",
    icon: StarIcon,
    color: "text-yellow-500",
  },
  {
    title: "موجودی کیف پول",
    desc: "۱,۰۷۹,۰۰۰",
    icon: WalletIcon,
    color: "text-violet-500",
  },
];
const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4 mb-8">
        {dashboardItemList.map((item, index) => (
          <div className="lg:col-span-3 md:col-span-6 col-span-12" key={index}>
            <DashboardInfoBox data={item} />
          </div>
        ))}
      </div>
      <SectionTitle title="دوره های در حال یادگیری" />
      <div className="grid grid-cols-12 gap-4 mb-8">
        {sampleData.map((item, index) => (
          <div className="lg:col-span-4 md:col-span-6 col-span-12" key={index}>
            <CourseBox data={item} progress={68} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
