import { useOutletContext } from 'react-router-dom';

function CalendarPage() {
  const { records } = useOutletContext();

  return <div>달력 페이지입니다. 내역 개수는 {records.length}</div>;
}

export default CalendarPage;
