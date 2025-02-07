import Image from "next/image";
import React from "react";
import Title from "../typography/Title";
import FlexItemCenter from "../flex/FlexItemCenter";
import Paragraph from "../typography/Paragraph";
import { Sizes } from "@/utils/enums";
import Link from "next/link";
import FlexBetween from "../flex/FlexBetween";
import { ClockIcon } from "@heroicons/react/24/outline";
import Like from "./Like";

const CourseBox2 = () => {
  return (
    <Link href={"/blogs/example"} className="p-4 bg-background block rounded-xl space-y-2 my-6">
      <div className="relative mb-4">
        <Image
          className="rounded-xl w-full"
          width={200}
          height={100}
          alt="course"
          src={"/images/react.jpg"}
        />
        <Like className="size-8 absolute -bottom-3 left-3" />
      </div>
      <Title size={Sizes.xs}>دوره پروژه محور React و Next</Title>
      <FlexBetween>
        <FlexItemCenter>
          <Image
            className="size-7 rounded-full"
            src={"/images/avatar.jpeg"}
            alt="Rounded avatar"
            width={20}
            height={20}
          />
          <div className=" space-y-1 text-right">
            <Paragraph size={Sizes.xs}>جلال بهرامی راد</Paragraph>
          </div>
        </FlexItemCenter>
        <span
          className="font-bold text-xs bg-primary/10 rounded-full text-primary transition-all hover:opacity-80 py-2 px-4"
        >
          فرانت اند
        </span>
      </FlexBetween>
      <Paragraph
        size={Sizes.xs}
        className=" justify-end flex items-center gap-1"
      >
        <ClockIcon className="size-4" />
        زمان مطالعه:
        <span className="font-bold text-black"> ۲۰ دقیقه</span>
      </Paragraph>
    </Link>
  );
};

export default CourseBox2;
