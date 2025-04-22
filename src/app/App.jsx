import styled from '@emotion/styled';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import useFetchRecordsByDate from '../shared/hooks/useFetchRecordsByDate';
import { getActiveTabFromPath } from '../shared/utils/getActiveTabFromPath';
import Header from '../features/header';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
`;

function App() {
  const { year, month } = useParams();
  const { data, loading } = useFetchRecordsByDate(year, month);

  const { pathname } = useLocation();
  const activeTab = getActiveTabFromPath(pathname);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <LayoutWrapper>
      <Header year={data.year} month={data.month} activeTab={activeTab} />
      <Content>
        <Outlet context={{ data }} />
      </Content>
    </LayoutWrapper>
  );
}

export default App;
