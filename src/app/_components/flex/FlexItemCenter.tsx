import React, { forwardRef } from 'react';
import { FlexComponentsType } from './types';

const FlexItemCenter = forwardRef<HTMLDivElement, FlexComponentsType>(
  ({ children, gap, className, onClick }, ref) => {
    return (
      <div
        ref={ref} // Forward the ref to the div
        className={`flex items-center ${gap ? gap : 'gap-2'} ${
          className ?? className
        }`}
        onClick={onClick}>
        {children}
      </div>
    );
  }
);

FlexItemCenter.displayName = 'FlexItemCenter'; // Optional: Set display name for debugging

export default FlexItemCenter;
