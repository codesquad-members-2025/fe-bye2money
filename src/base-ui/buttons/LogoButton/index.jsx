import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  gap: 4px;
  background: transparent;
  border: none;
  font-family: ${({ theme }) => theme.font.serif};
  font-weight: 400;
  font-size: ${({ theme }) => theme.font.size.lg};
  line-height: ${({ theme }) => theme.font.lineHeight.lg};
  color: ${({ theme }) => theme.color.token.text.default};
  cursor: pointer;
  padding-right: 15px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.64;
  }
`;

export default function LogoButton({ onClick }) {
  return (
    <StyledButton onClick={onClick}>
      <span>"Wise"</span>
      <span>"Wallet"</span>
    </StyledButton>
  );
}
