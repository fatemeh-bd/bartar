import { ColorType, Sizes } from "@/_utiles/enums";
import SectionTitle from "@/app/_components/typography/SectionTitle";
import React from "react";
import FlexItemCenter from "@/app/_components/flex/FlexItemCenter";
import Paragraph from "@/app/_components/typography/Paragraph";

import MainButton from "@/app/_components/buttons/MainButton";
import Teacher from "@/app/_components/courseBox/Teacher";

const AddComments = () => {
  return (
    <div className="bg-background border border-secondary-500 rounded-3xl p-5 mb-5">
      <SectionTitle size={Sizes.sm} title="ارسال دیدگاه یا پرسش" />

      <FlexItemCenter className="flex-wrap mb-5" gap="gap-4">
        <FlexItemCenter className="sm:w-auto w-full">
          <Teacher desc="مجید" name="۲هفته پیش" avatar="/images/avatar.jpeg" />
        </FlexItemCenter>
        <span className="block size-1 bg-secondary-500 rounded-full"></span>
        <Paragraph type={ColorType.SECONDARY} size={Sizes.xs}>
          در پاسخ به
        </Paragraph>
        <span className="block size-1 bg-secondary-500 rounded-full"></span>
        <Paragraph
          size={Sizes.sm}
          className="line-clamp-1 font-semibold text-sm text-foreground hover:text-primary"
        >
          جلال بهرامی راد
        </Paragraph>
        <button
          type="button"
          className="line-clamp-1 font-semibold text-sm text-red-500 mr-auto"
        >
          لغو پاسخ
        </button>
      </FlexItemCenter>

      <form className="flex flex-col space-y-5">
        <textarea
          name="text"
          id="text"
          rows={10}
          className="form-textarea w-full !ring-0 !ring-offset-0 bg-secondary-200 border-0 focus:border-secondary-500 border-secondary-500 rounded-xl text-sm text-foreground p-5"
          placeholder="متن مورد نظر خود را وارد کنید ..."
        ></textarea>
        <MainButton className="w-fit mr-auto" defaultIcon>
          ثبت دیدگاه یا پرسش
        </MainButton>
      </form>
    </div>
  );
};

export default AddComments;
