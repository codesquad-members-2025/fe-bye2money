import styled from "styled-components";

const StyledButton = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  gap: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background-color: transparent;
  font-family: ${({ theme }) => theme.font.sans};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  font-size: ${({ theme }) => theme.font.size.xs};
  line-height: ${({ theme }) => theme.font.lineHeight.sm};
  color: ${({ theme }) => theme.color.token.danger.text};
  cursor: pointer;
  opacity: ${({ $ishover }) => ($ishover ? 1 : 0)};
  transition: opacity 1s ease;

  &.hover {
    opacity: 0.8;
  }

  &.active {
    opacity: 0.64;
  }
`;

export default function DeleteButton({ ishover, onClick }) {
  const deleteText = "삭제";
  return (
    <StyledButton $ishover={ishover} onClick={onClick}>
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.5" width="16" height="16" rx="8" fill="#E93B5A" />
        <path
          d="M6.58582 7.08569L9.41424 9.91412"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.58582 9.91431L9.41424 7.08588"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span>{deleteText}</span>
    </StyledButton>
  );
}
