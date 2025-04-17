import React, { useState } from "react";
import styled from "styled-components";

const AmountWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const AmountInputWrapper = styled.input`
  text-align: right;
  border: none;
`;

const CurrencyUnit = styled.div`
  font-weight: ${({ theme }) => theme.weight.light};
  font-size: ${({ theme }) => theme.weight.size.xs};
`;

const formatNumber = (value) => {
  const onlyNums = value.replace(/[^0-9]/g, "");
  return onlyNums.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const currencyUnitText = "원";

export default function AmountInput({ amount, onChange }) {
  // const [amount, setAmount] = useState("");

  const handleChange = (e) => {
    const input = e.target.value;
    const formatted = formatNumber(input);
    onChange(formatted);
  };

  return (
    <AmountWrapper>
      <AmountInputWrapper
        type="text"
        value={amount}
        onChange={handleChange}
        placeholder="0"
      />
      <CurrencyUnit>{currencyUnitText}</CurrencyUnit>
    </AmountWrapper>
  );
}
