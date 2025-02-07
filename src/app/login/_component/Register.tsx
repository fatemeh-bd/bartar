"use client";
import { ColorType, Sizes } from "@/utils/enums";
import MainButton from "@/app/_components/buttons/MainButton";
import Input from "@/app/_components/inputs/Input";
import SectionTitle from "@/app/_components/typography/SectionTitle";
import Paragraph from "@/app/_components/typography/Paragraph";
import { Dispatch, SetStateAction, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { callApi } from "@/api/callApi";
import { REGISTER_USER } from "@/api/endpoints/auth_endpoints";
import { useForm } from "react-hook-form";
import LoginGoogleButton from "@/app/_components/buttons/LoginGoogleButton";
import { useRouter } from "next/navigation";

export default function ({
  setOtp,
}: {
  setOtp: Dispatch<SetStateAction<string>>;
}) {
  const [error, setError] = useState<string>("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ email: string; password: string }>();
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: any) => callApi("POST", REGISTER_USER, data),

    onSuccess: (response) => {
      if (response?.isSuccess) {
        setError("");
        setOtp("");
      } else {
        setError(response?.message);
      }
    },
    onError: (error: any) => {
      console.error("Error posting data:", error);
    },
  });

  return (
    <>
      <SectionTitle title="ثبت نام" />
      <Paragraph size={Sizes.sm} type={ColorType.BLACK}>
        تنها یک قدم با دنیای برنامه نویسی فاصله داری!{" "}
      </Paragraph>
      <form
        className="space-y-2"
        onSubmit={handleSubmit((data) => {
          setError("");
          mutate(data);
        })}
      >
        <Input
          label="ایمیل"
          type="email"
          className="!border border-secondary-500"
          {...register("email", { required: "ایمیل را وارد کنید" })}
          errorText={errors.email?.message}
        />

        <Input
          label="رمز عبور"
          type="password"
          className="!border border-secondary-500"
          {...register("password", { required: "گذرواژه را وارد کنید" })}
          errorText={errors.password?.message}
        />
        {error && <Paragraph type={ColorType.ERROR}>{error}</Paragraph>}
        <MainButton
          isLoading={isPending}
          className="!mt-4"
          defaultIcon
          full
          type="submit"
        >
          ثبت نام
        </MainButton>
        <LoginGoogleButton />
      </form>
      <span
        onClick={() => {
          setOtp("");
        }}
        className="text-center block !mt-2 mx-auto w-full text-[var(--primary)] cursor-pointer underline"
      >
        حساب کاربری داری؟ ورود
      </span>
    </>
  );
}
