import React, { ReactNode, useState } from "react";
import FlexItemCenter from "../flex/FlexItemCenter";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Paragraph from "../typography/Paragraph";
import { ColorType, Sizes } from "@/utils/enums";

const Accordion = ({
  title,
  component,
  defaultOpen
}: {
  title: string | ReactNode;
  component: ReactNode;
  defaultOpen?:boolean
}) => {
  const [isActive, setIsActive] = useState<boolean>(defaultOpen?defaultOpen:false);
  return (
    <div>
      <div className={`w-full cursor-pointer rounded-xl bg-secondary-200 p-3`}>
        <div
          className={`group relative flex justify-between items-center w-full  text-sm text-secondary-700 ${
            isActive ? "!text-foreground" : ""
          } hover:[&>div>p]:!text-primary hover:!text-primary`}
          onClick={() => setIsActive(!isActive)}
          aria-expanded={isActive}
        >
          <FlexItemCenter
            className={`${
              isActive ? "text-black font-medium" : "text-secondary-700"
            }`}
          >
            <Paragraph
              size={Sizes.sm}
              className="flex items-center gap-2"
              type={ColorType.BLACK}
            >
              {title}
            </Paragraph>
          </FlexItemCenter>
          <ChevronDownIcon
            className={`size-6 transition-transform duration-200 ease-in-out ${
              isActive ? "rotate-[-180deg]" : "rotate-0"
            }`}
          />
        </div>
      </div>
      <div
        className={`${
          isActive ? "py-2 px-3" : ""
        } w-full mx-auto transform transition-all duration-300 ease-in-out bg-secondary-200 rounded-xl my-2 ${
          isActive
            ? "max-h-screen opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-95 overflow-hidden"
        }`}
      >
        {component}
      </div>
    </div>
  );
};

export default Accordion;
