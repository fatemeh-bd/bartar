import { ColorType, Sizes } from "@/_utiles/enums";
import Paragraph from "@/app/_components/typography/Paragraph";
import React from "react";

const Status = ({ text }: { text: string }) => {
  return (
    <Paragraph
      type={ColorType.SUCCESS}
      className="list-disc list-item mr-3 text-xs"
      size={Sizes.sm}
    >
      {text}
    </Paragraph>
  );
};

export default Status;
