import {
  ModalContainer,
  ModalMessage,
  ModalInput,
  ModalButtonGroup,
  ModalButton,
  ModalContentList,
  ModalContentItem,
} from "./Styled";

export default function AlertModal({
  message,
  placeholder,
  selectedContent,
  confirmText = "삭제",
  cancelText = "취소",
  onConfirm,
  closeModal,
}) {
  return (
    <ModalContainer>
      <ModalMessage>{message}</ModalMessage>

      {/* 드랍박스 결제 수단 추가할경우 */}
      {placeholder && <ModalInput placeholder={placeholder} />}
      {/* 결제수단 삭제, 가계부 로그 삭제 할 경우 */}
      {selectedContent && (
        <ModalContentList>
          {Object.entries(selectedContent).map(([label, value]) => (
            <ModalContentItem key={label}>
              <strong>{label}:</strong> {value}
            </ModalContentItem>
          ))}
        </ModalContentList>
      )}

      <ModalButtonGroup>
        <ModalButton onClick={closeModal}>{cancelText}</ModalButton>
        <ModalButton onClick={onConfirm}>{confirmText}</ModalButton>
      </ModalButtonGroup>
    </ModalContainer>
  );
}
