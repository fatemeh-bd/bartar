"use client";
import React, { useState } from "react";
import FlexItemCenter from "../../flex/FlexItemCenter";
import DropDown from "../../dropDown/DropDown";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/20/solid";
import { ColorType } from "@/utils/enums";
import MainButton from "../../buttons/MainButton";
import { FunnelIcon } from "@heroicons/react/24/outline";
import CourseBox2 from "../../courseBox/CourseBox2";

const BlogsList = () => {
  const [filter, setFilter] = useState({ sort: "" });

  return (
    <div>
      <FlexItemCenter gap="gap-3">
        <DropDown
          list={[
            { text: "در حال برگزاری", value: 1 },
            { text: "جدید ترین", value: 2 },
          ]}
          setValue={(e) => {
            setFilter((prev) => ({
              ...prev,
              sort: e.text,
            }));
          }}
          value={filter.sort}
          label={
            <>
              <AdjustmentsHorizontalIcon className="size-4" />
              مرتب سازی:
            </>
          }
          className={"sm:w-[320px] w-full flex items-center gap-2"}
        />
      </FlexItemCenter>

      <div className="grid grid-cols-12 gap-6">
        <div className="lg:col-span-4 md:col-span-6 col-span-12 [&>a]:!my-0 shadow-lg">
          <CourseBox2 />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12 [&>a]:!my-0 shadow-lg">
          <CourseBox2 />
        </div>  <div className="lg:col-span-4 md:col-span-6 col-span-12 [&>a]:!my-0 shadow-lg">
          <CourseBox2 />
        </div>  <div className="lg:col-span-4 md:col-span-6 col-span-12 [&>a]:!my-0 shadow-lg">
          <CourseBox2 />
        </div>  <div className="lg:col-span-4 md:col-span-6 col-span-12 [&>a]:!my-0 shadow-lg">
          <CourseBox2 />
        </div>
      </div>
    </div>
  );
};

export default BlogsList;
