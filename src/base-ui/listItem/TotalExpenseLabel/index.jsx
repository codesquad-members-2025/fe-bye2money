import styled from "styled-components";
import { formatAmount } from "../../../utils/amountChanger";

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

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TYPE_LABEL = {
  earning: "수입",
  expense: "지출",
};

function getMoneyLabel(type, amount) {
  return (
    <Item>
      <span>{TYPE_LABEL[type]}</span>
      <span>{formatAmount(amount)}원</span>
    </Item>
  );
}

export default function TotalExpenseLabel({ earning = null, expense = null }) {
  return (
    <Wrapper>
      {earning && getMoneyLabel("earning", earning)}
      {expense && getMoneyLabel("expense", expense)}
    </Wrapper>
  );
}
