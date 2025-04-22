import { useOutletContext } from 'react-router-dom';

function CalendarPage() {
  const { data } = useOutletContext();

  return (
    <div>
      달력 페이지입니다. 날짜는 {data.year}.{data.month}
    </div>
  );
}

export default CalendarPage;
