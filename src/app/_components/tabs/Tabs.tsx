"use client";
import React, { useState, useRef } from "react";
import { TabsProps, TabType } from "./types";

const Tabs: React.FC<TabsProps> = ({ tabs, content, offset = 160 }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleTabClick = (tabId: number, index: number) => {
    setSelectedTab(tabId);

    const targetRef = sectionRefs.current[index];
    if (targetRef) {
      const targetPosition =
        targetRef.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const renderTab = (tab: TabType, index: number) => {
    const isSelected = selectedTab === tab.id;
    const tabClass = isSelected
      ? "bg-background text-foreground rounded-full"
      : "text-secondary-700";

    return (
      <li
        key={tab.id}
        className={`${tabClass} flex items-center gap-1 py-2 px-3 cursor-pointer text-sm`}
        onClick={() => handleTabClick(tab.id, index)}
      >
        <tab.icon className="w-5 h-5" />
        {tab.label}
      </li>
    );
  };

  return (
    <>
      <div className="sticky top-24 z-10">
        <div className="relative overflow-x-auto">
          <ul className="inline-flex gap-2 bg-secondary-200 border border-border border-secondary-500 md:text-base text-xs rounded-full p-1">
            {tabs.map((tab, index) => renderTab(tab, index))}
          </ul>
        </div>
      </div>

      {content.map((section, index) => (
        <div
          key={tabs[index].id}
          ref={(el) => {
            sectionRefs.current[index] = el;
          }}
        >
          {section}
        </div>
      ))}
    </>
  );
};

export default Tabs;
