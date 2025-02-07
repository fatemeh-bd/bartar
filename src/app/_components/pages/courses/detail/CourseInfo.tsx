import React from "react";
import SectionTitle from "../../../typography/SectionTitle";
import FlexBetween from "../../../flex/FlexBetween";
import Paragraph from "../../../typography/Paragraph";
import { ColorType, Sizes } from "@/utils/enums";
import { numberWithCommas } from "@/utils/helper";
import Toman from "../../../Toman";
import FlexCenter from "../../../flex/FlexCenter";
import MainButton from "../../../buttons/MainButton";

import Link from "next/link";
import GradientBox from "@/app/_components/GradientBox";
import Like from "@/app/_components/courseBox/Like";
import Teacher from "@/app/_components/courseBox/Teacher";

const CourseInfo = () => {
  return (
    <div className="space-y-6">
      <GradientBox type="bottom" className="space-y-4 pt-0">
        <div className="bg-background rounded-b-2xl  px-3 pb-1 pt-4">
          <SectionTitle title="نام نویسی در دوره" />
        </div>
        <FlexBetween>
          <Paragraph>هزینه ثبت نام:</Paragraph>
          <div className="flex gap-2 items-center">
            <Paragraph
              size={Sizes.xl}
              type={ColorType.BLACK}
              className="font-black"
            >
              {numberWithCommas(20000)}
            </Paragraph>
            <Toman />
          </div>
        </FlexBetween>
        <FlexCenter>
          <MainButton className="w-[90%]" defaultIcon>
            اضافه به سبد
          </MainButton>
          <Like />
        </FlexCenter>
      </GradientBox>
      <div>
        <SectionTitle title="مدرس دوره" />
        <Teacher
          avatar="/images/avatar.jpeg"
          name={
            <Paragraph
              size={Sizes.sm}
              type={ColorType.BLACK}
              className="font-medium"
            >
              جلال بهرامی راد
            </Paragraph>
          }
          desc={
            <Link href={"/"} className="text-primary text-xs font-medium">
              دیدن رزومه
            </Link>
          }
        />

        <div className="bg-secondary-200 rounded-tl-2xl rounded-b-2xl text-sm text-secondary-700 p-4 mt-2">
          <Paragraph size={Sizes.sm}>
            اول داستان، طراح گرافیک بودم و ۲ سالی به عنوان طراح مشغول بودم، بعد
            به برنامه‌نویسی علاقمند شدم و الان بیشتر از ۱۰ ساله که عاشق کدزنی و
            چالش‌های پروژه‌های مختلفم. به تدریس علاقه خاصی دارم و دوست دارم
            دانشی که در این راه بدست آوردم را در اختیار دیگران قرار بدم :)
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
