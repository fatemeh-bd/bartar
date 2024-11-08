import MainButton from "@/app/_components/buttons/MainButton";
import Input from "@/app/_components/inputs/Input";
import SectionTitle from "@/app/_components/typography/SectionTitle";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import React from "react";

const EditProfile = () => {
  return (
    <div>
      <SectionTitle title="ویرایش پروفایل" />
      <form className="grid grid-cols-12 gap-4 mt-10">
        <div className="md:col-span-6 col-span-12 ">
          <Input label="نام و نام خانوادگی (فارسی)" />
        </div>
        <div className="md:col-span-6 col-span-12 ">
          <Input label="ایمیل" />
        </div>
        <div className="md:col-span-6 col-span-12 ">
          <Input label="شماره تلفن" />
        </div>
        <div className="md:col-span-6 col-span-12 ">
          <Input label="تاریخ تولد" />
        </div>
        <MainButton className="col-span-12 mr-auto">
          بروزرسانی
          <ArrowPathIcon className="size-5" />
        </MainButton>
      </form>
    </div>
  );
};

export default EditProfile;
