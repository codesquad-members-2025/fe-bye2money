import styled from "styled-components";
import useFormLogic from "./useFormLogic";
import DateInput from "../../base-ui/inputs/DateInput";
import TypeToggle from "../../base-ui/inputs/TypeToggle";
import AmountInput from "../../base-ui/inputs/AmountInput";
import DescriptionInput from "../../base-ui/inputs/DescriptionInput";
import PaymentSelect from "../../base-ui/select/PaymentSelect";
import ClassificationSelect from "../../base-ui/select/ClassificationSelect";
import SubmitButton from "../../base-ui/buttons/SubmitButton";
import { useEffect } from "react";
import DateForm from "./DateForm";
import ValueForm from "./ValueForm";

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.color.token.surface.default};
  border: 1px solid ${({ theme }) => theme.color.token.text.default};
  justify-content: space-between;
  width: 894px;
  height: 76px;
`;

const Divider = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.color.token.border.default};
`;
export default function FormBox({
  dispatch,
  selectedTransactions,
  setSelectedTransactions,
}) {
  const { formState, formDispatch, handleSubmit, isValid } = useFormLogic(
    dispatch,
    selectedTransactions,
    setSelectedTransactions
  );

  useEffect(() => {
    if (selectedTransactions) {
      formDispatch({ type: "SET_ALL", payload: selectedTransactions });
    }
  }, [selectedTransactions]);
  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      <DateForm
        value={formState.regDate}
        onChange={(val) =>
          formDispatch({
            type: "SET_REGDATE",
            regDate: val.regDate,
            year: val.year,
            month: val.month,
            day: val.day,
          })
        }
      />
      <Divider />
      <ValueForm
        currentType={formState.currentType}
        onClick={(type) =>
          formDispatch({ type: "SET_CURRENTTYPE", currentType: type })
        }
        amount={formState.amount}
        onChange={(amount) => {
          formDispatch({ type: "SET_AMOUNT", amount });
        }}
      />
      <Divider />
      <DescriptionInput
        description={formState.description}
        onChange={(val) =>
          formDispatch({ type: "SET_DESCRIPTION", description: val })
        }
      />
      <Divider />
      <PaymentSelect
        method={formState.method}
        onSelectOption={(method) =>
          formDispatch({ type: "SET_METHOD", method: method })
        }
      />
      <Divider />
      <ClassificationSelect
        classification={formState.classification}
        transactionType={formState.currentType}
        onSelectOption={(option) =>
          formDispatch({ type: "SET_CLASSIFICATION", classification: option })
        }
      />
      <SubmitButton isValid={isValid} />
    </StyledForm>
  );
}
