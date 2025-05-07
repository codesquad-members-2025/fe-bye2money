// src/hooks/useYearMonth.ts
import { useState, useEffect, useCallback } from "react";

interface UseYearMonthProps {
  /** 초기 날짜 (없으면 오늘) */
  initialDate?: Date;
  /**
   * 년-월이 바뀔 때마다 호출되는 콜백.
   */
  onChange: (year: number, month: number) => void;
}

export function useYearMonth({
  initialDate = new Date(),
  onChange,
}: UseYearMonthProps) {
  // 1) state: 년, 월 (1~12)
  const [year, setYear] = useState(initialDate.getFullYear());
  const [month, setMonth] = useState(initialDate.getMonth() + 1);

  // 2) 이전 달로 이동
  const prevMonth = useCallback(() => {
    setMonth((m) => {
      if (m === 1) {
        setYear((y) => y - 1);
        return 12;
      }
      return m - 1;
    });
  }, []);

  // 3) 다음 달로 이동
  const nextMonth = useCallback(() => {
    setMonth((m) => {
      if (m === 12) {
        setYear((y) => y + 1);
        return 1;
      }
      return m + 1;
    });
  }, []);

  // 4) 년 or 월이 바뀔 때마다 onChange 호출
  useEffect(() => {
    onChange(year, month);
  }, [year, month, onChange]);

  return { year, month, prevMonth, nextMonth };
}
