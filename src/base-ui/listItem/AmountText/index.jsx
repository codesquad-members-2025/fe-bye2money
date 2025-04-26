import styled from "styled-components";

export default function AmountText({
  earning = null,
  expense = null,
  ishover,
}) {
  return (
    <Text $ishover={ishover} $currentType={earning ? "income" : "expense"}>
      {expense ? "-" : ""}
      {earning ? earning : expense}
    </Text>
  );
}

const Text = styled.div`
  transform: ${({ $ishover }) =>
    $ishover ? `translateX(-57px)` : `translateX(0px)`};
  transition: transform 0.3s ease;
  width: 186px;
  font-family: ${({ theme }) => theme.font.sans};
  font-weight: 300;
  font-size: ${({ theme }) => theme.font.size.sm};
  line-height: ${({ theme }) => theme.font.lineHeight.sm};
  color: ${({ theme, $currentType }) => theme.color.token.text[$currentType]};
  text-align: right;
`;
