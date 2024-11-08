"use client";
import React, { useState } from "react";

const Switch = ({ label }: { label: string }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <label className="flex justify-between items-center cursor-pointer">
      {label}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleSwitchChange}
        className="sr-only peer"
      />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600">
        <div
          className={`absolute top-[2px] left-[2px] h-5 w-5 bg-white rounded-full transition-transform ${
            isChecked ? "translate-x-full" : ""
          }`}
        ></div>
      </div>
    </label>
  );
};

export default Switch;
