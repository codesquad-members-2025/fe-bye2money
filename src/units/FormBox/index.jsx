import styled from "styled-components";
import useFormLogic from "./useFormLogic";
import DateInput from "../../base-ui/inputs/DateInput";
import TypeToggle from "../../base-ui/inputs/TypeToggle";
import AmountInput from "../../base-ui/inputs/AmountInput";
import DescriptionInput from "../../base-ui/inputs/DescriptionInput";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

export default function FormBox(currentMonth, dispatch, selectedTransactions) {
  const { formState, formDispatch, handleSubmit, isValid } = useFormLogic(
    currentMonth,
    dispatch,
    selectedTransactions
  );
  return (
    <StyledForm>
      <DateInput
        value={formState.regDate}
        onChange={(val) => formDispatch({ type: "PUT_REGDATE", regDate: val })}
      />
      <TypeToggle
        type={formState.type}
        onClick={(type) => formDispatch({ type: "PUT_TYPE", type: type })}
      />
      <AmountInput
        amount={formState.amount}
        onChange={(amount) => {
          formDispatch({ type: "PUT_AMOUNT", regDate: amount });
        }}
      />

      <DescriptionInput
        description={formState.description}
        onChange={(val) =>
          formDispatch({ type: "PUT_DESCRIPTION", description: val })
        }
      />
    </StyledForm>
  );
}
