import { ColorType, Sizes, SvgType } from "@/utils/enums";
import FlexItemCenter from "@/app/_components/flex/FlexItemCenter";
import Paragraph from "@/app/_components/typography/Paragraph";
import React from "react";
export interface DashboardInfoItem {
  title: string;
  desc: string;
  icon: SvgType;
  color: string;
}

const DashboardInfoBox = ({ data }: { data: DashboardInfoItem }) => {
  return (
    <FlexItemCenter gap="gap-3" className="bg-secondary-200 w-full rounded-2xl p-3">
      <data.icon
        className={`size-12 bg-background rounded-full p-3 ${data.color}`}
      />
      <div>
        <Paragraph size={Sizes.xs}>{data.title}</Paragraph>
        <Paragraph size={Sizes.sm} type={ColorType.BLACK} className="font-bold">
          {data.desc}
        </Paragraph>
      </div>
    </FlexItemCenter>
  );
};

export default DashboardInfoBox;
