"use client";

import React from "react";
import Title from "../../typography/Title";
import Input, { boxClass } from "../../inputs/Input";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Sizes } from "@/utils/enums";
import { Squares2X2Icon, StarIcon } from "@heroicons/react/24/outline";
import Accordion from "../../accordion/Accordion";
import Switch from "../../switchButton/Switch";
import Paragraph from "../../typography/Paragraph";
import FlexBetween from "../../flex/FlexBetween";
import Radio from "../../inputs/Radio";
import LineSplitter from "../../LineSplitter";

const Filter = () => {
  return (
    <div className="bg-background space-y-3 font-medium">
      <div>
        <Title size={Sizes.xs}>جستجو دوره</Title>
        <Input
          placeholder="عنوان دوره ..."
          icon={<MagnifyingGlassIcon className="size-6" />}
        />
      </div>
      <div className={boxClass}>
        <Switch label="    در حال برگزاری" />
      </div>
      <Accordion
        defaultOpen={true}
        title={
          <>
            <StarIcon className="size-5" />
            نوع دوره
          </>
        }
        component={
          <div>
            <FlexBetween>
              <Radio name="type" value="free" label="رایگان" />
              <Paragraph className="font-normal">۱۸</Paragraph>
            </FlexBetween>
            <FlexBetween>
              <Radio name="type" value="price" label=" فقط نقدی" />
              <Paragraph className="font-normal">۹</Paragraph>
            </FlexBetween>
            <FlexBetween>
              <Radio name="type" value="vip" label="   نقدی و اعضای ویژه" />
              <Paragraph className="font-normal">43</Paragraph>
            </FlexBetween>
          </div>
        }
      />
      <LineSplitter />

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
  );
};

export default Filter;
