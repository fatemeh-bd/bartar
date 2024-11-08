import HeadlinesAccordions from "@/app/_components/accordion/HeadlinesAccordions";
import SectionTitle from "@/app/_components/typography/SectionTitle";
import React from "react";

const Headlines = () => {
  return (
    <>
      <SectionTitle title="سرفصل ها" />

      <HeadlinesAccordions
        lists={[
          {
            id: 1,
            title: " معرفی",
            headLines: [
              {
                id: 1,
                name: "معرفی دوره",
                time: "۰۳:۵۸",
              },
              {
                id: 2,
                name: "پیش نیاز مشاهده این دوره",
                time: "۰۳:۵۸",
              },
            ],
          },
          {
            id: 2,
            title: " پیاده سازی ساختار پروژه",
            headLines: [
              {
                id: 1,
                name: "چه زمانی از next و چه زمانی از react استفاده کنیم؟",
                time: "۰۳:۵۸",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default Headlines;
