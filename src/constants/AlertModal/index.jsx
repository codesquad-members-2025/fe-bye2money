import { createContext, useContext, useState } from "react";
import styled from "styled-components";
import AlertModal from "./StyledAlertModal";

const AlertModalContext = createContext();

export function ModalProvider({ children }) {
  const [modalContent, setModalContent] = useState(null);

  function openModal(content) {
    setModalContent(content);
  }

  function closeModal() {
    setModalContent(null);
  }

  return (
    <AlertModalContext.Provider value={openModal}>
      {children}
      {modalContent ? (
        <AlertModal {...modalContent} closeModal={closeModal} />
      ) : null}
    </AlertModalContext.Provider>
  );
}

export function useModal() {
  return useContext(AlertModalContext);
}
