import React from "react";

export const startMobileSize = 768;
export type SvgType = React.ComponentType<React.SVGProps<SVGSVGElement>>;
export enum ColorType {
  PRIMARY = "primary",
  BLACK = "black",
  SECONDARY = "secondary",
  SUCCESS = "success",
  ERROR = "error",
}
export enum Sizes {
  xs = "xs",
  sm = "sm",
  lg = "lg",
  xl = "xl",
}

export enum ProfileItem {
  DASHBOARD = "dashboard",
  COURSES = "courses",
  FAVORITE = "favorite",
  NOTIFICATIONS = "notifications",
  PROFILE_EDIT = "edit",
}
