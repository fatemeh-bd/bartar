"use client";

import { ColorType } from "@/utils/enums";
import CartContent from "@/app/_components/pages/cart/CartContent";
import PaymentInfo from "@/app/_components/pages/cart/PaymentInfo";
import LastCourses, {
  sampleData,
} from "@/app/_components/pages/landing/LastCourses/LastCourses";
import { CourseType } from "@/app/_components/pages/landing/types";
import Paragraph from "@/app/_components/typography/Paragraph";
import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";

const CartPage = () => {
  const [cartData, setCartData] = useState<CourseType[]>([]);

  useEffect(() => {
    if (sampleData) {
      setCartData(sampleData?.slice(0, 2));
    }
  }, [sampleData]);

  return (
    <>
      {cartData?.length > 0 ? (
        <div className="grid grid-cols-12 items-start gap-6">
          <div className="md:col-span-8 col-span-12">
            <Suspense>
              <CartContent cartData={cartData} setCartData={setCartData} />
            </Suspense>
          </div>
          <div className="md:col-span-4 col-span-12 sticky top-24">
            <PaymentInfo />
          </div>
        </div>
      ) : (
        <div className="space-y-4 my-12">
          <Image
            alt="vector"
            src="/images/notFound.png"
            width={400}
            height={400}
            className="mx-auto w-80 h-auto"
          />
          <Paragraph type={ColorType.BLACK} className="text-center font-bold">
            سبد خرید شما خالی است :(
          </Paragraph>
        </div>
      )}
      <LastCourses />
    </>
  );
};

export default CartPage;
