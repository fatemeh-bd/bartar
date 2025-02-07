"use client";

import React, { useState } from "react";
import CourseBox from "../../courseBox/CourseBox";
import { sampleData } from "../landing/LastCourses/LastCourses";
import DropDown from "../../dropDown/DropDown";
import {
  AdjustmentsHorizontalIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";
import useScreenWidth from "../../hooks/useScreenWidth";
import { ColorType, startMobileSize } from "@/utils/enums";
import Filter from "./Filter";
import MainButton from "../../buttons/MainButton";
import FlexBetween from "../../flex/FlexBetween";
import FlexItemCenter from "../../flex/FlexItemCenter";

const AllCourse = () => {
  const [filter, setFilter] = useState({ sort: "" });
  const isMobile = useScreenWidth(startMobileSize);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  return (
    <div>
      <FlexItemCenter gap="gap-3">
        <DropDown
          list={[
            { text: "در حال برگزاری", value: 1 },
            { text: "جدید ترین", value: 2 },
          ]}
          setValue={(e) => {
            setFilter((prev) => ({
              ...prev,
              sort: e.text,
            }));
          }}
          value={filter.sort}
          label={
            <>
              <AdjustmentsHorizontalIcon className="size-4" />
              مرتب سازی:
            </>
          }
          className={
            "sm:w-[320px] w-[200px] flex items-center gap-2 sortDropDown"
          }
        />
        {isMobile && (
          <MainButton
            themeType={ColorType.SECONDARY}
            className=" rounded-xl"
            onClick={toggleFilter}
          >
            <FunnelIcon className="size-5 text-secondary-700" />
          </MainButton>
        )}
      </FlexItemCenter>
      {isMobile && (
        <div>
          <div
            onClick={toggleFilter}
            className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-[9999] flex justify-end ${
              isFilterOpen ? "opacity-100" : "opacity-0 size-0 overflow-hidden"
            }`}
          ></div>
          <div
            className={`${
              isFilterOpen ? "transition-transform" : " translate-x-full"
            } bg-white  z-[9999] fixed  w-3/4 h-full p-6 overflow-y-auto right-0 top-0 bottom-0`}
          >
            <Filter />
          </div>
        </div>
      )}

      <div className="grid grid-cols-12 gap-6 mt-4">
        {sampleData?.map((item, index) => (
          <CourseBox
            data={item}
            key={index}
            className={"lg:col-span-4 md:col-span-6  col-span-12"}
          />
        ))}
      </div>
    </div>
  );
};

export default AllCourse;
