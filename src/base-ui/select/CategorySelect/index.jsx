import { useState, useReducer } from "react";
import CategorySelectButton from "./CategorySelectButton";
import OptionList from "./OptionList";
import methodReducer from "./methodReducer";

export default function CategorySelect({ method, onSelectOption }) {
  const [categoryActivate, setCategoryActivate] = useState(false);
  const [methods, dispatch] = useReducer(methodReducer, []);

  return (
    <>
      <CategorySelectButton
        onClick={() => setCategoryActivate((prev) => !prev)}
        method={method}
      />
      {categoryActivate ? (
        <OptionList
          options={methods}
          onSelectOption={onSelectOption}
          onAdd={(method) => dispatch({ type: "ADD", method: method })}
          onDelete={(method) => dispatch({ type: "DELETE", method: method })}
        />
      ) : null}
    </>
  );
}
