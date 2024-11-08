import React from "react";
import FlexItemCenter from "../flex/FlexItemCenter";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import MainButton from "../buttons/MainButton";

const NewsLetter = () => {
  return (
    <form>
      <FlexItemCenter gap="gap-3" className="relative">
        <EnvelopeIcon className="size-5 text-secondary-700 absolute right-3" />
        <input
          type="email"
          className="w-full h-11 !ring-0 !ring-offset-0 bg-secondary-200 border-0 focus:border-border rounded-xl text-sm text-secondary-700 pr-10"
          placeholder="آدرس ایمیل"
          required
        />

        <MainButton className=" rounded-xl font-normal whitespace-nowrap text-xs">
          ثبت ایمیل
        </MainButton>
      </FlexItemCenter>
    </form>
  );
};

export default NewsLetter;
