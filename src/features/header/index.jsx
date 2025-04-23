import styled from '@emotion/styled';
import { useParams, useLocation } from 'react-router-dom';

import NoteIcon from '../../assets/icons/doc.svg?react';
import CalendarIcon from '../../assets/icons/calendar.svg?react';
import StatsIcon from '../../assets/icons/chart.svg?react';

import useMonthNavigator from './hooks/useMonthNavigator';
import usePageNavigator from './hooks/usePageNavigator';
import { getActiveTabFromPath } from '../../shared/utils/getActiveTabFromPath';
import LogoSection from './components/LogoSection';
import MonthNavigator from './components/MonthNavigator';
import TabNavigation from './components/TabNavigation';

const HeaderWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 216px;
  background-color: ${({ theme }) => theme.colors.pastelJordyBlue};
`;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 175px;
  max-width: 1024px;
  margin: 40px auto 64px;
`;

function Header() {
  const { pathname } = useLocation();
  const { year, month } = useParams();
  const { goToNextMonth, goToPreviousMonth } = useMonthNavigator();
  const { navigateTo } = usePageNavigator();

  const activeTab = getActiveTabFromPath(pathname);

  const tabItems = [
    { key: 'home', icon: NoteIcon, path: 'home' },
    { key: 'calendar', icon: CalendarIcon, path: 'calendar' },
    { key: 'stats', icon: StatsIcon, path: 'stats' },
  ];

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoSection onLogoClick={() => navigateTo('home')} />
        <MonthNavigator
          year={year}
          month={month}
          onPrevMonth={goToPreviousMonth}
          onNextMonth={goToNextMonth}
        />
        <TabNavigation
          activeTab={activeTab}
          tabs={tabItems}
          onTabClick={(path) => navigateTo(path)}
        />
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
