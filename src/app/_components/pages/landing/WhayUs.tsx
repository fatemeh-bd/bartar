import React from 'react';
import Title from '../../typography/Title';
import { BookOpenIcon } from '@heroicons/react/20/solid';
import {
  ChatBubbleLeftRightIcon,
  FireIcon,
  ForwardIcon,
  PuzzlePieceIcon,
  VideoCameraIcon,
} from '@heroicons/react/16/solid';
const items = [
  {
    svg: <PuzzlePieceIcon className="size-8" />,
    text: 'چالش‌برانگیز',
    color: 'text-emerald-500',
  },

  {
    svg: <FireIcon className="size-8" />,
    text: 'پروژه‌محور',
    color: 'text-yellow-500',
  },
  {
    svg: <BookOpenIcon className="size-8" />,
    text: 'جامع',
    color: 'text-blue-500',
  },
  {
    svg: <ForwardIcon className="size-8" />,
    text: 'به‌روز',
    color: 'text-green-500',
  },
  {
    svg: <VideoCameraIcon className="size-8" />,
    text: 'ویدیویی',
    color: 'text-rose-500',
  },
  {
    svg: <ChatBubbleLeftRightIcon className="size-8" />,
    text: 'ویدیویی',
    color: 'text-cyan-500',
  },
];
const WhayUs = () => {
  return (
    <div className="my-8 relative">
      <Title className="mx-auto relative bg-background text-black w-fit z-50 py-3  border border-border rounded-2xl px-8">
        چرا آکــــادمـــــی میزکد ؟
      </Title>
      <div className="relative -mt-7 z-10 pt-12 bg-secondary-200 rounded-3xl">
        <div className="flex flex-wrap items-center justify-center gap-10 md:pb-10 pb-5 md:px-10 px-5">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center text-center ${item.color} space-y-3 cursor-default animate-pulse`}>
              <span className="flex items-center justify-center w-20 h-20 bg-background rounded-full">
                {item.svg}
              </span>
              <span className="font-bold text-sm line-clamp-1">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhayUs;
