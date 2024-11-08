"use client";
import { ChevronDownIcon, ClockIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Paragraph from "../typography/Paragraph";
import { convertIndexToPersianWord } from "@/_utiles/helper";
import { ColorType, Sizes } from "@/_utiles/enums";
import FlexItemCenter from "../flex/FlexItemCenter";
import FlexBetween from "../flex/FlexBetween";
import MainButton from "../buttons/MainButton";
import FlexCenter from "../flex/FlexCenter";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AccordionType } from "./types";

type Props = {
  lists: AccordionType[];
  episode?: boolean;
};

const HeadlinesAccordions: React.FC<Props> = ({ lists, episode }) => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [selected, setSelected] = useState<number>(0);
  const router = useRouter();

  // Toggle accordion visibility
  const handleAccordionToggle = (id: number) => {
    setActiveAccordion((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="space-y-2">
      {lists.map(({ title, headLines, id }, index) => {
        const isActive = activeAccordion === id;

        return (
          <div key={id}>
            {/* Accordion Header */}
            <div
              className="w-full cursor-pointer rounded-2xl bg-secondary-200"
              onClick={() => handleAccordionToggle(id)}
              aria-expanded={isActive}
              aria-controls={`collapse-${id}`}
              id={`heading-${id}`}
            >
              <div
                className={`group flex justify-between items-center w-full px-5 py-4 text-sm text-secondary-700 transition-colors ${
                  isActive ? "!text-foreground" : ""
                }`}
              >
                <FlexItemCenter
                  className={`${
                    isActive ? "text-black font-medium" : "text-secondary-700"
                  }`}
                >
                  <Paragraph
                    type={ColorType.BLACK}
                    size={Sizes.xs}
                    className="flex items-center"
                  >
                    فصل
                    <span className="ml-4">
                      {convertIndexToPersianWord(index + 1)}
                    </span>
                  </Paragraph>
                  {title}
                </FlexItemCenter>
                <ChevronDownIcon
                  className={`h-5 w-5 transition-transform duration-200 ease-in-out ${
                    isActive ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>

            {/* Accordion Content */}
            <div
              id={`collapse-${id}`}
              className={`transition-all duration-300 ease-in-out transform mx-auto overflow-hidden ${
                isActive
                  ? "w-[94%] max-h-screen opacity-100 scale-100"
                  : "max-h-0 opacity-0 scale-95 !m-0"
              } ${
                episode
                  ? "border border-secondary-500 rounded-2xl mt-2 overflow-auto"
                  : ""
              } ${isActive && episode ? "max-h-80 !w-full overflow-auto" : ""}`}
              aria-labelledby={`heading-${id}`}
            >
              {isActive &&
                headLines.map(({ id: childId, name, time }, idx) => (
                  <FlexBetween
                    key={childId}
                    className={`px-4 py-3 cursor-pointer ${
                      episode
                        ? selected === childId
                          ? "bg-primary [&>div>span]:!text-white [&>div>a]:!text-white [&>div>div]:!text-white"
                          : ""
                        : "border border-secondary-500 lg:flex-nowrap flex-wrap py-2 my-2 rounded-xl text-sm"
                    }`}
                    onClick={() => setSelected(childId)}
                  >
                    <FlexItemCenter gap="gap-6">
                      <span className="text-secondary-700">{idx + 1}</span>
                      <Link
                        href="/episode"
                        className={`hover:underline text-sm text-foreground truncate  ${
                          episode ? "max-w-[200px]" : "text-wrap"
                        }`}
                      >
                        {name}
                      </Link>
                    </FlexItemCenter>

                    <FlexItemCenter className="!text-xs !mr-auto">
                      <FlexCenter gap="gap-1 text-secondary-700">
                        {time}
                        <ClockIcon className="size-4" />
                      </FlexCenter>
                      {!episode && (
                        <MainButton
                          className="!text-xs font-normal text-secondary-700"
                          themeType={ColorType.SECONDARY}
                          defaultIcon
                          onClick={() => router.push("/episode")}
                        >
                          مشاهده
                        </MainButton>
                      )}
                    </FlexItemCenter>
                  </FlexBetween>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HeadlinesAccordions;
