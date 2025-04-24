import styled from "styled-components";

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.font.serif};
  color: ${({ theme }) => theme.color.token.text.default};
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`;

function MoneyLabel(moneyType, money) {
  const earning = "수입";
  const expense = "지출";
  const moneyType = moneyType === "earning" ? earning : expense;
  const formedMoney = Number(money).toLocaleString();

  return (
    <Item>
      <span>{moneyType}</span>
      <span>{formedMoney}</span>
    </Item>
  );
}

export default function TotalExpenseLabel({ earning, expense }) {}
