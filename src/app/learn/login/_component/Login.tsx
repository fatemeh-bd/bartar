import { ColorType, Sizes } from '@/_utiles/enums';
import { justEnterNumber } from '@/_utiles/helper';
import MainButton from '@/app/_components/buttons/MainButton';
import Input from '@/app/_components/inputs/Input';
import Label from '@/app/_components/inputs/Label';
import Paragraph from '@/app/_components/typography/Paragraph';
import SectionTitle from '@/app/_components/typography/SectionTitle';
import React, { Dispatch, SetStateAction, useState } from 'react';

const Login = ({ setOtp }: { setOtp: Dispatch<SetStateAction<string>> }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const sendOtpHandler = () => {
    if (!phoneNumber) {
      return setError('لطفا شماره تلفن خود را وارد کنید');
    }
    if (phoneNumber.length < 11) {
      setError('شماره تلفن باید ۱۱ رقمی باشد');
    } else {
      setError('');
      setOtp('otp');
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
        <button className="cursor-pointer w-full justify-center text-black flex gap-2 items-center bg-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-zinc-300 transition-all ease-in duration-200">
          <svg
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6">
            <path
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              fill="#FFC107"></path>
            <path
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              fill="#FF3D00"></path>
            <path
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              fill="#4CAF50"></path>
            <path
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              fill="#1976D2"></path>
          </svg>
          ادامه دادن با گوگل
        </button>
      </form>
      <span
        onClick={() => {
          setOtp('register');
        }}
        className="text-center block !mt-2 mx-auto w-full text-[var(--primary)] cursor-pointer underline">
        حساب کاربری نداری؟ ساخت حساب کاربری
      </span>
    </>
  );
};

export default Login;
