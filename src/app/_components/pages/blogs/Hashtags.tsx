import React from "react";
import FlexItemCenter from "../../flex/FlexItemCenter";
import Link from "next/link";
import { HashtagIcon } from "@heroicons/react/24/outline";

const Hashtags = () => {
  return (
    <FlexItemCenter className="flex-wrap mt-4" gap={"gap-2"}>
      <Link
        href={"/blogs/example"}
        className="text-black text-xs font-medium flex items-center gap-1 bg-secondary-200 p-2 rounded-full"
      >
        <HashtagIcon className="size-3" />
        سی شارپ
      </Link>
      <Link
        href={"/blogs/example"}
        className="text-black text-xs font-medium flex items-center gap-1 bg-secondary-200 p-2 rounded-full"
      >
        <HashtagIcon className="size-3" />
        لاراول
      </Link>
      <Link
        href={"/blogs/example"}
        className="text-black text-xs font-medium flex items-center gap-1 bg-secondary-200 p-2 rounded-full"
      >
        <HashtagIcon className="size-3" />
        جاوااسکریپت
      </Link>
      <Link
        href={"/blogs/example"}
        className="text-black text-xs font-medium flex items-center gap-1 bg-secondary-200 p-2 rounded-full"
      >
        <HashtagIcon className="size-3" />
        تایپ اسکریپت
      </Link>
      <Link
        href={"/blogs/example"}
        className="text-black text-xs font-medium flex items-center gap-1 bg-secondary-200 p-2 rounded-full"
      >
        <HashtagIcon className="size-3" />
        تایپ اسکریپت
      </Link>
      <Link
        href={"/blogs/example"}
        className="text-black text-xs font-medium flex items-center gap-1 bg-secondary-200 p-2 rounded-full"
      >
        <HashtagIcon className="size-3" />
        لاراول
      </Link>
      <Link
        href={"/blogs/example"}
        className="text-black text-xs font-medium flex items-center gap-1 bg-secondary-200 p-2 rounded-full"
      >
        <HashtagIcon className="size-3" />
        تایپ اسکریپت
      </Link>
      <Link
        href={"/blogs/example"}
        className="text-black text-xs font-medium flex items-center gap-1 bg-secondary-200 p-2 rounded-full"
      >
        <HashtagIcon className="size-3" />
        لاراول
      </Link>
    </FlexItemCenter>
  );
};

export default Hashtags;
