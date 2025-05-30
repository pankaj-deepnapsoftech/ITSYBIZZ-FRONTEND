import React from "react";

const Modal = ({ children, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md h-[300px] overflow-y-auto relative">
        <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>
    );
};

export default Modal;
