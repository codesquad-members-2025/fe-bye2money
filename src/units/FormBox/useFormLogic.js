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
    case "SET_REGDATE": {
      return { ...state, regDate: action.regDate };
    }
    case "SET_TYPE": {
      return { ...state, type: action.type };
    }
    case "SET_AMOUNT": {
      return { ...state, amount: action.amount };
    }
    case "SET_DESCRIPTION": {
      return { ...state, description: action.description };
    }
    case "SET_METHOD": {
      return { ...state, method: action.method };
    }
    case "SET_CLASSIFICATION": {
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

  //로그 편집할때는 기존의 선택한 로그데이터가 초기데이터로 초기화
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
