import styled from "styled-components";

const GhostButton = styled.button`
  all: unset;
  cursor: pointer;
  transition: opacity 0.2s ease;
  opacity: ${({ disabled }) => (disabled ? 0.32 : 1)};

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.32 : 0.8)};
  }

  &:active {
    opacity: ${({ disabled }) => (disabled ? 0.32 : 0.64)};
  }
`;

export default function SubmitButton({ isValid }) {
  return (
    <GhostButton disabled={!isValid} type="submit">
      <svg
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.5" width="40" height="40" rx="20" fill="black" />
        <path
          d="M29 14.5L16.625 26.5L11 21.0455"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </GhostButton>
  );
}
