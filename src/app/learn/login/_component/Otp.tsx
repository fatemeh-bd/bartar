"use client";
import MainButton from "@/app/_components/buttons/MainButton";
import Input from "@/app/_components/inputs/Input";
import Label from "@/app/_components/inputs/Label";
import SectionTitle from "@/app/_components/typography/SectionTitle";
import { useRouter } from "next/navigation";
import React from "react";

const Otp = () => {
  const router = useRouter();
  return (
    <>
      <SectionTitle title="کد تایید را وارد کنید" />

      <form className="space-y-3">
        <Label> کد تایید برای شماره ۰۹۹۰۱۴۳۳۴۴۵ پیامک شد</Label>
        <Input className="!border border-secondary-500" />
        <MainButton defaultIcon full onClick={() => router.push("/")}>
          تایید
        </MainButton>
      </form>
    </>
  );
};

export default Otp;
