"use client";
import {
  ChatBubbleLeftRightIcon,
  ListBulletIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import React from "react";

import Intro from "./Intro";
import Headlines from "./Headlines";
import Comments from "../commnets/Comments";
import Tabs from "@/app/_components/tabs/Tabs";
import { TabType } from "@/app/_components/tabs/types";

export const defaultTabs: TabType[] = [
  { id: 1, label: "معرفی", icon: PencilIcon },
  { id: 2, label: "سرفصلها", icon: ListBulletIcon },
  { id: 3, label: "دیدگاه و پرسش", icon: ChatBubbleLeftRightIcon },
];

const CourseTabs = () => {
  const content = [
    <Intro key="intro" />,
    <Headlines key="headlines" />,
    <Comments key="comments" />,
  ];
  return <Tabs tabs={defaultTabs} content={content} offset={160} />;
};

export default CourseTabs;
