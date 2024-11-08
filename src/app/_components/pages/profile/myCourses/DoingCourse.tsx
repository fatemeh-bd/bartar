import React from "react";
import { sampleData } from "../../landing/LastCourses/LastCourses";
import CourseBox from "@/app/_components/courseBox/CourseBox";

const DoingCourse = () => {
  return (
    <div className="grid grid-cols-12 gap-4 mb-8">
      {sampleData.map((item, index) => (
        <div className="lg:col-span-4 md:col-span-6 col-span-12" key={index}>
          <CourseBox data={item} progress={78.9} />
        </div>
      ))}
    </div>
  );
};

export default DoingCourse;
