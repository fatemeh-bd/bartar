import CourseContent from "@/app/_components/pages/courses/detail/CourseContent";
import CourseInfo from "@/app/_components/pages/courses/detail/CourseInfo";
import React from "react";

const DetailCoursePage = () => {
  return (
    <div className="grid grid-cols-12 items-start gap-6">
      <div className="md:col-span-8 col-span-12">
        <CourseContent />
      </div>
      <div className="md:col-span-4 col-span-12 sticky top-24">
        <CourseInfo />
      </div>
    </div>
  );
};

export default DetailCoursePage;
