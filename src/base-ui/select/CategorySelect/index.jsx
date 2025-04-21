import { useState, useReducer } from "react";
import styled from "styled-components";
import CategorySelectButton from "./CategorySelectButton";
import OptionList from "./OptionList";
import methodReducer from "./methodReducer";

const OptionWrapper = styled.div`
  position: relative; // 기준이 되는 요소
`;

export default function CategorySelect({ method, onSelectOption }) {
  const [categoryActivate, setCategoryActivate] = useState(false);
  const [methods, dispatch] = useReducer(methodReducer, [
    "토스페이",
    "카카오페이",
  ]);

  return (
    <OptionWrapper>
      <CategorySelectButton
        onClick={() => {
          console.log("👆 버튼 클릭됨");
          setCategoryActivate((prev) => !prev);
        }}
        method={method}
      />
      {categoryActivate && (
        <OptionList
          options={methods}
          onSelectOption={onSelectOption}
          onAdd={(method) => dispatch({ type: "ADD", method: method })}
          onDelete={(method) => dispatch({ type: "DELETE", method: method })}
        />
      )}
    </OptionWrapper>
  );
}
