import styled from "styled-components";
import LogoButton from "../../base-ui/buttons/LogoButton";
import PrevMonthButton from "../../base-ui/buttons/PrevMonthButton";
import NextMonthButton from "../../base-ui/buttons/NextMonthButton";
import MonthYearTitle from "../../base-ui/MonthYearTitle";
import ViewSelectButtons from "../../base-ui/buttons/ViewSelectButtons";
import goHome from "./goHome";
import useMonthParams from "./useMonthParams";

const BackgroundDiv = styled.div`
  width: 100%;
  height: 216px;
  padding-left: 297px;
  padding-right: 297px;
  background-color: ${({ theme }) => theme.color.pastel.jordyBlue};
  padding-top: 40px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderCenterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export default function Header() {
  const goHomeHandler = goHome();
  const { moveNextMonth, movePrevMonth, getCurrentDate } = useMonthParams();
  const currentDate = getCurrentDate();

  return (
    <BackgroundDiv>
      <HeaderWrapper>
        <LogoButton onClick={goHomeHandler} />
        <HeaderCenterWrapper>
          <PrevMonthButton onClick={movePrevMonth} />
          <MonthYearTitle {...currentDate} />
          <NextMonthButton onClick={moveNextMonth} />
        </HeaderCenterWrapper>
        <ViewSelectButtons />
      </HeaderWrapper>
    </BackgroundDiv>
  );
}
