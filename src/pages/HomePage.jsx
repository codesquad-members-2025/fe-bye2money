import { useOutletContext } from 'react-router-dom';

function HomePage() {
  const { records } = useOutletContext();

  return <div>기본 페이지입니다. 내역 개수는 {records.length}</div>;
}

export default HomePage;
