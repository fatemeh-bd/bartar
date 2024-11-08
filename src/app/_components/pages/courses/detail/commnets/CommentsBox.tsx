import FlexBetween from "@/app/_components/flex/FlexBetween";
import React from "react";
import FlexCenter from "@/app/_components/flex/FlexCenter";
import FlexItemCenter from "@/app/_components/flex/FlexItemCenter";
import { ArrowUturnRightIcon } from "@heroicons/react/20/solid";
import Paragraph from "@/app/_components/typography/Paragraph";
import { ColorType, Sizes } from "@/_utiles/enums";
import Like from "@/app/_components/courseBox/Like";
import Teacher from "@/app/_components/courseBox/Teacher";

const CommentsBox = ({
  data,
  className,
}: {
  data: { text: string; name: string };
  className?: string;
}) => {
  return (
    <div
      className={`bg-background border border-secondary-500  rounded-3xl p-5 mb-5 ${
        className || ""
      }`}
    >
      <FlexBetween className="flex-wrap gap-4 pb-4 border-b border-secondary-500">
        <Teacher
          avatar="/images/userExample.jpeg"
          name={
            <Paragraph size={Sizes.sm} className="font-medium">
              {data.name}
            </Paragraph>
          }
          desc={
            <Paragraph
              size={Sizes.xs}
              type={ColorType.SECONDARY}
              className="font-normal"
            >
              ۲ هفته پیش
            </Paragraph>
          }
        />

        <FlexCenter gap="gap-4" className="mr-auto">
          <FlexItemCenter className="h-9 gap-1 bg-secondary-200 rounded-full text-secondary-700 transition-colors hover:text-primary px-4 cursor-pointer">
            <span className="text-xs">پاسخ</span>
            <ArrowUturnRightIcon className="size-5" />
          </FlexItemCenter>
          <div className="relative">
            <FlexCenter className="absolute -top-1 -right-1 inline-flex bg-red-500 rounded-full text-xs text-white px-1">
              ۳
            </FlexCenter>
            <Like className="size-9" />
          </div>
        </FlexCenter>
      </FlexBetween>
      <Paragraph className="py-4">{data.text}</Paragraph>
    </div>
  );
};

export default CommentsBox;
