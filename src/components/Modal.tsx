import React from 'react';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center pointer-events-none'>
      <div className='absolute inset-0 bg-black/40' />
      <div className='relative w-80 bg-white rounded-xl p-6 shadow-xl pointer-events-auto'>
        {children}
      </div>
    </div>
  );
};

export default Modal;
