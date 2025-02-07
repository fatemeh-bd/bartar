"use client";
import { Sizes } from "@/utils/enums";
import Accordion from "@/app/_components/accordion/Accordion";
import Radio from "@/app/_components/inputs/Radio";
import BlogsList from "@/app/_components/pages/blogs/BlogsList";
import Hashtags from "@/app/_components/pages/blogs/Hashtags";
import TitleBox from "@/app/_components/pages/landing/TitleBox";
import Title from "@/app/_components/typography/Title";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import React from "react";

const BlogsPage = () => {
  return (
    <div>
      <TitleBox
        title="مقالات آموزشی"
        description="از گوشه و اطرافدنیای برنامه نویسی "
        className="mb-4"
      />
      <div className="grid grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-3 md:col-span-4 col-span-12 space-y-6 md:sticky top-24">
          <div>
            <Title size={Sizes.xs}>تگ های محبوب</Title>
            <Hashtags />
          </div>
          <Accordion
            title={
              <>
                <Squares2X2Icon className="size-5" />
                دسته بندی دوره
              </>
            }
            component={
              <div>
                <Radio name={"course"} value="laravel" label="لاراول" />
                <Radio name={"course"} value="js" label="جاوااسکریپت" />
                <Radio name={"course"} value="c#" label="سی شارپ" />
              </div>
            }
          />
        </div>
        <div className="lg:col-span-9 md:col-span-8 col-span-12">
          <BlogsList />
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
