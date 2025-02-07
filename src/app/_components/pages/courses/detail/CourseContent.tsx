import { Sizes } from '@/utils/enums';
import Image from 'next/image';
import React from 'react';
import Title from '../../../typography/Title';
import Paragraph from '../../../typography/Paragraph';
import InfoItemsList from './InfoItemsList';
import CourseTabs from './tab/CourseTabs';
import GradientBox from '@/app/_components/GradientBox';
import Status from '@/app/_components/courseBox/Status';

const CourseContent = () => {
  return (
    <div className="space-y-8">
      <div>
        <Image
          className="rounded-3xl w-full"
          width={600}
          height={400}
          loading="eager"
          alt="poster"
          src={'/images/react.jpg'}
        />

        <GradientBox type="top">
          <Status text="تکمیل شده" />

          <Title size={Sizes.xl}>دوره پروژه محور React و Next</Title>
          <Paragraph>
            ساخت وبسایت فروشگاهی با React عنوان دوره پروژه محور react در میزکد
            است که قصد داریم در قالب این دوره react را در قالب پروژه به شما
            آموزش دهیم.
          </Paragraph>
        </GradientBox>
      </div>
      <InfoItemsList />
      <CourseTabs />
    </div>
  );
};

export default CourseContent;
