import styled from "styled-components";
import { InputField } from "../InputField";
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
  const handleChange = (e) => {
    const onlyNums = e.target.value.replace(/\D/g, "").slice(0, 8); // 숫자만, 최대 8자리
    let formatted = onlyNums;

    if (onlyNums.length > 4 && onlyNums.length <= 6) {
      formatted = `${onlyNums.slice(0, 4)}.${onlyNums.slice(4)}`;
    } else if (onlyNums.length > 6) {
      formatted = `${onlyNums.slice(0, 4)}.${onlyNums.slice(
        4,
        6
      )}.${onlyNums.slice(6)}`;
    }

    onChange(formatted);
  };

  return (
    <RedDateBox>
      <InputField
        placeholder="YYYY.MM.DD"
        value={value}
        onChange={(e) => handleChange(e)}
      />
    </RedDateBox>
  );
}
