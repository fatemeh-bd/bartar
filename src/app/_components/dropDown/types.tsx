import { ReactNode } from "react";

export interface DropDownType {
  label: string | ReactNode;
  className: string;
  list: SelectBoxItemType[];
  value: string;
  setValue: (e: SelectBoxItemType) => void;
}
export interface SelectBoxItemType {
  text: string;
  value: string | number;
}
