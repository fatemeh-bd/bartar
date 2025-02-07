import { SvgType } from "@/utils/enums";
import { ReactNode } from "react";

export interface TabType {
  id: number;
  label: string;
  icon: SvgType;
}
export interface TabsProps {
  tabs: TabType[];
  content: ReactNode[];
  offset?: number;
}

export interface TabContent {}
