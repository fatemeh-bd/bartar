import React from "react";
import GradientBox from "../../GradientBox";
import SectionTitle from "../../typography/SectionTitle";
import FlexBetween from "../../flex/FlexBetween";
import Paragraph from "../../typography/Paragraph";
import Toman from "../../Toman";
import { Sizes } from "@/utils/enums";
import LineSplitter from "../../LineSplitter";
import MainButton from "../../buttons/MainButton";
import Input from "../../inputs/Input";
import FlexItemCenter from "../../flex/FlexItemCenter";
import { ArrowPathIcon, PercentBadgeIcon } from "@heroicons/react/20/solid";

const PaymentInfo = () => {
  return (
    <div>
      <GradientBox type="bottom" className="space-y-4 pt-0">
        <div className="bg-background rounded-b-2xl  px-3 pb-1 pt-4">
          <SectionTitle title="اطلاعات پرداخت" />
        </div>
        <div className="space-y-2">
          <FlexItemCenter>
            <Input
              icon={<PercentBadgeIcon className="size-6" />}
              placeholder="کد تخفیف"
              className="bg-white flex-row-reverse"
            />
            <MainButton className="rounded-xl">
              <ArrowPathIcon className="size-5" />
            </MainButton>
          </FlexItemCenter>
          <FlexBetween>
            <Paragraph size={Sizes.sm}>جمع کل</Paragraph>
            <Paragraph>
              <span className="text-black font-bold text-lg mx-1">
                ۱,۰۷۹,۰۰۰
              </span>
              <Toman />
            </Paragraph>
          </FlexBetween>
          <FlexBetween>
            <Paragraph size={Sizes.sm}>موجودی کیف پول</Paragraph>
            <Paragraph>
              <span className="text-black font-bold text-lg mx-1">
                ۱,۰۷۹,۰۰۰
              </span>
              <Toman />
            </Paragraph>
          </FlexBetween>
          <FlexBetween>
            <Paragraph size={Sizes.sm}>تخفیف</Paragraph>
            <Paragraph>
              <span className="text-black font-bold text-lg mx-1">۱۸۵,۰۰۰</span>
              <Toman />
            </Paragraph>
          </FlexBetween>
          <LineSplitter className={"!my-4"} />
          <FlexBetween>
            <Paragraph size={Sizes.sm}>مبلغ قابل پرداخت</Paragraph>
            <Paragraph>
              <span className="text-black font-bold text-lg mx-1">
                ۱,۰۷۹,۰۰۰
              </span>
              <Toman />
            </Paragraph>
          </FlexBetween>
        </div>
        <MainButton defaultIcon full className="!mt-12">
          تکمیل فرایند خرید
        </MainButton>
      </GradientBox>
    </div>
  );
};

export default PaymentInfo;
