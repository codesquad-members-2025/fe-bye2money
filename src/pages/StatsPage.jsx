import { useOutletContext } from 'react-router-dom';

function StatsPage() {
  const { records } = useOutletContext();

  return <div>통계 달력 페이지입니다. 내역 개수는 {records.length}</div>;
}

export default StatsPage;
