'use client';
import React from 'react';
import useScreenWidth from '../hooks/useScreenWidth';
import MobileHeader from './components/MobileHeader';
import DesktopHeader from './components/DesktopHeader';
import { startMobileSize } from '@/_utiles/enums';
import { NavItemType } from './types';
export const navItems: NavItemType[] = [
  {
    text: 'دسته بندی آمـــوزشها',
    childrens: [
      {
        path: '/courses',
        text: 'برنامه نویسی وب',
      },
      {
        path: '/courses',
        text: 'دیتا ساینس',
      },
      {
        path: '/courses',
        text: 'زبانهای برنامه نویسی',
      },
      {
        path: '/courses',
        text: 'طراحی دیتابیس',
      },
    ],
  },
  {
    text: 'مقالات آموزشی',
    path: '/blogs',
  },
  { text: 'دوره ها', childrens: [{ text: 'لینکهای مفید', path: '/' }] },
];
const Header = () => {
  const isMobile = useScreenWidth(startMobileSize);
  return (
    <header className="bg-white/80 dark:bg-slate-950/90 backdrop-blur-lg pt-4 pb-2 border-b border-border border-secondary-500 sticky top-0 z-[999]">
      <div className="relative mx-auto px-5 max-w-7xl min-h-[50px] text-secondary-700">
        {isMobile ? <MobileHeader /> : <DesktopHeader />}
      </div>
    </header>
  );
};

export default Header;
