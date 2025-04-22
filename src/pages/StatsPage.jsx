import { useOutletContext } from 'react-router-dom';

function StatsPage() {
  const { data } = useOutletContext();

  return (
    <div>
      통계 페이지입니다. 날짜는 {data.year}.{data.month}
    </div>
  );
}

export default StatsPage;
