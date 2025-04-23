// src/app/router.tsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "../features/layout/Layout";
import EntriesPage from "../features/entries/EntriesPage";
import CalendarPage from "../features/calendar/CalendarPage";
import StatsPage from "../features/stats/StatsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // "/"일 때 기본으로 보여줄 페이지
        element: <EntriesPage />,
      },
      {
        path: "calendar",
        element: <CalendarPage />,
      },
      {
        path: "statistics",
        element: <StatsPage />,
      },
    ],
  },
]);
