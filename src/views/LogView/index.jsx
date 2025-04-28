import styled from "styled-components";
import FormBox from "../../units/FormBox";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import MonthlyInfomation from "../../units/MonthlyInfomation";
import MonthTransactionList from "../../units/MonthTransactionList";
import { deleteTransaction } from "./deleteTransaction";

const LogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;
  margin-top: -40px;
`;

const LogBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  z-index: 1;
`;
//setSelectedTransactions은 로그뷰에 내려줘야한다.
export default function LogView() {
  const [selectedTransactions, setSelectedTransactions] = useState(null);
  const { mainPageState, mainPageDispatch } = useOutletContext();
  return (
    <LogContainer>
      <FormBox
        dispatch={mainPageDispatch}
        selectedTransactions={selectedTransactions}
        setSelectedTransactions={setSelectedTransactions}
      />
      <LogBody>
        <MonthlyInfomation transactions={mainPageState} />
        <MonthTransactionList
          transactions={mainPageState}
          onEdit={(item) => setSelectedTransactions(item)}
          onDelete={(item) => deleteTransaction(item, mainPageDispatch)}
        />
      </LogBody>
    </LogContainer>
  );
}
