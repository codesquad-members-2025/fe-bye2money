import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import getYearMonth from '../shared/utils/getYearMonth';
import buildUrlWithPage from '../shared/utils/buildUrlWithPage';

import HomePage from '../pages/HomePage';
import CalendarPage from '../pages/CalendarPage';
import StatsPage from '../pages/StatsPage';
import NotFoundPage from '../pages/NotFoundPage';
import App from './App';

function AppRouter() {
  const { year, month } = getYearMonth(new Date());
  const initialUrl = buildUrlWithPage(year, month, 'home');

  console.log(initialUrl);

  return (
    <Router>
      <Routes>
        {/* 초기 페이지 랜더링시*/}
        <Route path="/" element={<Navigate to={initialUrl} replace />} />

        {/* 그 이후에 App 진입 시 라우팅 */}
        <Route path="/" element={<App />}>
          <Route path="home/:year/:month" element={<HomePage />} />
          <Route path="calendar/:year/:month" element={<CalendarPage />} />
          <Route path="stats/:year/:month" element={<StatsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
