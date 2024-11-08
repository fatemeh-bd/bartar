import React from "react";
import FlexBetween from "../../flex/FlexBetween";
import FlexItemCenter from "../../flex/FlexItemCenter";
import {
  Bars3Icon,
  ChevronDownIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Logo } from "./Logo";
import { Counter } from "./Counter";

const MobileHeader = () => {
  return (
    <FlexBetween className="md:hidden flex">
      <FlexItemCenter>
        <Bars3Icon className="size-10 bg-secondary-100 text-black rounded-full p-2" />

        <Logo />
      </FlexItemCenter>

      <FlexItemCenter>
        <div className="relative">
          <ShoppingCartIcon className="size-9 bg-secondary-100 text-black rounded-full p-2" />
          <Counter value={2} />
        </div>
        <UserIcon className="size-9 bg-secondary-100 text-black rounded-full p-2" />
        <ChevronDownIcon className="size-5" />
      </FlexItemCenter>
    </FlexBetween>
  );
};

export default MobileHeader;
