import { Routes, Route } from "react-router-dom";
import MainPage from "../views/MainPage";
import LogView from "../views/LogView";
import CalendarView from "../views/CalendarView";
import StatisticsView from "../views/StatisticsView";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<LogView />} />
        <Route path="calendar" element={<CalendarView />} />
        <Route path="statisticsView" element={<StatisticsView />} />
      </Route>
    </Routes>
  );
}
