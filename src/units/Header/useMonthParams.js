import { useSearchParams } from "react-router-dom";

//이렇게 되면 리렌더링은 언제 발생할까???
export default function useMonthParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const year = parseInt(searchParams.get("year")) || new Date().getFullYear();
  const month =
    parseInt(searchParams.get("month")) || new Date().getMonth() + 1;

  function moveNextMonth() {
    const next = new Date(year, month);
    const [nextYear, nextMonth] = [next.getFullYear(), next.getMonth() + 1];

    const newParams = new URLSearchParams(searchParams);
    newParams.set("year", nextYear);
    newParams.set("month", nextMonth);

    setSearchParams(newParams);
  }

  function movePrevMonth() {
    const prev = new Date(year, month - 2);
    const [prevYear, prevMonth] = [prev.getFullYear(), prev.getMonth() + 1];
    const newParams = new URLSearchParams(searchParams);
    newParams.set("year", prevYear);
    newParams.set("month", prevMonth);

    setSearchParams(newParams);
  }

  function getCurrentDate() {
    return { currentYear: year, currentMonth: month };
  }

  return { moveNextMonth, movePrevMonth, getCurrentDate };
}
