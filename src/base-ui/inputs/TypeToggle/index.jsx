import styled from "styled-components";

const ToggleButton = styled.button`
  background-color: ${({ theme }) => theme.color.token.surface.default};
  color: ${({ theme }) => theme.color.token.text.default};
  border: none;
  cursor: pointer;
`;
const ToggleWrapper = styled.div`
  width: 16px;
  height: 16px;
`;

function getType(type) {
  if (type === "earning") {
    return (
      <svg
        width="14"
        height="10"
        viewBox="0 0 14 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 0.5H13"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 1V9"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else if (type === "expense") {
    return (
      <svg
        width="14"
        height="1"
        viewBox="0 0 14 1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 0.5H13"
          stroke="currentColor"
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
    <ToggleWrapper>
      <ToggleButton onClick={() => onClick(toggleType(type))}>
        {getType(type)}
      </ToggleButton>
    </ToggleWrapper>
  );
}
