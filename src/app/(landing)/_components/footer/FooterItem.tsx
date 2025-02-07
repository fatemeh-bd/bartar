import React from 'react';
import { ColorType } from '@/utils/enums';
import FlexCenter from '@/app/_components/flex/FlexCenter';
import Paragraph from '@/app/_components/typography/Paragraph';

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
