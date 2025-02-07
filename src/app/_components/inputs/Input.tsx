import { forwardRef } from "react";
import { InputProps } from "./types";
import Paragraph from "../typography/Paragraph";
import { ColorType } from "@/utils/enums";
export const boxClass =
  "bg-secondary-200 p-3 rounded-xl text-sm text-foreground";
export const inputClass =
  "form-input my-2  w-full !ring-0 !ring-offset-0  !border-0  ";
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, icon, errorText, ...rest }, ref) => {
    const classList = `${inputClass} ${className} ${boxClass}`;

    return icon ? (
      <div
        className={` flex items-center justify-between  gap-2 ${classList} [&>svg]:text-secondary-700`}
      >
        <input
          {...rest}
          ref={ref}
          className="w-full border-none !outline-none bg-transparent placeholder:font-normal"
        />
        {icon}
      </div>
    ) : label ? (
      <div>
        <label className="text-sm text-secondary-700">{label}</label>
        <input className={classList} {...rest} ref={ref} />
        {errorText && <Paragraph type={ColorType.ERROR}>{errorText}</Paragraph>}
      </div>
    ) : (
      <input className={classList} {...rest} ref={ref} />
    );
  }
);

Input.displayName = "Input";

export default Input;
