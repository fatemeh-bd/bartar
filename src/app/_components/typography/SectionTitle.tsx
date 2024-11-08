import React from "react";
import FlexItemCenter from "../flex/FlexItemCenter";
import { Sizes } from "@/_utiles/enums";

const SectionTitle = ({ title, size }: { title: string; size?: Sizes.sm }) => {
  return (
    <FlexItemCenter gap="gap-3" className="mb-4">
      <FlexItemCenter>
        <div className="size-1 bg-black rounded-full"></div>
        <div className="size-2 bg-black rounded-full"></div>
      </FlexItemCenter>
      <div
        className={`font-black text-black ${
          size === Sizes.sm ? "text-sm" : "text-base"
        }`}
      >
        {title}
      </div>
    </FlexItemCenter>
  );
};

export default SectionTitle;
