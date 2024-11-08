import React from "react";

type RadioProps = {
  label: string;
  name: string;
  value: string;
};

const Radio = ({ label, name, value }: RadioProps) => {
  return (
    <label className="flex items-center my-1 gap-2 text-sm font-normal text-secondary-700">
      <input
        type="radio"
        name={name}
        value={value}
        className="size-4 text-primary bg-secondary-500 border-transparent"
      />
      {label}
    </label>
  );
};

export default Radio;
