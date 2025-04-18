//input 코어 컴포넌트의 스타일 상속 전용 컴포넌트
import styled from "styled-components";

const InputField = styled.input`
  font-weight: ${({ theme }) => theme.weight.semibold};
  font-size: ${({ theme }) => theme.weight.size.xs};
  color: ${({ theme }) => theme.color.token.text.default};
  border: none;
  outline: none;
`;

export default InputField;
