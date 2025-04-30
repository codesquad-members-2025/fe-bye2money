import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import DonutChart from "../../base-ui/stats/DonutChart";
import CategoryStatisticsList from "../../units/CategoryStatisticsList/Index";
import transactionParser from "./transactionParser";
import moneyReducer from "../../utils/moneyReducer";
import { parseAmount } from "../../utils/amountChanger";

const Container = styled.div`
  display: flex;
  gap: 32px;
  padding: 22px 32px;
`;

const ChartContainer = styled.div`
  padding: 110px 84px;
`;
export default function StatisticsView() {
  const { mainPageState } = useOutletContext();
  const { expense } = moneyReducer(mainPageState);
  const parsedData = transactionParser(mainPageState, parseAmount(expense));

  return (
    <Container>
      <ChartContainer>
        <DonutChart data={parsedData} />
      </ChartContainer>
      <CategoryStatisticsList expense={expense} expenseStatus={parsedData} />
    </Container>
  );
}
