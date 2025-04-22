import { useReducer, useState, useEffect } from "react";
import { normalizeDate } from "../../base-ui/inputs/DateInput/inputDateHandler";

export default function useFormLogic(
  currentMonth,
  dispatch,
  selectedTransactions = null
) {
  const [formState, formDispatch] = useReducer(
    reducer,
    getInitialArg(selectedTransactions)
  );
  const [isValid, setIsValid] = useState(false);

  const getIsValid = () => {
    if (!formState.regDate || formState.regDate.length !== 10) {
      return { ok: false, reason: "등록 날짜를 입력해주세요" };
    } else if (!formState.amount) {
      return { ok: false, reason: "금액을 입력해주세요" };
    } else if (!formState.description) {
      return { ok: false, reason: "내용을 입력해주세요" };
    } else if (!formState.method) {
      return { ok: false, reason: "결제수단을 선택해주세요" };
    } else if (!formState.classification) {
      return { ok: false, reason: "분류를 선택해주세요" };
    } else {
      return { ok: true };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValid) return;
    const currentInputMonth = getCurrentMonth(formState.regDate);

    const response = await postToServer(formData);
    if (response.ok && currentMonth === currentInputMonth) {
      dispatch({ type: "REGISTER", payload: formData });
    }
  };

  useEffect(() => {
    setIsValid(getIsValid().ok);
  }, [formState]);

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
      return {
        ...state,
        regDate: action.regDate,
        year: action.year,
        month: action.month,
        day: action.day,
      };
    }
    case "SET_CURRENTTYPE": {
      return { ...state, currentType: action.currentType };
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
      return { ...state, classification: action.classification };
    }
  }
}

function getInitialArg(selectedTransactions = null) {
  let initialArg = {
    ...normalizeDate(getToday()),
    id: "",
    regDate: getToday(),
    currentType: "expense",
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
  const date = new Date().toISOString().split("T")[0]; // "YYYY-MM-DD"
  return date.replace(/-/g, ".");
}

function getCurrentMonth(dateStr) {
  const dateObj = new Date(dateStr);
  const month = dateObj.getMonth() + 1;
  return month;
}
