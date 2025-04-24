import styled from "styled-components";

export default function AmountText({ amount, currentType }) {
  return (
    <Text $currentType={currentType === "earning" ? "income" : "expense"}>
      {isExpense ? "-" : ""}
      {Number(amount).toLocaleString()}
    </Text>
  );
}

const Text = styled.div`
  width: 186px;
  font-family: ${({ theme }) => theme.font.sans};
  font-weight: 300;
  font-size: ${({ theme }) => theme.font.size.sm};
  line-height: ${({ theme }) => theme.font.lineHeight.sm};
  color: ${({ theme, $currentType }) => theme.color.token.text[$currentType]};
  text-align: right;
`;
