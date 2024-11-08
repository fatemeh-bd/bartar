import { ColorType, Sizes } from "@/_utiles/enums";
import FlexItemCenter from "@/app/_components/flex/FlexItemCenter";
import Paragraph from "@/app/_components/typography/Paragraph";
import SectionTitle from "@/app/_components/typography/SectionTitle";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const Notifications = () => {
  return (
    <div>
      <SectionTitle title="اعلانات" />
      <FlexItemCenter className="border border-secondary-500 rounded-2xl p-4 my-4">
        <InformationCircleIcon className="size-6 text-yellow-500" />
        <span className="block w-0.5 h-5 bg-secondary-500 mx-3"></span>
        <div className="space-y-1">
          <Paragraph className="font-bold" type={ColorType.BLACK}>
            ورود به سیستم
          </Paragraph>
          <Paragraph size={Sizes.sm}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </Paragraph>
        </div>
      </FlexItemCenter>
      <FlexItemCenter className="border border-secondary-500 rounded-2xl p-4 my-4">
        <InformationCircleIcon className="size-6 text-yellow-500" />
        <span className="block w-0.5 h-5 bg-secondary-500 mx-3"></span>
        <div className="space-y-1">
          <Paragraph className="font-bold" type={ColorType.BLACK}>
            ورود به سیستم
          </Paragraph>
          <Paragraph size={Sizes.sm}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </Paragraph>
        </div>
      </FlexItemCenter>
    </div>
  );
};

export default Notifications;
