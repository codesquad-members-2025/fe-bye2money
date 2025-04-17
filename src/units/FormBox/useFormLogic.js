// useFormLogic.js
import { useReducer } from "react";

export default function useFormLogic(
  currentMonth,
  dispatch,
  selectedTransactions = null
) {
  const [formState, formDispatch] = useReducer(
    reducer,
    getInitialArg(selectedTransactions)
  );

  const isValid = () => {
    // 유효성 검사 로직
  };

  const handleSubmit = async () => {
    if (!isValid()) return;
    const currentInputMonth = getCurrentMonth(formState.regDate);

    const response = await postToServer(formData);
    if (response.ok && currentMonth === currentInputMonth) {
      dispatch({ type: "REGISTER", payload: formData });
    }
  };

  return {
    formState,
    formDispatch,
    handleSubmit,
    isValid,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "PUT_REGDATE": {
      return { ...state, regDate: action.regDate };
    }
    case "PUT_TYPE": {
      return { ...state, type: action.type };
    }
    case "PUT_AMOUNT": {
      return { ...state, amount: action.amount };
    }
    case "PUT_DESCRIPTION": {
      state.description = action.description;
    }
    case "PUT_METHOD": {
      state.method = action.method;
    }
    case "PUT_CLASSIFICATION": {
      state.classification = action.classification;
    }
  }
}

function getInitialArg(selectedTransactions = null) {
  let initialArg = {
    id: "",
    month: "",
    regDate: getToday(),
    type: "earning",
    amount: "",
    description: "",
    method: "",
    classification: "",
  };

  if (selectedTransactions) {
    initialArg = selectedTransactions;
  }
  return initialArg;
}

function getToday() {
  return new Date().toISOString().split("T")[0]; // "YYYY-MM-DD"
}

function getCurrentMonth(dateStr) {
  const dateObj = new Date(dateStr);
  const month = dateObj.getMonth() + 1;
  return month;
}
