import styled from "styled-components";
import classificationHook from "./ClassificationHook";
import CategorySelectButton from "../CategorySelect/CategorySelectButton";
import OptionList from "./OptionList";

const OptionWrapper = styled.div``;

export default function ClassificationSelect({
  classification,
  transactionType,
  onSelectOption,
}) {
  const { categoryActivate, setCategoryActivate, categories } =
    classificationHook(transactionType);

  return (
    <OptionWrapper>
      <CategorySelectButton
        onClick={() => {
          setCategoryActivate((prev) => !prev);
        }}
        input={classification}
      />

      <OptionList
        options={categories}
        onSelectOption={(option) => {
          onSelectOption(option);
          setCategoryActivate((prev) => !prev);
        }}
        categoryActivate={categoryActivate}
      />
    </OptionWrapper>
  );
}
