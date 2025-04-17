import styled from "styled-components";
import useFormLogic from "./useFormLogic";
import DateInput from "../../core/inputs/DateInput";
import TypeToggle from "../../core/inputs/TypeToggle";
import AmountInput from "../../core/inputs/AmountInput";

export default function FormBox(currentMonth, dispatch, selectedTransactions) {
  const { formState, formDispatch, handleSubmit, isValid } = useFormLogic(
    currentMonth,
    dispatch,
    selectedTransactions
  );
  return (
    <form>
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
    </form>
  );
}
