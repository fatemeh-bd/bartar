import { ColorType, Sizes } from "@/utils/enums";
import { justEnterNumber } from "@/utils/helper";
import MainButton from "@/app/_components/buttons/MainButton";
import Input from "@/app/_components/inputs/Input";
import Label from "@/app/_components/inputs/Label";
import Paragraph from "@/app/_components/typography/Paragraph";
import SectionTitle from "@/app/_components/typography/SectionTitle";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { callApi } from "@/api/callApi";
import { CONFIRM_EMAIL } from "@/api/endpoints/auth_endpoints";
import LoginGoogleButton from "@/app/_components/buttons/LoginGoogleButton";

const Login = ({ setOtp }: { setOtp: Dispatch<SetStateAction<string>> }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ email: string }>();
  const [message, setMessage] = useState<{
    status: "error" | "success";
    msg: string;
  } | null>(null);
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: any) => callApi("POST", CONFIRM_EMAIL, data),

    onSuccess: (response) => {
      if (response?.isSuccess) {
        setMessage({ status: "success", msg: response?.message });
      } else {
        setMessage({ status: "error", msg: response?.message });
      }
    },
    onError: (error: any) => {
      console.error("Error posting data:", error);
    },
  });
  return (
    <>
      <SectionTitle title="ورود یا ثبت نام" />
      <Paragraph size={Sizes.sm} type={ColorType.BLACK}>
        درود درود درود 👋
      </Paragraph>
      <form
        className="space-y-3"
        onSubmit={handleSubmit((data) => {
          setMessage(null);
          mutate(data);
        })}
      >
        <Label>لطفا ایمیل خود را وارد کنید</Label>
        <Input
          type="email"
          className="!border border-secondary-500"
          onInput={justEnterNumber}
          errorText={errors.email?.message}
          {...register("email", { required: "ایمیل را وارد کنید" })}
        />
        {message?.status === "error" && (
          <Paragraph type={ColorType.ERROR}>{message.msg}</Paragraph>
        )}
        {message?.status === "success" && (
          <Paragraph type={ColorType.SUCCESS}>{message.msg}</Paragraph>
        )}
        <MainButton isLoading={isPending} defaultIcon full>
          برو بریم
        </MainButton>
        <LoginGoogleButton />
      </form>
      <span
        onClick={() => {
          setOtp("register");
        }}
        className="text-center block !mt-2 mx-auto w-full text-[var(--primary)] cursor-pointer underline"
      >
        حساب کاربری نداری؟ ساخت حساب کاربری
      </span>
    </>
  );
};

export default Login;
