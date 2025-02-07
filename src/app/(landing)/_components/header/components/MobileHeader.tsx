'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  AcademicCapIcon,
  ArrowLeftStartOnRectangleIcon,
  Bars3Icon,
  ShoppingCartIcon,
  SparklesIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { Logo } from './Logo';
import { Counter } from './Counter';
import Link from 'next/link';
import { ProfileItemType } from '../types';
import { ColorType, ProfileItem, Sizes } from '@/_utiles/enums';
import FlexItemCenter from '@/app/_components/flex/FlexItemCenter';
import FlexBetween from '@/app/_components/flex/FlexBetween';
import Paragraph from '@/app/_components/typography/Paragraph';

const MobileHeader = () => {
  const [showProfileItem, setShowProfileItem] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowProfileItem(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const profileList: ProfileItemType[] = [
    {
      text: 'مشاهده پروفایل',
      icon: SparklesIcon,
      path: '/profile?page=' + ProfileItem.DASHBOARD,
    },
    {
      text: 'دوره ها',
      icon: AcademicCapIcon,
      path: `/profile?page=${ProfileItem.COURSES}`,
    },
  ];

  return (
    <FlexBetween className="md:hidden flex">
      <FlexItemCenter>
        <Bars3Icon
          className="size-10 bg-secondary-100 text-black rounded-full p-2 cursor-pointer"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />
        <Logo />
      </FlexItemCenter>

      <FlexItemCenter>
        <div className="relative">
          <Link href={'/cart'}>
            <ShoppingCartIcon className="size-9 bg-secondary-100 text-black rounded-full p-2" />
          </Link>
          <Counter value={2} />
        </div>
        <div
          className="flex items-center"
          onClick={() => {
            setShowProfileItem(true);
          }}>
          <UserIcon className="size-9 bg-secondary-100 text-black rounded-full p-2" />
        </div>
      </FlexItemCenter>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-[100vh] w-64 bg-background border-l border-secondary-500 shadow-2xl shadow-black/5 transform transition-transform duration-300 ease-in-out ${
          showMobileMenu ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="flex w-full mt-4 justify-center items-center p-4">
          <Logo />
        </div>

        <ul className="flex flex-col gap-2 p-4 relative [&>li>a]:!cursor-pointer rounded-xl max-h-[300px]">
          {profileList?.map((item, index) => (
            <li key={index} className="border-b border-secondary-500 pb-2">
              <Link
                href={item.path}
                className=" w-full flex items-center relative transition-colors cursor-pointer  hover:[&>div>p]:!text-primary">
                <FlexItemCenter className="w-full hover:!text-primary">
                  <item.icon className="size-5" />
                  <Paragraph
                    size={Sizes.xs}
                    type={ColorType.BLACK}
                    className="font-medium">
                    {item.text}
                  </Paragraph>
                </FlexItemCenter>
              </Link>
            </li>
          ))}
          <li
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {}}>
            <ArrowLeftStartOnRectangleIcon className="size-5 text-rose-500" />
            <Paragraph type={ColorType.ERROR} className="font-medium !text-xs">
              خروج از حساب
            </Paragraph>
          </li>
        </ul>
      </div>

      {/* Profile Menu */}
      <div
        ref={menuRef}
        className={`absolute left-3 top-6 opacity-1 transition-all group-hover/categories:opacity-100 group-hover/categories:visible pt-5 z-10 ${
          !showProfileItem ? ' invisible opacity-0' : ''
        }`}>
        <ul className="flex flex-col gap-2 p-4 relative w-56 [&>li>a]:!cursor-pointer rounded-xl max-h-[300px] bg-background border border-secondary-500 shadow-2xl shadow-black/5">
          {profileList?.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                className=" w-full flex items-center relative transition-colors cursor-pointer  hover:[&>div>p]:!text-primary">
                <FlexItemCenter className="w-full hover:!text-primary">
                  <item.icon className="size-5" />
                  <Paragraph
                    size={Sizes.xs}
                    type={ColorType.BLACK}
                    className="font-medium">
                    {item.text}
                  </Paragraph>
                </FlexItemCenter>
              </Link>
            </li>
          ))}
          <li
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {}}>
            <ArrowLeftStartOnRectangleIcon className="size-5 text-rose-500" />
            <Paragraph type={ColorType.ERROR} className="font-medium !text-xs">
              خروج از حساب
            </Paragraph>
          </li>
        </ul>
      </div>
    </FlexBetween>
  );
};

export default MobileHeader;
