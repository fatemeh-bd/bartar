import React from "react";
import CommenstSlider from "./CommenstSlider";
import TitleBox from "../TitleBox";

const LandingComments = () => {
  return (
    <div className="md:grid md:grid-cols-12 md:gap-10 md:space-y-0 space-y-5 my-32 items-center">
      <div className="md:col-span-4 flex items-center gap-5">
        <TitleBox
          title=" در مورد نابغه چه میشنویم؟"
          description="   این‌ها، بخش خیلی کوچکی از نظراتی هستند که افراد مختلف در مورد نابغه
          دارند."
        />
      </div>
      <div className="md:col-span-8 w-full max-w-xl mx-auto md:p-[1rem] p-[2rem]">
        <CommenstSlider />
      </div>
    </div>
  );
};

export default LandingComments;
