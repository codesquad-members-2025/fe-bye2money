import DefaultContainer from "../DefaultContainer";
import TypeToggle from "../../../base-ui/inputs/TypeToggle";
import AmountInput from "../../../base-ui/inputs/AmountInput";
import DefaultLabel from "../../../base-ui/inputs/Label/DefualtLabel";
import styled from "styled-components";

const Body = styled.div`
  display: flex;
  gap: 8px;
`;

export default function ValueForm({ currentType, onClick, amount, onChange }) {
  const labelText = "금액";
  return (
    <DefaultContainer>
      <DefaultLabel>{labelText}</DefaultLabel>
      <Body>
        <TypeToggle currentType={currentType} onClick={onClick} />
        <AmountInput amount={amount} onChange={onChange} />
      </Body>
    </DefaultContainer>
  );
}
