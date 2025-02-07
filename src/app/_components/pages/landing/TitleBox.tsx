import React, { ReactNode } from "react";
import FlexItemCenter from "../../flex/FlexItemCenter";
import { AcademyIcon } from "./LastCourses/LastCourses";
import Title from "../../typography/Title";
import Paragraph from "../../typography/Paragraph";
import { ColorType, Sizes } from "@/utils/enums";

const TitleBox = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string | ReactNode;
  className?: string;
}) => {
  return (
    <FlexItemCenter gap="gap-4" className={className || ""}>
      <AcademyIcon />
      <div className="space-y-2 w-[90%]">
        <Title size={Sizes.lg} color={ColorType.PRIMARY}>
          {title}
        </Title>

        {typeof description === "string" ? (
          <Paragraph>{description}</Paragraph>
        ) : (
          description
        )}
      </div>
    </FlexItemCenter>
  );
};

export default TitleBox;
