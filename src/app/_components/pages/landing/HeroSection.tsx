import React from "react";
import FlexItemCenter from "../../flex/FlexItemCenter";
import MainButton from "../../buttons/MainButton";
import Paragraph from "../../typography/Paragraph";
import { TicketIcon } from "@heroicons/react/24/outline";
import { ColorType, Sizes } from "@/_utiles/enums";
import Image from "next/image";
import GradientBox from "../../GradientBox";

const HeroSection = () => {
  return (
    <div className=" space-y-14 mx-auto">
      <GradientBox>
        <div className="flex md:flex-nowrap flex-wrap md:flex-row flex-col items-center justify-center gap-10 md:py-[4.5rem] py-10">
          <div className=" space-y-6 px-6">
            <FlexItemCenter>
              <MainButton className=" font-semibold !text-xs animate-pulse !py-1 px-2">
                <TicketIcon className="size-4" />
                جشنــــواره تخفیف !
              </MainButton>
              <Paragraph size={Sizes.sm} type={ColorType.PRIMARY}>
                به زودی :)
              </Paragraph>
            </FlexItemCenter>
            <h1 className="text-black font-black sm:text-5xl text-3xl  text-foreground">
              داستان برنامه‌نویس شدنت
              <br />
              از اینجا شروع میشه!
            </h1>
            <Paragraph>
              یادگیری برنامه‌نویسی آرزو نیست، فقط نیاز هست که تلاش و تمرین داشته
              باشید، بقیه‌اش با کد برتر
            </Paragraph>
            <MainButton defaultIcon>
              شروع یادگیری برنامه‌نویسی
            
            </MainButton>
          </div>
          <div className="flex-shrink-0 flex justify-center md:w-72 w-full md:order-2 -order-1">
            <Image
              className="max-w-full"
              src={"/images/mainVector.png"}
              alt="vector"
              width={300}
              height={300}
              loading="eager"
            />
          </div>
        </div>
      </GradientBox>
    </div>
  );
};

export default HeroSection;
