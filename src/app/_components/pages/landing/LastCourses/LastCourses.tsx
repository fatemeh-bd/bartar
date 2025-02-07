"use client";
import React from "react";
import GradientBox from "../../../GradientBox";

import { AcademicCapIcon } from "@heroicons/react/16/solid";

import { ColorType } from "@/utils/enums";
import MainButton from "../../../buttons/MainButton";
import FlexBetween from "../../../flex/FlexBetween";
import CourseBox from "../../../courseBox/CourseBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { CourseType } from "../types";
import TitleBox from "../TitleBox";

export const sampleData: CourseType[] = [
  {
    id: 1,
    title: "دوره پروژه محور React و Next",
    img: "/images/react.jpg",
    avatar: "/images/avatar.jpeg",
    name: "  جلال بهرامی راد",
    session: "۵ فصل",
    time: "۲۵ ساعت",
    status: "تکمیل شده",
    label: "فرانت اند",
    type: "free",
    price: "۶۹۹,۰۰۰",
  },

  {
    id: 2,
    title: "قدم صفر برنامه نویسی",
    img: "/images/programming.jpg",
    avatar: "/images/avatar.jpeg",
    name: "  جلال بهرامی راد",
    session: "۵ فصل",
    time: "۲۵ ساعت",
    status: "تکمیل شده",
    label: "برنامه نویسی",
    type: "price",
    price: "۶۹۹,۰۰۰",
  },
  {
    id: 3,
    title: "آموزش فلاتر از صفر ",
    img: "/images/flatter.jpg",
    avatar: "/images/avatar.jpeg",
    name: "  جلال بهرامی راد",
    session: "۵ فصل",
    time: "۲۵ ساعت",
    status: "تکمیل شده",
    label: "موبایل",
    type: "price",
    price: "۶۹۹,۰۰۰",
  },
  {
    id: 4,
    title: "آموزش Composer ",
    img: "/images/composor.jpg",
    avatar: "/images/avatar.jpeg",
    name: "  جلال بهرامی راد",
    session: "۵ فصل",
    time: "۲۵ ساعت",
    status: "تکمیل شده",
    label: "بک اند",
    type: "price",
    price: "۶۹۹,۰۰۰",
  },
];
const LastCourses = () => {
  return (
    <div>
      <GradientBox className="!p-5">
        <FlexBetween>
          <TitleBox title=" آخرین دوره های" description="منتشر شده" />

          <MainButton
            themeType={ColorType.SECONDARY}
            className="md:!w-fit size-10 md:!p-4 !p-1"
            defaultIcon
          >
            <span className="md:inline-block hidden"> مشاهده همه</span>
            
          </MainButton>
        </FlexBetween>
      </GradientBox>

      <Swiper
        mousewheel={true}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="CourseSwiper my-8"
      >
        {sampleData.map((item) => (
          <SwiperSlide key={item.id}>
            <CourseBox data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LastCourses;

export const AcademyIcon = () => {
  return (
    <AcademicCapIcon className="size-12 text-white bg-primary rounded-full p-3" />
  );
};
