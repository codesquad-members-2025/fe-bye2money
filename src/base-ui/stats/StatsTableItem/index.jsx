import styled from "styled-components";
import CategoryTag from "../../listItem/CategoryTag";
import { formatAmount } from "../../../utils/amountChanger";

const Container = styled.div`
  display: flex;
  width: 100%;
  padding-right: 16px;
  gap: 16px;
  align-items: center;
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.light};
  line-height: 24px;
  font-family: ${({ theme }) => theme.font.sans};
  color: ${({ theme }) => theme.color.token.text.default};
  text-align: center;
`;

export default function StatsTableItem({ classification, percentage, amount }) {
  const percentageUnit = "%";
  const amountUnit = "원";
  return (
    <Container>
      <CategoryTag classification={classification} />
      <Body>
        <span>
          {percentage}
          {percentageUnit}
        </span>
        <span>
          {formatAmount(amount)}
          {amountUnit}
        </span>
      </Body>
    </Container>
  );
}
