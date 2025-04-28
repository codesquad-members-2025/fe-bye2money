//폼박스에서의 결제수단 선택 버튼

import styled from "styled-components";
import DefaultButton from "../DefaultButton";

const SelectButton = styled(DefaultButton)`
  /* position: relative; // 기준이 되는 요소 */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none; /* ✅ 파란 테두리 완전히 제거 */
  }
`;

const ButtonText = styled.div`
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.color.token.text.weak};
  line-height: ${({ theme }) => theme.font.lineHeight.sm};
`;

export default function CategorySelectButton({ input, onClick }) {
  return (
    <SelectButton type="button" onClick={onClick}>
      <ButtonText>{input || "선택하세요"}</ButtonText>
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
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SelectButton>
  );
}
