import React, { InputHTMLAttributes } from "react";

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className"
> & {
  className?: string;
  icon?: React.ReactNode;
  label?: string;
  errorText?: string;
};
