import { ColorType, Sizes } from "@/_utiles/enums";
import React from "react";

export interface ParagraphType {
  children: React.ReactNode;
  type?: ColorType;
  size?: Sizes;
  className?: string;
  justify?: boolean;
}
