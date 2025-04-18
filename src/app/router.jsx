import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import getYearMonth from '../shared/utils/getYearMonth';

import HomePage from '../pages/HomePage';
import CalendarPage from '../pages/CalendarPage';
import StatsPage from '../pages/StatsPage';
import NotFoundPage from '../pages/NotFoundPage';
import App from './App';

function AppRouter() {
  const { year, month } = getYearMonth(new Date());

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={`/${year}/${month}/home`} />} />

        <Route path="/:year/:month" element={<App />}>
          <Route path="home" element={<HomePage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="stats" element={<StatsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
