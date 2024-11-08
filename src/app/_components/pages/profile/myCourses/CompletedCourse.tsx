import FlexCenter from "@/app/_components/flex/FlexCenter";
import Paragraph from "@/app/_components/typography/Paragraph";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import React from "react";

const CompletedCourse = () => {
  return (
    // <div className="grid grid-cols-12 gap-4 mb-8">
    //   {sampleData.map((item, index) => (
    //     <div className="lg:col-span-4 md:col-span-6 col-span-12" key={index}>
    //       <CourseBox data={item} />
    //     </div>
    //   ))}
    // </div>
    <FlexCenter className="space-y-1 flex-col mt-20">
      <AcademicCapIcon className="size-8 text-secondary-700" />
      <Paragraph className="text-center">دوره ی تکمیل شده ندارید!</Paragraph>
    </FlexCenter>
  );
};

export default CompletedCourse;
