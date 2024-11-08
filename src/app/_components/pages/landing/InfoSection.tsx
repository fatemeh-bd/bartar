import React from "react";
import GradientBox from "../../GradientBox";
import TitleBox from "./TitleBox";
import CourseBox2 from "../../courseBox/CourseBox2";

const InfoSection = () => {
  return (
    <GradientBox className="lg:flex lg:items-center lg:gap-10">
      <TitleBox
        className="lg:w-4/12 flex !items-start gap-5 lg:mb-0 mb-8"
        title=" از گوشه و اطراف دنیای برنامه‌نویسی"
        description="نوشتن کار جالبیه که از هزاران سال همراه ما بوده و کمک کرده تا همیشه به روز باشیم، ما در نابغه فضای رو به شکلی آماده کردیم تا شما بتونید ایده‌ها و مطالب جالب حوزه برنامه‌نویسی رو در اختیار هزاران برنامه‌نویس عضو نابغه قرار بدید"
      />

      <div className="lg:w-8/12 w-full lg:mx-auto">
        <div className="md:flex gap-6 justify-center">
          <div>
            <CourseBox2 />
            <CourseBox2 />
          </div>
          <div className=" mt-8">
            <CourseBox2 />
            <CourseBox2 />
          </div>
        </div>
      </div>
    </GradientBox>
  );
};

export default InfoSection;
