import React, { useEffect } from 'react';
import ReactDOM from "react-dom";
import { X } from "lucide-react";

const Modal = ({ children, setOpenModal, openModal }) => {
useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [openModal]);

  return ReactDOM.createPortal(
    <>
            <div
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ${
          openModal ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpenModal(false)}
      />
      <div
        className={`fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[90%] lg:w-[50%] bg-black rounded-lg z-50 transition-all duration-300 ${
          openModal
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <button
className="absolute top-3 right-3 p-2 bg-black rounded-full text-white cursor-pointer"
onClick={() => setOpenModal(false)}
>
          <X size={20} />
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;