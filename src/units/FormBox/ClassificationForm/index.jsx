import styled from "styled-components";
import DefaultContainer from "../DefaultContainer";
import DefaultLabel from "../../../base-ui/inputs/Label/DefualtLabel";
import ClassificationSelect from "../../../base-ui/select/ClassificationSelect";

const Container = styled(DefaultContainer)`
  width: 104px;
`;

export default function ClassificationForm({
  classification,
  transactionType,
  onSelectOption,
}) {
  const labelText = "분류";
  return (
    <Container>
      <DefaultLabel>{labelText}</DefaultLabel>
      <ClassificationSelect
        classification={classification}
        transactionType={transactionType}
        onSelectOption={onSelectOption}
      />
    </Container>
  );
}
