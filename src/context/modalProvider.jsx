import { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';

import ModalContext from './modalContext';

const ModalProvider = ({ children }) => {
  const [modalNode, setModalNode] = useState(null);

  const openModal = useCallback((node) => {
    setModalNode(node);
  }, []);
  const closeModal = useCallback(() => {
    setModalNode(null);
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalNode &&
        ReactDOM.createPortal(modalNode, document.getElementById('modal-root'))}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
