import { SvgType } from "@/_utiles/enums";

export interface NavItemType {
  text: string;
  path?: string;
  childrens?: {
    path: string;
    text: string;
  }[];
}
export interface ProfileItemType {
  path: string;
  text: string;
  icon: SvgType;
}