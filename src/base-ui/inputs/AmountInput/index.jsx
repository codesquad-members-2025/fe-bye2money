import React, { useState } from "react";
import styled from "styled-components";
import { InputField } from "../InputField";
import { formatAmount, parseAmount } from "../../../utils/amountChanger";

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

const currencyUnitText = "원";

export default function AmountInput({ amount, onChange }) {
  const handleChange = (e) => {
    const input = e.target.value;
    const parsed = input === "" ? 0 : parseAmount(input);
    return parsed;
  };

  return (
    <AmountWrapper>
      <AmountInputWrapper
        type="text"
        value={formatAmount(amount) || ""}
        onChange={(e) => onChange(handleChange(e))}
        placeholder="0"
        required
      />
      <CurrencyUnit>{currencyUnitText}</CurrencyUnit>
    </AmountWrapper>
  );
}
