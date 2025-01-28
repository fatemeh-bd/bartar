// "use client";
// import React, { Dispatch, SetStateAction, useState } from "react";
// import GradientBox from "../../GradientBox";
// import FlexBetween from "../../flex/FlexBetween";
// import TitleBox from "../landing/TitleBox";
// import CourseData from "../../courseBox/CourseData";
// import Image from "next/image";
// import LineSplitter from "../../LineSplitter";
// import { TrashIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import Modal from "../../Modal/Modal";
// import Paragraph from "../../typography/Paragraph";
// import { ColorType } from "@/_utiles/enums";
// import MainButton from "../../buttons/MainButton";

// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { CourseType } from "../landing/types";

// const CartContent = ({
//   cartData,
//   setCartData,
// }: {
//   cartData: CourseType[];
//   setCartData: Dispatch<SetStateAction<CourseType[]>>;
// }) => {
//   const [openSureModal, setOpenSureModal] = useState(false);
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const pathname = usePathname();

//   const handleRemoveCourse = () => {
//     const id = searchParams.get("id");
//     if (id) {
//       setCartData(cartData.filter((item) => item.id !== Number(id)));
//       setOpenSureModal(false);
//       router.push(pathname);
//     }
//   };
//   return (
//     <div>
//       <GradientBox className="!p-5">
//         <FlexBetween>
//           <TitleBox
//             title=" سبد خرید شما"
//             description="۲ دوره به سبد اضافه کرده اید"
//           />
//         </FlexBetween>
//       </GradientBox>
//       <div className="py-8">
//         {cartData?.map((item, index) => (
//           <React.Fragment key={index}>
//             <div className="grid grid-cols-12 gap-6">
//               <div className="relative h-fit sm:col-span-4 col-span-12">
//                 <Image
//                   className="rounded-3xl w-full h-full"
//                   alt="course image"
//                   src={item.img}
//                   width={250}
//                   height={190}
//                 />

//                 <XMarkIcon
//                   onClick={() => {
//                     setOpenSureModal(true);

//                     router.push(`?id=${item.id}`);
//                   }}
//                   className="size-9 text-white absolute inset-x-0 -bottom-4 p-2 mx-auto flex items-center justify-center bg-rose-600 rounded-full shadow-2xl cursor-pointer pointer-events-auto"
//                 />
//               </div>
//               <GradientBox
//                 type="bottom"
//                 className="!p-0 w-full sm:col-span-8 col-span-12"
//               >
//                 <CourseData theme={"white"} data={item} />
//               </GradientBox>
//             </div>
//             {index !== cartData.length - 1 && <LineSplitter className="my-8" />}
//           </React.Fragment>
//         ))}
//       </div>
//       <Modal isOpen={openSureModal} onClose={() => setOpenSureModal(false)}>
//         <TrashIcon className="size-12 bg-rose-600 rounded-full mt-6 p-3 text-[#fff] mx-auto" />
//         <Paragraph type={ColorType.BLACK} className="text-center my-4">
//           آیا از حذف دوره از سبد اطمینان دارید؟
//         </Paragraph>
//         <LineSplitter className="my-4" />
//         <FlexBetween
//           gap="gap-4"
//           className="w-full [&>button]:w-full [&>button]:rounded-xl"
//         >
//           <MainButton
//             themeType={ColorType.BLACK}
//             outline
//             onClick={() => setOpenSureModal(false)}
//           >
//             لغو
//           </MainButton>

//           <MainButton themeType={ColorType.ERROR} onClick={handleRemoveCourse}>
//             آره،حذف کن
//           </MainButton>
//         </FlexBetween>
//       </Modal>
//     </div>
//   );
// };

// export default CartContent;
'use client';

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import GradientBox from '../../GradientBox';
import FlexBetween from '../../flex/FlexBetween';
import TitleBox from '../landing/TitleBox';
import CourseData from '../../courseBox/CourseData';
import Image from 'next/image';
import LineSplitter from '../../LineSplitter';
import { TrashIcon } from '@heroicons/react/24/outline';
import Modal from '../../Modal/Modal';
import Paragraph from '../../typography/Paragraph';
import { ColorType } from '@/_utiles/enums';
import MainButton from '../../buttons/MainButton';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { CourseType } from '../landing/types';

const CartContent = ({
  cartData,
  setCartData,
}: {
  cartData: CourseType[];
  setCartData: Dispatch<SetStateAction<CourseType[]>>;
}) => {
  const [openSureModal, setOpenSureModal] = useState(false);

  const router = useRouter();
  const searchParams = typeof window !== 'undefined' ? useSearchParams() : null;
  const pathname = typeof window !== 'undefined' ? usePathname() : '';

  const handleRemoveCourse = () => {
    const id = searchParams?.get('id');
    if (id) {
      setCartData(cartData.filter((item) => item.id !== Number(id)));
      setOpenSureModal(false);
      if (pathname) router.push(pathname);
    }
  };

  return (
    <div>
      <GradientBox className="!p-5">
        <FlexBetween>
          <TitleBox
            title=" سبد خرید شما"
            description="۲ دوره به سبد اضافه کرده اید"
          />
        </FlexBetween>
      </GradientBox>
      <div className="py-8">
        {cartData?.map((item, index) => (
          <React.Fragment key={index}>
            <div className="grid grid-cols-12 gap-6">
              <div className="relative h-fit sm:col-span-4 col-span-12">
                <Image
                  className="rounded-3xl w-full h-full"
                  alt="course image"
                  src={item.img}
                  width={250}
                  height={190}
                />

                <TrashIcon
                  onClick={() => {
                    setOpenSureModal(true);
                    router.push(`?id=${item.id}`);
                  }}
                  className="size-9 text-white absolute inset-x-0 -bottom-4 p-2 mx-auto flex items-center justify-center bg-rose-600 rounded-full shadow-2xl cursor-pointer pointer-events-auto"
                />
              </div>
              <GradientBox
                type="bottom"
                className="!p-0 w-full sm:col-span-8 col-span-12">
                <CourseData theme={'white'} data={item} />
              </GradientBox>
            </div>
            {index !== cartData.length - 1 && <LineSplitter className="my-8" />}
          </React.Fragment>
        ))}
      </div>
      <Modal isOpen={openSureModal} onClose={() => setOpenSureModal(false)}>
        <TrashIcon className="size-12 bg-rose-600 rounded-full mt-6 p-3 text-[#fff] mx-auto" />
        <Paragraph type={ColorType.BLACK} className="text-center my-4">
          آیا از حذف دوره از سبد اطمینان دارید؟
        </Paragraph>
        <LineSplitter className="my-4" />
        <FlexBetween
          gap="gap-4"
          className="w-full [&>button]:w-full [&>button]:rounded-xl">
          <MainButton
            themeType={ColorType.BLACK}
            outline
            onClick={() => setOpenSureModal(false)}>
            لغو
          </MainButton>
          <MainButton themeType={ColorType.ERROR} onClick={handleRemoveCourse}>
            آره،حذف کن
          </MainButton>
        </FlexBetween>
      </Modal>
    </div>
  );
};

export default CartContent;
