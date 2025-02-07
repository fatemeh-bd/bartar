"use client";
import GradientBox from "@/app/_components/GradientBox";
import React from "react";
import Title from "@/app/_components/typography/Title";
import FlexItemCenter from "@/app/_components/flex/FlexItemCenter";
import FlexCenter from "@/app/_components/flex/FlexCenter";
import { ColorType, Sizes } from "@/utils/enums";
import { ClockIcon, Square2StackIcon } from "@heroicons/react/20/solid";
import FlexBetween from "@/app/_components/flex/FlexBetween";
import Paragraph from "@/app/_components/typography/Paragraph";
import Toman from "@/app/_components/Toman";
import { CourseType } from "../pages/landing/types";
import { useRouter } from "next/navigation";
import MainButton from "@/app/_components/buttons/MainButton";
import Status from "./Status";
import Teacher from "./Teacher";
import Like from "./Like";

const CourseData = ({
  data,
  theme,
  progress,
}: {
  data: CourseType;
  theme?: "white";
  progress?: number;
}) => {
  const router = useRouter();
  return (
    <div className="w-[90%] mx-auto space-y-5">
      <GradientBox
        type="top"
        className={theme === "white" ? "whiteBack rounded-t-none" : ""}
      >
        <Status text="تکمیل شده" />
        <Title
          size={Sizes.xs}
          className="line-clamp-1 hover:text-primary cursor-pointer"
        >
          {data.title}
        </Title>
      </GradientBox>
      <FlexItemCenter gap="gap-6" className="text-xs my-4 text-secondary-700">
        <FlexCenter gap="gap-1">
          <Square2StackIcon className="size-4" />
          {data.session}
        </FlexCenter>
        <FlexCenter gap="gap-1">
          <ClockIcon className="size-4" />
          {data.time}
        </FlexCenter>
      </FlexItemCenter>
      <FlexBetween>
        <Teacher name={"مدرس دوره:"} desc={data.name} avatar={data.avatar} />
        <FlexItemCenter>
          {data.type === "free" ? (
            <Paragraph
              type={ColorType.SUCCESS}
              size={Sizes.xl}
              className="font-black"
            >
              رایگان!
            </Paragraph>
          ) : (
            <>
              <Paragraph
                size={Sizes.xl}
                type={ColorType.BLACK}
                className="font-black"
              >
                {" "}
                {data.price}
              </Paragraph>
              <Toman />
            </>
          )}
        </FlexItemCenter>
      </FlexBetween>
      {progress && (
        <div>
          <Paragraph size={Sizes.xs} type={ColorType.PRIMARY}>{progress}% مشاهده شده</Paragraph>
          <div className="w-full mt-1 bg-secondary-500 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
              style={{ width: progress + "%" }}
            ></div>
          </div>
        </div>
      )}
      <FlexCenter>
        <MainButton
          className="w-[90%]"
          defaultIcon
          onClick={() => router.push("/courses/1")}
        >
          مشاهده دوره
        </MainButton>
        <Like />
      </FlexCenter>
    </div>
  );
};

export default CourseData;
