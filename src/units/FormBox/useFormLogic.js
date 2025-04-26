import { useReducer, useState, useEffect } from "react";
import { normalizeDate } from "../../base-ui/inputs/DateInput/inputDateHandler";
import generateUUID from "./idGenerator";
import { useSearchParams } from "react-router-dom";

//reducer 함수 분리 필요! -> 메인페이지와 연결되면 리팩토링 시작
export default function useFormLogic(
  dispatch,
  selectedTransactions = null,
  setSelectedTransactions
) {
  const [searchParams] = useSearchParams();
  const [formState, formDispatch] = useReducer(reducer, getInitialArg());
  const [isValid, setIsValid] = useState(false);

  const now = new Date();
  const currentYear = parseInt(searchParams.get("year")) || now.getFullYear();
  const currentMonth =
    parseInt(searchParams.get("month")) || now.getMonth() + 1;

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
    const isEdit = !!selectedTransactions;
    if (!isValid) return;
    let res;
    //수정 할 경우
    if (isEdit) {
      if (!formState.id) {
        console.error("수정할 항목의 ID가 없습니다.");
        return;
      }
      res = await fetch(`http://localhost:3001/transactions/${formState.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });
      if (!res.ok) {
        alert("요청에 실패했습니다. 다시 시도해주세요.");
      }
      if (res.ok) {
        const isSamePage =
          currentMonth === formState.month && currentYear === formState.year
            ? true
            : false;
        dispatch({
          type: "EDIT_TRANSACTION",
          payload: formState,
          isSamePage: isSamePage,
        });
        formDispatch({ type: "SET_ALL", payload: getInitialArg() });
      }
    } else {
      const newFormState = { ...formState, id: generateUUID() };
      res = await fetch(`http://localhost:3001/transactions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFormState),
      });
      if (!res.ok) {
        alert("요청에 실패했습니다. 다시 시도해주세요.");
      }
      if (
        res.ok &&
        currentMonth === formState.month &&
        currentYear === formState.year
      ) {
        //메인페이지의 디스패치에게 데이터 전달-> 서버와 웹 동기화 작업
        dispatch({ type: "ADD_TRANSACTION", payload: newFormState });
      }
      formDispatch({ type: "SET_ALL", payload: getInitialArg() });
    }
    setSelectedTransactions(null);
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
    case "SET_ID": {
      return { ...state, id: action.id };
    }
    case "SET_ALL": {
      return { ...action.payload };
    }
  }
}

function getInitialArg() {
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
