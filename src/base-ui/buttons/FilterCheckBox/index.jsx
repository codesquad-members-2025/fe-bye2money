import styled from "styled-components";

const StyledCheckBox = styled.button`
  display: flex;
  gap: 4px;
  align-items: center;
  background: transparent;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
`;

const CheckBox = styled.div`
  width: 16px;
  height: 16px;
  padding: 1.33px 1.33px;
`;

const SummaryLabel = styled.span`
  font-family: ${({ theme }) => theme.font.sans};
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-size: ${({ theme }) => theme.font.size.xs};
  line-height: ${({ theme }) => theme.font.lineHeight.md};
  color: ${({ theme }) => theme.color.token.text.default};
  min-width: 70px;
`;

const type = {
  earning: "수입",
  expense: "지출",
};

export default function FilterCheckBox({
  onClick,
  transactionType,
  amount,
  isCheckBoxActive,
}) {
  return (
    <StyledCheckBox onClick={onClick}>
      <CheckBox>
        {isCheckBoxActive ? (
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.333252"
              y="0.333344"
              width="13.3333"
              height="13.3333"
              rx="6.66667"
              fill="black"
            />
            <path
              d="M10.3332 5L5.74984 9.44444L3.6665 7.42424"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.833252"
              y="0.833344"
              width="12.3333"
              height="12.3333"
              rx="6.16667"
              stroke="black"
            />
          </svg>
        )}
      </CheckBox>
      <SummaryLabel>{`${type[transactionType]} ${amount}`}</SummaryLabel>
    </StyledCheckBox>
  );
}

//비활성화인 체크박스

//활성화 체크박스
