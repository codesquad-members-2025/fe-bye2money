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
  const [searchParams] = useSearchParams();
  const now = new Date();
  const currentYear = parseInt(searchParams.get("year")) || now.getFullYear();
  const currentMonth =
    parseInt(searchParams.get("month")) || now.getMonth() + 1;

  useEffect(() => {
    async function loadData() {
      const res = await fetch(
        `http://localhost:3001/transactions?year=${currentYear}&month=${currentMonth}`
      );
      if (res.ok) {
        const allData = await res.json();
        mainPageDispatch({ type: "GET_ALL_TRANSACTION", payload: allData });
      } else {
        alert("제이슨 서버 패치 오류!"); //나중에 오류 컴포넌트로 대체
      }
    }

    loadData();
  }, [currentMonth]);
  return (
    <MainContainer>
      <Header />
      <Outlet context={{ mainPageState, mainPageDispatch }} />
    </MainContainer>
  );
}
