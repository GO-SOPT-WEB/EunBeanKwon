import React from 'react';
import reactDom from 'react-dom';

interface PortalProps {
    children: React.ReactNode;
}

const Portal = ({ children }: PortalProps) => {
    const el = document.getElementById('modal-root') as HTMLElement;
    return reactDom.createPortal(children, el);
};

export default Portal;
