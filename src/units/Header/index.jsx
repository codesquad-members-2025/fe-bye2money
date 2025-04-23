import styled from "styled-components";
import LogoButton from "../../base-ui/buttons/LogoButton";
import PrevMonthButton from "../../base-ui/buttons/PrevMonthButton";
import NextMonthButton from "../../base-ui/buttons/NextMonthButton";
import MonthYearTitle from "../../base-ui/MonthYearTitle";
import ViewSelectButtons from "../../base-ui/buttons/ViewSelectButtons";
import goHome from "./goHome";

const BackgroundDiv = styled.div`
  height: 216px;
  background-color: ${({ theme }) => theme.color.pastel.jordyBlue};
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderCenterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Header() {
  return (
    <BackgroundDiv>
      <HeaderWrapper>
        <LogoButton onClick={goHome} />
        <HeaderCenterWrapper>
          <PrevMonthButton />
          <MonthYearTitle />
          <NextMonthButton />
        </HeaderCenterWrapper>
        <ViewSelectButtons />
      </HeaderWrapper>
    </BackgroundDiv>
  );
}
