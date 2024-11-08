"use client";
import React from "react";
import dynamic from "next/dynamic";
import Tabs from "../../tabs/Tabs";
import HeadlinesAccordions from "../../accordion/HeadlinesAccordions";
import { TabType } from "../../tabs/types";
import EpisodeContent from "./EpisodeContent";
import Comments from "../courses/detail/commnets/Comments";
import {
  ChatBubbleLeftRightIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import "plyr-react/plyr.css";

const Plyr = dynamic(() => import("plyr-react"), { ssr: false });

const tabs: TabType[] = [
  { id: 1, label: "توضیحات", icon: PencilIcon },
  { id: 3, label: "دیدگاه و پرسش", icon: ChatBubbleLeftRightIcon },
];

const contents = [<EpisodeContent />, <Comments />];

const Episode = () => {
  return (
    <div className="grid grid-cols-12 items-start gap-6">
      <div className="lg:col-span-8 col-span-12 space-y-6">
        <div className="rounded-3xl shadow-lg overflow-hidden">
          <Plyr
            source={{
              type: "video",
              sources: [
                {
                  src: "https://aspb2.asset.aparat.com/aparat-video/db3a03e71aaa04dbd04dc056443359933973809-544p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjM3YzIxZDY2OWFlZWJkZTk5ODIxODEwZDM5ZGU1ZTdhIiwiZXhwIjoxNzMxMDY0ODA1LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.G7p7m14qbEziBkra3NwTzppNeyDUkanYLAcf7E7-TMQ",
                },
              ],
            }}
            options={{
              controls: ["play", "progress", "volume", "fullscreen"],
              autoplay: false,
            }}
          />
        </div>
        <Tabs tabs={tabs} content={contents} />
      </div>
      <div className="lg:col-span-4 col-span-12 sticky top-24">
        <HeadlinesAccordions
          episode
          lists={[
            {
              id: 1,
              title: "معرفی",
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
              title: "پیاده سازی ساختار پروژه",
              headLines: [
                {
                  id: 1,
                  name: "چه زمانی از Next و چه زمانی از React استفاده کنیم؟",
                  time: "۰۳:۵۸",
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Episode;
