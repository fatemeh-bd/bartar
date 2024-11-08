import React from "react";
import FlexCenter from "../flex/FlexCenter";
import Paragraph from "../typography/Paragraph";
import { ColorType } from "@/_utiles/enums";

const FooterItem = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => {
  return (
    <FlexCenter gap="gap-6">
      {icon}
      <div className="font-black">
        <Paragraph type={ColorType.PRIMARY}>{title}</Paragraph>
        <Paragraph type={ColorType.BLACK}>{desc}</Paragraph>
      </div>
    </FlexCenter>
  );
};

export default FooterItem;
