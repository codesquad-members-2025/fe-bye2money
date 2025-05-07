import styled from "@emotion/styled";
import LogoButton from "./components/Header/LogoButton";
import MonthNavigator from "./components/Header/MonthNavigator";
import ViewTabs from "./components/Header/ViewTabs";

const Layout = () => {
  return (
    <Header>
      <LayoutContainer>
        <LogoButton />
        <MonthNavigator />
        <ViewTabs />
      </LayoutContainer>
    </Header>
  );
};

export default Layout;

const Header = styled.header`
  /* 뷰포트 기준으로 고정 */
  position: fixed;
  top: 0;
  left: 0;
  /* 부모(보통 body 또는 #root) 너비 100% 만큼 차지
  – 100vw 대신 100%를 사용해 스크롤바 오버플로우 문제 방지 */
  width: 100%;
  /* 다른 콘텐츠보다 위에 보이도록 z-index 설정 */
  /* z-index: 1000; */
  /* 이와 다른 css 속성 */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13.5rem;
  background: ${({ theme }) => theme.colors.colorchip[80]};
  padding: 0 1rem;
`;

const LayoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 52.875rem;
  height: 7rem;
  margin: 2.5rem 0 3.75rem 0;
`;
