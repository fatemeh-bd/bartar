import { ColorType, Sizes } from "@/utils/enums";
import React from "react";

export interface ParagraphType {
  children: React.ReactNode;
  type?: ColorType;
  size?: Sizes;
  className?: string;
  justify?: boolean;
}
