import Image from "next/image";
import React from "react";
import { ColorType, Sizes } from "@/utils/enums";
import Paragraph from "./_components/typography/Paragraph";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";

const notFound = () => {
  return (
    <>
      <Header />
      <div className="space-y-4 my-12">
        <Image
          alt="vector"
          src={"/images/notFound.png"}
          width={400}
          height={400}
          className="mx-auto w-80 h-auto"
        />
        <div className="space-y-2">
          <Paragraph
            type={ColorType.BLACK}
            className="text-center font-bold"
          >
            چنین صفحه ای پیدا نشد
          </Paragraph>
          <Paragraph className="text-center" size={Sizes.sm}>
            با عرض پوزش از شما , چنین صفحه ای در سایت وجود ندارد یا این صفحه از
            سایت پاک شده است
          </Paragraph>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default notFound;
