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
          d="M1 1L9 9L1 17"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </StyledSwipeButton>
  );
}
