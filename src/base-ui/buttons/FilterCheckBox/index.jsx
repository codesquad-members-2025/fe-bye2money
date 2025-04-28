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
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.5" width="20" height="20" rx="5" fill="black" />
            <path
              d="M15 7.5L8.125 14.1667L5 11.1364"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="1"
              width="19"
              height="19"
              rx="4.5"
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
