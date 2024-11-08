import React, { ReactNode, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import FlexCenter from "../flex/FlexCenter";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <FlexCenter
      className={`fixed inset-0 z-[999] ${
        isOpen ? "translate-y-0" : "translate-y-[100%] delay-500"
      }`}
    >
      <div
        className={`absolute inset-0 z-[999] bg-backDrop transition-opacity duration-500 delay-100 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      ></div>

      <div
        className={`relative bg-background z-[9999] rounded-3xl w-11/12 md:max-w-md mx-auto shadow-lg overflow-y-auto
        transition-all duration-300 delay-200 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="py-4 px-6">
          <button
            onClick={handleClose}
            className="mr-auto ml-0 block cursor-pointer"
          >
            <XMarkIcon className="w-6 h-6 text-secondary-700" />
          </button>
          {children}
        </div>
      </div>
    </FlexCenter>
  );
};

export default Modal;
