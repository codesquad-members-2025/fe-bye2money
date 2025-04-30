import styled from "styled-components";
import StatsTableItem from "../../base-ui/stats/StatsTableItem";
import MonthlyAmountHeader from "../../base-ui/stats/MonthlyAmountHeader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  padding: 24px;
`;

const TableContainer = styled.div`
  display: flex;
  width: 280px;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.color.token.border.default};
  border-bottom: 1px solid ${({ theme }) => theme.color.token.border.default};
`;
export default function CategoryStatisticsList({ expense, expenseStatus }) {
  return (
    <Container>
      <MonthlyAmountHeader amount={expense} />
      <TableContainer>
        {expenseStatus.map((status, idx) => {
          return <StatsTableItem key={idx} {...status} />;
        })}
      </TableContainer>
    </Container>
  );
}
