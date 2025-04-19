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
}) {
  return (
    <ModalContainer>
      <ModalMessage>{message}</ModalMessage>

      {/* 입력이 필요한 경우에만 보여줄 예정 */}
      {placeholder && <ModalInput placeholder={placeholder} />}
      {/* 아래의 태그는 커스텀 태그로 변경해야함 */}
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
        <ModalButton>{cancelText}</ModalButton>
        <ModalButton>{confirmText}</ModalButton>
      </ModalButtonGroup>
    </ModalContainer>
  );
}
