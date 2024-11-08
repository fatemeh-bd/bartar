"use client";
import React from "react";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import Paragraph from "../../../typography/Paragraph";
import { Sizes } from "@/_utiles/enums";
import { Navigation } from "swiper/modules";
import Teacher from "@/app/_components/courseBox/Teacher";

const CommenstSlider = () => {
  return (
    <Swiper
      mousewheel={true}
      effect={"cards"}
      navigation={true}
      grabCursor={true}
      modules={[EffectCards, Navigation]}
      className="commentSwiper"
    >
      <SwiperSlide className="rounded-2xl commentShadow">
        <div className="flex flex-col text-center bg-background space-y-6 items-center rounded-2xl p-8 border border-secondary-500">
          <Paragraph size={Sizes.sm}>
            من به تیم شما بابت پشتیبانی عالیتان از وبسایتتان تشکر می‌کنم. سوالات
            و مشکلات من به سرعت پاسخ داده می‌شوند و همیشه یک راه حل مناسب برای
            هر مشکل پیدا می‌کنید. این امر بسیار قابل ارزش است.
          </Paragraph>
          <Teacher
            name="جلال بهرامی"
            desc="دوره پروژه محور React و Next"
            avatar="/images/avatar.jpeg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="rounded-2xl commentShadow">
        <div className="flex flex-col text-center bg-background space-y-6 items-center rounded-2xl p-8 border border-secondary-500">
          <Paragraph size={Sizes.sm}>
            من به تیم شما بابت پشتیبانی عالیتان از وبسایتتان تشکر می‌کنم. سوالات
            و مشکلات من به سرعت پاسخ داده می‌شوند و همیشه یک راه حل مناسب برای
            هر مشکل پیدا می‌کنید. این امر بسیار قابل ارزش است.
          </Paragraph>
          <Teacher
            name="جلال بهرامی"
            desc="دوره پروژه محور React و Next"
            avatar="/images/avatar.jpeg"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CommenstSlider;
