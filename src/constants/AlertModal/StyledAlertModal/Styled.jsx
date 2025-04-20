import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 384px;
  background-color: ${({ theme }) => theme.color.token.surface.default};
  border: 1px solid ${({ theme }) => theme.color.token.border.default};
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
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
