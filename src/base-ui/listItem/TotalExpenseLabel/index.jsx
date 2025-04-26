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

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transform: ${({ $ishover }) =>
    $ishover ? `translateX(-57px)` : `translateX(0px)`};
  transition: transform 0.3s ease;
`;

const TYPE_LABEL = {
  earning: "수입",
  expense: "지출",
};

function getMoneyLabel(type, amount) {
  return (
    <Item>
      <span>{TYPE_LABEL[type]}</span>
      <span>{amount}원</span>
    </Item>
  );
}

export default function AmountText({
  earning = null,
  expense = null,
  ishover,
}) {
  return (
    <Wrapper $ishover={ishover}>
      {earning && getMoneyLabel("earning", earning)}
      {expense && getMoneyLabel("expense", expense)}
    </Wrapper>
  );
}
