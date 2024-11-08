import React from "react";
import { HeartIcon } from "@heroicons/react/20/solid";
import { ColorType } from "@/_utiles/enums";
import MainButton from "../buttons/MainButton";

const Like = ({ className }: { className?: string }) => {
  return (
    <MainButton
      themeType={ColorType.SECONDARY}
      className={`size-12 !p-2 rounded-full text-secondary-700  hover:!text-rose-600 ${
        className || ""
      }`}
    >
      <HeartIcon className="size-5" />
    </MainButton>
  );
};

export default Like;
