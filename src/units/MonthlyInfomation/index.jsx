import styled from "styled-components";
import ItemCounter from "../../base-ui/itemCounter";
import FilterCheckBox from "../../base-ui/buttons/FilterCheckBox";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export default function MonthlyInfomation({ count }) {
  const [isEarningActive, setIsEarningActive] = useState(true);
  const [isExpenseActive, setIsExpensActive] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentTypeArray = searchParams.getAll("currentType");

  function toggleEarningButton() {
    setIsEarningActive((prev) => !prev);
    const newParams = new URLSearchParams(searchParams);

    if (currentTypeArray.includes("earning")) {
      newParams.delete("currentType", "earning");
    } else {
      newParams.append("currentType", "earning");
    }

    setSearchParams(newParams);
  }
  function toggleExpenseButton() {
    setIsExpensActive((prev) => !prev);
    const newParams = new URLSearchParams(searchParams);
    if (currentTypeArray.includes("expense")) {
      newParams.delete("currentType", "expense");
    } else {
      newParams.append("currentType", "expense");
    }

    setSearchParams(newParams);
  }
  return (
    <Container>
      <ItemCounter count={count} />
      <CheckBoxWrapper>
        <FilterCheckBox
          onClick={() => toggleEarningButton()}
          transactionType={"earning"}
          amount={amount}
          isCheckBoxActive={isEarningActive}
        />
        <FilterCheckBox
          onClick={() => toggleExpenseButton()}
          transactionType={"expense"}
          amount={amount}
          isCheckBoxActive={isExpenseActive}
        />
      </CheckBoxWrapper>
    </Container>
  );
}
