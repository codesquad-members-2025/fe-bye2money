import styled from "styled-components";
import classificationHook from "./ClassificationHook";
import CategorySelectButton from "../CategorySelect/CategorySelectButton";
import OptionList from "./OptionList";

const OptionWrapper = styled.div`
  position: relative; // 기준이 되는 요소
`;

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
      {categoryActivate && (
        <OptionList options={categories} onSelectOption={onSelectOption} />
      )}
    </OptionWrapper>
  );
}
