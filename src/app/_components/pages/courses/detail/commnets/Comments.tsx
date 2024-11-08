import SectionTitle from "@/app/_components/typography/SectionTitle";
import React from "react";
import AddComments from "./AddComments";
import CommentsBox from "./CommentsBox";

const commnetList = [
  {
    name: "امید تاجیک",
    text: "من این دوره رو خریدم و میخوام نکست هم بعدا یاد بگیرم چون نیاز بیشتری دارم به اموزش های این دوره میشه بدون اینکه دوره نکست رو ببینم این دوره رو ببینم(بخش6دوره بیشتر مد نظرمه)",
    messages: [
      {
        name: "مجید",
        text: "عالی",
      },
      {
        name: "فاطمه",
        text: "yeeeees",
      },
      {
        name: "فاطمه",
        text: "yeeeees",
      },
    ],
  },
];
const Comments = () => {
  return (
    <>
      <SectionTitle title="دیدگاه و پرسش" />
      <AddComments />
      {commnetList.map((item, i) => (
        <div key={i}>
          <CommentsBox data={item} />
          <div className="relative before:content-[''] before:absolute before:-top-5 before:right-8 before:w-px before:h-[calc(100%-24px)] before:bg-secondary-500 after:content-[''] after:absolute after:bottom-11 after:right-8 after:w-8 after:h-px after:bg-secondary-500 space-y-3 pr-16">
            {item.messages.map((msg, index) => (
              <CommentsBox data={msg} key={index} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Comments;
