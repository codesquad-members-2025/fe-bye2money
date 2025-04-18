import styled from "styled-components";

const ToggleButton = styled.button`
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
        height="1"
        viewBox="0 0 14 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 0.5H13"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (type === "expense") {
    return (
      <svg
        width="2"
        height="13"
        viewBox="0 0 2 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 12.5L1 0.5"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
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

export default function TypeToggle({ type, onClick }) {
  let currentType = type;
  return (
    <ToggleWrapper>
      <ToggleButton onClick={() => onClick(toggleType(currentType))}>
        {getType(currentType)}
      </ToggleButton>
    </ToggleWrapper>
  );
}
