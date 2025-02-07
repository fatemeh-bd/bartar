import { ColorType } from "@/utils/enums";
import { ButtonHTMLAttributes } from "react";

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> & {
  children: React.ReactNode;
  className?: string;
  themeType?: ColorType;
  defaultIcon?: boolean;
  full?: boolean;
  outline?: boolean;
  isLoading?:boolean
};
