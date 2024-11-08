import { ColorType, Sizes } from "@/_utiles/enums";
import Teacher from "@/app/_components/courseBox/Teacher";
import GradientBox from "@/app/_components/GradientBox";
import Paragraph from "@/app/_components/typography/Paragraph";
import SectionTitle from "@/app/_components/typography/SectionTitle";
import Title from "@/app/_components/typography/Title";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogDetailPage = () => {
  return (
    <div className="grid grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-9 md:col-span-8 col-span-12">
        <Image
          className="rounded-3xl w-full"
          width={600}
          height={400}
          loading="eager"
          alt="poster"
          src={"/images/react.jpg"}
        />
        <GradientBox type="top" className="space-y-3">
          <Title size={Sizes.xl}>دوره پروژه محور React و Next</Title>
          <Paragraph justify>
            ساخت وبسایت فروشگاهی با React عنوان دوره پروژه محور react در نابغه
            است که قصد داریم در قالب این دوره react را در قالب پروژه به شما
            آموزش دهیم.
          </Paragraph>
        </GradientBox>
        <div className="space-y-6 mt-6">
          <Paragraph justify>
            زمانی که شما با موضوعات مختلف یک ابزار آشنایی پیدا کردید، یک نکته
            مهم که باید در نظر داشته باشید این است که چگونه با کنار هم قرار دادن
            ویژگی‌های مختلف خواهید توانست یک پروژه واقعی را ایجاد کنید. این
            موضوع دقیقا هدفی است که یک آموزش پروژه محور دنبال می‌کند. در یک
            آموزش پروژه محور در ابتدا شما به صورت مستقیم یا غیر مستقیم با مفاهیم
            اولیه آشنا شده و سپس فرایند یادگیری موضوعات جدید را در خلال ایجاد
            پروژه شروع خواهید کرد.
          </Paragraph>
          <Paragraph justify>
            منظور از غیر مستقیم بودن یادگیری مفاهیم اولیه این است که در برخی از
            وبسایت‌های آموزشی از جمله وبسایت آموزشی نابغه ما دوره‌های مقدماتی را
            پیشتر ضبط کرده و از شما انتظار داریم که ابتدا آن‌ها را به خوبی نگاه
            کرده و یاد گرفته باشید. به همین دلیل است که ما در پایان نوشته‌های
            مربوط به هر دوره یک قسمت اختصاصی به نام «پیش‌نیازها» را ایجاد کرده و
            در آنجا خواهیم گفت که برای یادگیری این دوره آموزشی نیاز خواهید داشت
            چه پیش‌نیازهایی را در ابتدا طی کنید.
          </Paragraph>
          <Title>ساختار دوره آموزشی پروژه محور React</Title>
          <Paragraph justify>
            در ساختار این دوره مانند دوره‌های آموزشی دیگر، ما از یک سرفصل‌بندی
            جامع و دقیق استفاده خواهیم کرد. در ادامه ما سعی می‌کنیم این ساختار
            را به صورت تمام و کمال به شما معرفی کنیم. هدف از انجام این کار نیز
            آشنایی هر چه بیشتر شما با این دوره آموزشی است. در اولین دوره این
            دوره نیز از ساختار دوره صحبت‌های بسیاری شده و می‌توانید از آن نیز
            استفاده کنید.
          </Paragraph>
        </div>
      </div>

      <div className="lg:col-span-3 md:col-span-4 col-span-12 md:sticky top-24">
        <SectionTitle title="نویسنده:" />
        <Teacher
          avatar="/images/avatar.jpeg"
          name={
            <Paragraph
              size={Sizes.sm}
              type={ColorType.BLACK}
              className="font-medium"
            >
              جلال بهرامی راد
            </Paragraph>
          }
          desc={
            <Link href={"/"} className="text-primary text-xs font-medium">
              دیدن رزومه
            </Link>
          }
        />
        <Paragraph size={Sizes.sm} className="bg-secondary-200 p-4 rounded-2xl rounded-tr-none mt-4">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
        </Paragraph>
      </div>
    </div>
  );
};

export default BlogDetailPage;
