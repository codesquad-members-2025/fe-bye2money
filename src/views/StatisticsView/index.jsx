import styled from "styled-components";
import { useOutletContext, useSearchParams } from "react-router-dom";
import { useEffect, useReducer } from "react";
import DonutChart from "../../base-ui/stats/DonutChart";
import CategoryStatisticsList from "../../units/CategoryStatisticsList/Index";
import transactionParser from "./transactionParser";
import moneyReducer from "../../utils/moneyReducer";
import { parseAmount } from "../../utils/amountChanger";
import PolylineGraphUnit from "../../units/PolylineGraphUnit";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 32px;
  padding: 22px 32px;
`;

const ChartContainer = styled.div`
  padding: 110px 84px;
`;
export default function StatisticsView() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { mainPageState } = useOutletContext();
  const { expense } = moneyReducer(mainPageState);
  const parsedData = transactionParser(mainPageState, parseAmount(expense));

  const targetCategory = searchParams.get("category");

  return (
    <Container>
      <Wrapper>
        <ChartContainer>
          <DonutChart data={parsedData} />
        </ChartContainer>
        <CategoryStatisticsList expense={expense} expenseStatus={parsedData} />
      </Wrapper>
      {targetCategory && <PolylineGraphUnit />}
    </Container>
  );
}
