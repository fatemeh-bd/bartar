"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Squares2X2Icon } from "@heroicons/react/20/solid";
import { CourseType } from "../pages/landing/types";
import CourseData from "./CourseData";
const CourseBox = ({
  data,
  className,
  progress,
}: {
  data: CourseType;
  className?: string;
  progress?: number;
}) => {
  return (
    <div className={className || ""}>
      <div className="relative z-10">
        <Link href={"/courses/1"} className="block">
          <Image
            src={data.img}
            className="w-full rounded-3xl"
            alt="..."
            width={200}
            height={100}
          />
        </Link>
        <Link
          href={"/"}
          className="absolute left-3 top-3 h-11 inline-flex items-center justify-center gap-1  rounded-full text-white transition-all hover:opacity-80 px-4"
        >
          <Squares2X2Icon className="size-6" />
          <span className="font-semibold text-sm">{data.label}</span>
        </Link>
      </div>
      <CourseData progress={progress} data={data} />
    </div>
  );
};

export default CourseBox;
