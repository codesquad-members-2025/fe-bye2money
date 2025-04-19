import { createContext, useContext, useState } from "react";
import styled from "styled-components";

const AlertModalContext = createContext();

export function ModalProvider({ children }) {
  const [modalContent, setModalContent] = useState(null);

  function openModal(modalContent) {
    return;
  }

  function closeModal() {}
  return (
    <AlertModalContext.Provider value={(openModal, closeModal)}>
      {children}
      {modalContent ? "모달 컴포넌트" : null}
    </AlertModalContext.Provider>
  );
}
