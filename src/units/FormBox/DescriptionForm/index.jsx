import DefaultContainer from "../DefaultContainer";
import DefaultLabel from "../../../base-ui/inputs/Label/DefualtLabel";
import DescriptionInput from "../../../base-ui/inputs/DescriptionInput";
import DescriptionCountingLabel from "../../../base-ui/inputs/Label/DescriptionCountingLabel";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default function DescriptionForm({ description, onChange }) {
  const labelText = "내용";
  return (
    <DefaultContainer>
      <Header>
        <DefaultLabel>{labelText}</DefaultLabel>
        <DescriptionCountingLabel currentCounting={description.length} />
      </Header>
      <DescriptionInput description={description} onChange={onChange} />
    </DefaultContainer>
  );
}
