import styled from "styled-components";
import FormBox from "../../units/FormBox";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const LogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;
  margin-top: -40px;
`;

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
    </LogContainer>
  );
}
