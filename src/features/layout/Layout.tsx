import styled from "@emotion/styled";
import LogoButton from "./components/Header/LogoButton";
import MonthNavigator from "./components/Header/MonthNavigator";
import ViewTabs from "./components/Header/ViewTabs";

const Container = styled.div`
  width: 100vw;
  height: 2.5rem; /* Tailwind h-10 equivalent */
  background: #c5e0eb;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem; /* px-4 equivalent */
`;

const Layout = () => {
  return (
    <Container>
      <LogoButton />
      <MonthNavigator />
      <ViewTabs />
    </Container>
  );
};

export default Layout;
