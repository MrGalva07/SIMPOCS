import React, { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-md shadow-lg w-96 ">
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-gray-900 float-right"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
