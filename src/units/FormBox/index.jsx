import styled from "styled-components";
import useFormLogic from "./useFormLogic";
import DateInput from "../../core/inputs/DateInput";
import TypeToggle from "../../core/inputs/TypeToggle";

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
        value={formState.type}
        onClick={(type) => formDispatch({ type: "PUT_TYPE", type: type })}
      />
    </form>
  );
}
