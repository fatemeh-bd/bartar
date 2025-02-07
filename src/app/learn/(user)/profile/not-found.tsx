import Image from "next/image";
import React from "react";
import { ColorType, Sizes } from "@/utils/enums";
import Paragraph from "@/app/_components/typography/Paragraph";

const notFound = () => {
  return (
    <div className="space-y-4 my-12">
      <Image
        alt="vector"
        src={"/images/notFound.png"}
        width={400}
        height={400}
        className="mx-auto w-80 h-auto"
      />
      <div className="space-y-2">
        <Paragraph type={ColorType.BLACK} className="text-center font-bold">
          چنین صفحه ای پیدا نشد
        </Paragraph>
        <Paragraph className="text-center" size={Sizes.sm}>
          با عرض پوزش از شما , چنین صفحه ای در سایت وجود ندارد یا این صفحه از
          سایت پاک شده است
        </Paragraph>
      </div>
    </div>
  );
};

export default notFound;
