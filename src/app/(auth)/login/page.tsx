"use client";
import React, { useState } from "react";
import GradientBox from "../../_components/GradientBox";
import FlexCenter from "@/app/_components/flex/FlexCenter";
import { Logo } from "@/app/_components/header/components/Logo";
import Paragraph from "@/app/_components/typography/Paragraph";
import { Sizes } from "@/_utiles/enums";
import Otp from "./_component/Otp";
import Login from "./_component/Login";

const LoginPage = () => {
  const [otp, setOtp] = useState<boolean>(false);
  return (
    <FlexCenter className="lg:w-2/6 min-h-screen p-5 flex-col mx-auto">
      <GradientBox type="bottom" className="pt-0 w-full max-w-sm space-y-5">
        <div className="bg-background rounded-b-2xl p-5">
          <Logo />
        </div>
        {otp ? <Otp /> : <Login setOtp={setOtp} />}
      </GradientBox>
      <Paragraph
        size={Sizes.xs}
        className="bg-secondary-200 text-center rounded-xl space-y-5 p-5 mt-3"
      >
        ورود شما به معنای پذیرش شرایط و قوانین حریم خصوصی است.
      </Paragraph>
    </FlexCenter>
  );
};

export default LoginPage;
