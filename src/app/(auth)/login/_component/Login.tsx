import { ColorType, Sizes } from "@/_utiles/enums";
import { justEnterNumber } from "@/_utiles/helper";
import MainButton from "@/app/_components/buttons/MainButton";
import Input from "@/app/_components/inputs/Input";
import Label from "@/app/_components/inputs/Label";
import Paragraph from "@/app/_components/typography/Paragraph";
import SectionTitle from "@/app/_components/typography/SectionTitle";
import React, { Dispatch, SetStateAction, useState } from "react";

const Login = ({ setOtp }: { setOtp: Dispatch<SetStateAction<boolean>> }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const sendOtpHandler = () => {
    if (!phoneNumber) {
      return setError("لطفا شماره تلفن خود را وارد کنید");
    }
    if (phoneNumber.length < 11) {
      setError("شماره تلفن باید ۱۱ رقمی باشد");
    } else {
      setError("");
      setOtp(true);
    }
  };
  return (
    <>
      <SectionTitle title="ورود یا ثبت نام" />
      <Paragraph size={Sizes.sm} type={ColorType.BLACK}>
        درود درود درود 👋
      </Paragraph>
      <form className="space-y-3">
        <Label>لطفا شماره موبایل یا ایمیل خود را وارد کنید</Label>
        <Input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="!border border-secondary-500"
          onInput={justEnterNumber}
        />
        <Paragraph type={ColorType.ERROR}>{error}</Paragraph>
        <MainButton defaultIcon full onClick={sendOtpHandler}>
          برو بریم
        </MainButton>
      </form>
    </>
  );
};

export default Login;
