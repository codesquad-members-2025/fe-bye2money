//input 코어 컴포넌트의 스타일 상속 전용 컴포넌트
import styled from "styled-components";

const InputField = styled.input`
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.color.token.text.default};
  resize: none;
  border: none;
  outline: none;
  height: 16px;
  width: 88px;
`;

const TextAreaField = styled.textarea`
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.color.token.text.default};
  resize: none;
  border: none;
  outline: none;
  height: 16px;
  width: 160px;

  /* 스크롤바 커스텀 */
  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      theme.color.token.text.weak}; // 어두운 회색 계열 추천
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export { InputField, TextAreaField };
