import styled from "styled-components";
import InputField from "../InputField";
import { useState } from "react";

const RedDateBox = styled.div`
  display: flex;
  gap: 4px;
`;
const SmallLightText = styled.span`
  font-family: ${({ theme }) => theme.font.sans};
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-size: ${({ theme }) => theme.font.size.xs};
  line-height: ${({ theme }) => theme.font.lineHeight.md};
  color: ${({ theme }) => theme.color.token.text.default};
`;

const dateLabelText = "일자";

const inputField = {
  type: "date",
  id: "RegDate",
  name: "RegDate",
  minDate: "1800-01-01",
  maxDate: "4000-01-01",
};

export default function DateInput({ value, onChange }) {
  const { minDate, maxDate, ...inputProps } = inputField;
  return (
    <RedDateBox>
      <SmallLightText>{dateLabelText}</SmallLightText>
      <InputField
        {...inputProps}
        value={value}
        min={minDate}
        max={maxDate}
        onChange={(e) => onChange(e.target.value)}
      />
    </RedDateBox>
  );
}
