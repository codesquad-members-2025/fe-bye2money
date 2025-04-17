import styled from "styled-components";
import ResetButton from "../ResetButton";

const SelectButton = styled(ResetButton)`
  font-weight: ${({ theme }) => theme.weight.semibold};
  font-size: ${({ theme }) => theme.weight.size.xs};
  color: ${({ theme }) => theme.color.token.text.weak};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export default function CategorySelectButton({ method, onClick }) {
  return (
    <SelectButton onClick={onClick}>
      <span>{method || "선택하세요"}</span>
      <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.1665 1L5.1665 5L1.1665 1"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </SelectButton>
  );
}
