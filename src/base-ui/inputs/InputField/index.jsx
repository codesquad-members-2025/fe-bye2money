//input 코어 컴포넌트의 스타일 상속 전용 컴포넌트
import styled from "styled-components";

const InputField = styled.textarea`
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.color.token.text.default};
  resize: none;
  border: none;
  outline: none;
  height: 16px;
`;

export default InputField;
