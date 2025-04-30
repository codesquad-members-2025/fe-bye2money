import styled from "styled-components";

const Container = styled.div`
  font-family: ${({ theme }) => theme.font.serif};
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.middle};
  line-height: ${({ theme }) => theme.font.lineHeight.sm};
  color: ${({ theme }) => theme.color.token.text.default};
  display: flex;
  gap: 120px;
`;

export default function MonthlyAmountHeader({ amount }) {
  const tag = "이번 달 지출 금액";

  return (
    <Container>
      <span>{tag}</span>
      <span>{amount}</span>
    </Container>
  );
}
