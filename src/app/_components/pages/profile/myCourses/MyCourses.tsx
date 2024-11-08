"use client";
import SectionTitle from "@/app/_components/typography/SectionTitle";
import React, { useState } from "react";
import DoingCourse from "./DoingCourse";
import { AcademicCapIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import CompletedCourse from "./CompletedCourse";
const myCourseList = [
  { id: 1, icon: AcademicCapIcon, label: "در حال یادگیری" },
  { id: 2, icon: DocumentTextIcon, label: "تکمیل شده" },
];
const myCourseContent = [<DoingCourse />, <CompletedCourse />];
const MyCourses = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <div>
      <SectionTitle title="دوره های من" />
      <div className="my-4 relative overflow-x-auto">
        <ul className="inline-flex gap-2 bg-secondary-200 border border-border border-secondary-500 md:text-base text-xs rounded-full p-1">
          {myCourseList.map((tab) => (
            <li
              key={tab.id}
              className={`${
                selectedTab == tab.id
                  ? "bg-background text-foreground  rounded-full"
                  : "text-secondary-700"
              } flex items-center gap-1 py-2 px-3 cursor-pointer text-sm`}
              onClick={() => setSelectedTab(tab.id)}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </li>
          ))}
        </ul>
      </div>
      {myCourseContent[selectedTab - 1]}
    </div>
  );
};

export default MyCourses;
