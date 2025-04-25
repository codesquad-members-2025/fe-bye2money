import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4); // 회색 딤처리
  z-index: 999; // 모달보다 낮지 않도록 설정
`;

export const ModalContainer = styled.div`
  width: 384px;
  background-color: ${({ theme }) => theme.color.token.surface.default};
  border: 1px solid ${({ theme }) => theme.color.token.border.default};
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); // 정중앙 배치
  z-index: 1000; // 오버레이보다 위에 있어야 함
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const ModalMessage = styled.p`
  font-size: ${({ theme }) => theme.font.size.md};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  color: ${({ theme }) => theme.color.token.text.default};
  margin: 0;
`;

export const ModalContentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.color.token.text.default};
  line-height: 24px;
  font-weight: ${({ theme }) => theme.font.weight.light};
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ModalContentItem = styled.li`
  &::before {
    content: "•";
    margin-right: 8px;
  }
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.color.token.surface.point};
  border: none;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.color.token.text.default};
`;

export const ModalButtonGroup = styled.div`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.color.token.border.default};
`;

export const ModalButton = styled.button`
  flex: 1;
  padding: 16px 0;
  font-size: ${({ theme }) => theme.font.size.md};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  background: none;
  border: none;
  cursor: pointer;

  &:first-child {
    color: ${({ theme }) => theme.color.token.text.weak};
  }

  &:last-child {
    color: ${({ theme }) =>
      theme.color.token.text.expense}; // 예: 삭제는 빨간색
  }
`;
