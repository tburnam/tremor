import React from 'react';
export interface ModalProps {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    triggerRef: React.RefObject<HTMLElement>;
    width?: string;
    maxHeight?: string;
    children: React.ReactNode;
}
declare const Modal: ({ showModal, setShowModal, triggerRef, width, maxHeight, children, }: ModalProps) => JSX.Element | null;
export default Modal;
