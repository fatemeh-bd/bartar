import SectionTitle from "@/app/_components/typography/SectionTitle";
import React from "react";
import { sampleData } from "../../landing/LastCourses/LastCourses";
import Image from "next/image";
import GradientBox from "@/app/_components/GradientBox";
import CourseData from "@/app/_components/courseBox/CourseData";
import LineSplitter from "@/app/_components/LineSplitter";

const Favorites = () => {
  return (
    <div>
      <SectionTitle title="دوره هایی که پسندیدید" />
      {sampleData.map((item, index) => (
        <React.Fragment key={item.id}>
          <div className="grid grid-cols-12 gap-6 my-6">
            <Image
              className="rounded-3xl w-full  sm:col-span-4 col-span-12"
              alt="course image"
              src={item.img}
              width={250}
              height={190}
            />

            <GradientBox
              type="bottom"
              className="!p-0 w-full sm:col-span-8 col-span-12"
            >
              <CourseData theme={"white"} data={item} />
            </GradientBox>
          </div>
          {index !== sampleData.length - 1 && <LineSplitter className="my-8" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Favorites;
