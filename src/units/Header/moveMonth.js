//함수 호출시 현재 url의 쿼리 파람스를 읽어와서 수정하는 역할을 한다.
import { useSearchParams } from "react-router-dom";

export function moveNextMonth() {
  const [searchParams, setSearchParams] = useSearchParams();
  const year = parseInt(searchParams.get("year")) || new Date().getFullYear();
  const month =
    parseInt(searchParams.get("month")) || new Date().getMonth() + 1;

  const next = new Date(year, month); // month is 1-based; this works correctly for next month
  const [nextYear, nextMonth] = [next.getFullYear(), next.getMonth() + 1];

  return () => setSearchParams({ year: nextYear, month: nextMonth });
}

export function movePrevMonth() {
  const [searchParams, setSearchParams] = useSearchParams();
  const year = parseInt(searchParams.get("year")) || new Date().getFullYear();
  const month =
    parseInt(searchParams.get("month")) || new Date().getMonth() + 1;

  const prev = new Date(year, month - 2); // move back one month, zero-indexed
  const [prevYear, prevMonth] = [prev.getFullYear(), prev.getMonth() + 1];

  return () => setSearchParams({ year: prevYear, month: prevMonth });
}
