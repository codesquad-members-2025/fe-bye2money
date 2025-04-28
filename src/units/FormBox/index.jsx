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

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 16px;
  background-color: ${({ theme }) => theme.color.token.surface.default};
  border: 1px solid ${({ theme }) => theme.color.token.text.default};
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
    formDispatch({ type: "SET_ALL", payload: selectedTransactions });
  }, [selectedTransactions]);
  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      <DateInput
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
      <TypeToggle
        currentType={formState.currentType}
        onClick={(type) =>
          formDispatch({ type: "SET_CURRENTTYPE", currentType: type })
        }
      />
      <AmountInput
        amount={formState.amount}
        onChange={(amount) => {
          formDispatch({ type: "SET_AMOUNT", amount });
        }}
      />

      <DescriptionInput
        description={formState.description}
        onChange={(val) =>
          formDispatch({ type: "SET_DESCRIPTION", description: val })
        }
      />

      <PaymentSelect
        method={formState.method}
        onSelectOption={(method) =>
          formDispatch({ type: "SET_METHOD", method: method })
        }
      />

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
