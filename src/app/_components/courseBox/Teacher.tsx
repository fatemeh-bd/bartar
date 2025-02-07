import React from "react";
import Image from "next/image";
import { ColorType, Sizes } from "@/utils/enums";
import FlexItemCenter from "../flex/FlexItemCenter";
import Paragraph from "../typography/Paragraph";

const Teacher = ({
  name,
  desc,
  avatar,
}: {
  name: string | React.ReactNode;
  desc: string | React.ReactNode;
  avatar: string;
}) => {
  return (
    <FlexItemCenter>
      <Image
        className="size-10 rounded-full"
        src={avatar}
        alt="Rounded avatar"
        width={40}
        height={40}
      />
      <div className="space-y-1 text-right">
        {typeof name === "string" ? (
          <Paragraph size={Sizes.xs}>{name}</Paragraph>
        ) : (
          name
        )}
        {typeof desc === "string" ? (
          <Paragraph
            size={Sizes.xs}
            className="font-bold"
            type={ColorType.BLACK}
          >
            {desc}
          </Paragraph>
        ) : (
          desc
        )}
      </div>
    </FlexItemCenter>
  );
};

export default Teacher;
