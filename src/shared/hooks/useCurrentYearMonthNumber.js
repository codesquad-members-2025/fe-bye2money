import { useParams } from 'react-router-dom';

export default function useCurrentYearMonthNumber() {
  const { year, month } = useParams();

  return {
    currentYear: Number(year),
    currentMonth: Number(month),
  };
}
