import { Sizes } from '@/utils/enums';
import FlexBetween from '@/app/_components/flex/FlexBetween';
import FlexCenter from '@/app/_components/flex/FlexCenter';
import Paragraph from '@/app/_components/typography/Paragraph';
import Title from '@/app/_components/typography/Title';
import { FaceSmileIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';

const AboutUsPage = () => {
  return (
    <div>
      <FlexCenter className=" flex-col">
        <FaceSmileIcon className="size-12 text-yellow-400" />

        <div className="bg-gradient-to-r  space-y-1 from-yellow-300 w-fit to-transparent py-4 px-10 mx-auto">
          <Title size={Sizes.xl}>داستان شکل گیری میزکد</Title>
        </div>
        <div className={'max-w-[550px]'}>
          <div className="py-3 w-[200px] mx-auto flex items-center text-xs before:flex-1 before:border-t before:border-secondary-500 before:me-6 after:flex-1 after:border-t after:border-secondary-500 after:ms-6 ">
            <span className={'size-2 bg-secondary-500 rounded-full'}></span>
          </div>
          <Paragraph className=" text-center my-4">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با
          </Paragraph>
        </div>
        <Paragraph>از فعالیت های میزکد برایتان بگوییم</Paragraph>
        <Title className="!font-extrabold text-2xl">
          بخشی از فعالیت های تیم مله
        </Title>
        <div className="py-3 w-[200px] mx-auto flex items-center text-xs before:flex-1 before:border-t before:border-secondary-500 before:me-6 after:flex-1 after:border-t after:border-secondary-500 after:ms-6 ">
          <span className={'size-2 bg-secondary-500 rounded-full'}></span>
        </div>
      </FlexCenter>

      <div className="mt-12">
        <FlexBetween gap="gap-8" className="flex md:flex-row flex-col">
          <div className="w-[75%]">
            <Title className="w-fit border-b-4 pb-2 border-blue-500">
              استعداد سنجی و ارزیابی
            </Title>
            <Paragraph justify className="mt-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </Paragraph>
          </div>
          <Image
            src={'/images/avatar.jpeg'}
            alt="image"
            width={300}
            height={300}
            className="w-[25%] rounded-3xl"
          />
        </FlexBetween>
      </div>
      <div className="mt-12">
        <FlexBetween gap="gap-8" className="flex md:flex-row flex-col">
          <div className="w-[75%]">
            <Title className="w-fit border-b-4 pb-2 border-blue-500">
              جامعه فعال برنامه نویسی
            </Title>
            <Paragraph justify className="mt-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </Paragraph>
          </div>
          <Image
            src={'/images/avatar.jpeg'}
            alt="image"
            width={300}
            height={300}
            className="w-[25%] rounded-3xl"
          />
        </FlexBetween>
      </div>
    </div>
  );
};

export default AboutUsPage;
