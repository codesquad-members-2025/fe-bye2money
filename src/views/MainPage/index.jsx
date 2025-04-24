//여기서 전체 데이터를 다뤄야함.
import Header from "../../units/Header";
import styled from "styled-components";
import { Outlet, useSearchParams } from "react-router-dom";
import { useReducer, useEffect } from "react";
import mainPageReducer from "./mainPageReducer";

const MainContainer = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  top: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 100vw;
  max-width: 100vw;
`;

export default function MainPage() {
  const [mainPageState, mainPageDispatch] = useReducer(mainPageReducer, []);
  const [searchParams, setSearchParams] = useSearchParams();
  const now = new Date();
  const currentYear = parseInt(searchParams.get("year")) || now.getFullYear();
  const currentMonth =
    parseInt(searchParams.get("month")) || now.getMonth() + 1;
  const currentTypeArray = searchParams.getAll("currentType");

  // 1. 쿼리 파람 초기화 useEffect
  useEffect(() => {
    if (searchParams.getAll("currentType").length === 0) {
      const newParams = new URLSearchParams(searchParams);
      newParams.append("currentType", "earning");
      newParams.append("currentType", "expense");
      setSearchParams(newParams);
    }
  }, []);

  useEffect(() => {
    async function loadData() {
      if (currentTypeArray.length === 0) {
        // 조건이 없으면 요청하지 않고 빈 데이터로 처리
        mainPageDispatch({ type: "GET_ALL_TRANSACTION", payload: [] });
        return;
      }

      const typeQuery = currentTypeArray
        .map((type) => `currentType=${type}`)
        .join("&");
      const url = `http://localhost:3001/transactions?year=${currentYear}&month=${currentMonth}&${typeQuery}`;

      const res = await fetch(url);
      if (res.ok) {
        const allData = await res.json();
        mainPageDispatch({ type: "GET_ALL_TRANSACTION", payload: allData });
      } else {
        alert("제이슨 서버 패치 오류!");
      }
    }

    loadData();
  }, [currentMonth, currentTypeArray.join()]);
  return (
    <MainContainer>
      <Header />
      <Outlet context={{ mainPageState, mainPageDispatch }} />
    </MainContainer>
  );
}
