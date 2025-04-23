import { StyledSwipeButton } from "../StyledButton";

export default function NextMonthButton({ onClick }) {
  return (
    <StyledSwipeButton onClick={onClick}>
      <svg
        width="10"
        height="18"
        viewBox="0 0 10 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 1L1 9L9 17"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </StyledSwipeButton>
  );
}
