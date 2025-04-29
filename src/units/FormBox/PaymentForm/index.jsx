import styled from "styled-components";
import DefaultContainer from "../DefaultContainer";
import DefaultLabel from "../../../base-ui/inputs/Label/DefualtLabel";
import PaymentSelect from "../../../base-ui/select/PaymentSelect";

const Container = styled(DefaultContainer)`
  width: 104px;
`;

export default function Paymentform({ method, onSelectOption }) {
  const labelText = "결제수단";
  return (
    <Container>
      <DefaultLabel>{labelText}</DefaultLabel>
      <PaymentSelect method={method} onSelectOption={onSelectOption} />
    </Container>
  );
}
