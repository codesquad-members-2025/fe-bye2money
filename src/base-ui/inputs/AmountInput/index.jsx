import React, { useState } from "react";
import styled from "styled-components";
import { InputField } from "../InputField";

const AmountWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const AmountInputWrapper = styled(InputField)`
  text-align: right;
`;

const CurrencyUnit = styled.div`
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-size: ${({ theme }) => theme.font.size.xs};
`;

const formatCurrencyWithComma = (value) => {
  const onlyNums = value.replace(/[^0-9]/g, "");
  return onlyNums.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const currencyUnitText = "원";

export default function AmountInput({ amount, onChange }) {
  // const [amount, setAmount] = useState("");

  const handleChange = (e) => {
    const input = e.target.value;
    const formatted = formatCurrencyWithComma(input);
    return formatted;
  };

  return (
    <AmountWrapper>
      <AmountInputWrapper
        type="text"
        value={amount}
        onChange={(e) => onChange(handleChange(e))}
        placeholder="0"
        required
      />
      <CurrencyUnit>{currencyUnitText}</CurrencyUnit>
    </AmountWrapper>
  );
}
