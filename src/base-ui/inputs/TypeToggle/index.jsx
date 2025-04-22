import styled from "styled-components";

const ToggleButton = styled.button`
  all: unset;
  background-color: ${({ theme }) => theme.color.token.surface.default};
  color: ${({ theme }) => theme.color.token.text.default};
  cursor: pointer;

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none; /* ✅ 파란 테두리 완전히 제거 */
  }
`;
const ToggleWrapper = styled.div`
  width: 16px;
  height: 16px;
`;

function getType(type) {
  if (type === "earning") {
    return (
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.05566 8H12.0557"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.05566 12V4"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else if (type === "expense") {
    return (
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.05554 8H12.0555"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else {
    return null;
  }
}

function toggleType(currentType) {
  let chagedType = null;
  const earningType = "earning";
  const expenseType = "expense";
  if (currentType === earningType) {
    chagedType = expenseType;
  } else if (currentType === expenseType) {
    chagedType = earningType;
  }
  return chagedType;
}

export default function TypeToggle({ currentType: type, onClick }) {
  return (
    // <ToggleWrapper>
    <ToggleButton type="button" onClick={() => onClick(toggleType(type))}>
      {getType(type)}
    </ToggleButton>
    // </ToggleWrapper>
  );
}
