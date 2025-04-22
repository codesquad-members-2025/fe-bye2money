import styled from "styled-components";

const StyledButton = styled.button`
  background: transparent;
  border: none;
  font-family: ${({ theme }) => theme.font.serif};
  font-weight: 400;
  font-size: ${({ theme }) => theme.font.size.lg};
  line-height: ${({ theme }) => theme.font.lineHeight.lg};
  color: ${({ theme }) => theme.color.token.text.default};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.64;
  }
`;

export default function LogoButton({ onClick, children }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
