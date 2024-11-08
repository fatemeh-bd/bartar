"use client";
import { Sizes, startMobileSize } from "@/_utiles/enums";
import useScreenWidth from "@/app/_components/hooks/useScreenWidth";
import AllCourse from "@/app/_components/pages/courses/AllCourse";
import Filter from "@/app/_components/pages/courses/Filter";
import TitleBox from "@/app/_components/pages/landing/TitleBox";
import Paragraph from "@/app/_components/typography/Paragraph";
import React from "react";

const AllCoursePage = () => {
  const isMobile = useScreenWidth(startMobileSize);
  return (
    <div>
      <TitleBox
        title="دوره های آموزشی"
        description={
          <Paragraph size={Sizes.sm}>
            دوره ببین، تمرین کن، برنامه نویس شو
          </Paragraph>
        }
      />

      <div className="grid grid-cols-12 items-start gap-6 my-6">
        {!isMobile && (
          <div className="md:col-span-3 hidden md:block sticky top-24">
            <Filter />
          </div>
        )}

        <div className="md:col-span-9 col-span-12">
          <AllCourse />
        </div>
      </div>
    </div>
  );
};

export default AllCoursePage;
