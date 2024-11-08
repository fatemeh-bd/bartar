import React, { ReactNode } from "react";

const Label = ({ children }: { children: ReactNode }) => {
  return (
    <label className="text-sm text-secondary-700 flex items-center gap-2 font-normal">
      {children}
    </label>
  );
};

export default Label;
