import styled from "styled-components";
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
const RegDateInput = styled.input`
  font-family: ${({ theme }) => theme.font.sans};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  font-size: ${({ theme }) => theme.font.size.xs};
  line-height: ${({ theme }) => theme.font.lineHeight.sm};
  color: ${({ theme }) => theme.color.token.text.default};
`;

const dateLabelText = "일자";

export default function DateInput({ value, onChange }) {
  return (
    <RedDateBox>
      <SmallLightText>{dateLabelText}</SmallLightText>
      <RegDateInput
        type="date"
        id="RegDate"
        name="RegDate"
        value={value}
        min="1800-01-01"
        max="4000-01-01"
        onChange={(e) => onChange(e.target.value)}
      />
    </RedDateBox>
  );
}
