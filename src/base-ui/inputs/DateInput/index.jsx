import styled from "styled-components";
import { InputField } from "../InputField";
import { handleChange } from "./inputDateHandler";

const RedDateBox = styled.div`
  display: flex;
  gap: 4px;
`;
// const SmallLightText = styled.span`
//   font-family: ${({ theme }) => theme.font.sans};
//   font-weight: ${({ theme }) => theme.font.weight.light};
//   font-size: ${({ theme }) => theme.font.size.xs};
//   line-height: ${({ theme }) => theme.font.lineHeight.md};
//   color: ${({ theme }) => theme.color.token.text.default};
// `;

export default function DateInput({ value, onChange }) {
  return (
    <RedDateBox>
      <InputField
        placeholder="YYYY.MM.DD"
        value={value}
        onChange={(e) => handleChange(e, onChange)}
        required
      />
    </RedDateBox>
  );
}
