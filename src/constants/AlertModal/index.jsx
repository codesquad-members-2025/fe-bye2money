import { createContext, useContext, useState } from "react";
import styled from "styled-components";
import AlertModal from "./StyledAlertModal";

const AlertModalContext = createContext();

export function ModalProvider({ children }) {
  const [modalState, setModalState] = useState({
    content: null,
    controller: null,
  });

  function openModal(content, controller) {
    setModalState({ content, controller });
  }

  function closeModal() {
    setModalState({ content: null, controller: null });
  }

  return (
    <AlertModalContext.Provider value={openModal}>
      {children}
      {modalState.content ? (
        <AlertModal
          {...modalState.content}
          dataController={modalState.controller}
          closeModal={closeModal}
        />
      ) : null}
    </AlertModalContext.Provider>
  );
}

export function useModal() {
  return useContext(AlertModalContext);
}
