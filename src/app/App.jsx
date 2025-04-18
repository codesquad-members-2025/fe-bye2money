import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import useFetchRecordsByDate from '../shared/hooks/useFetchRecordsByDate';

function App() {
  const { year, month } = useParams();
  const { data, loading } = useFetchRecordsByDate(year, month);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <Outlet context={{ data }} />;
}

export default App;
