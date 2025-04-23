import styled from '@emotion/styled';
import { useParams, Outlet } from 'react-router-dom';
import useRecordState from '../shared/hooks/useRecordState';
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
  const { records, dispatch, loading, error } = useRecordState(year, month);

  return (
    <LayoutWrapper>
      <Header />
      <Content>
        {loading ? (
          <div>loading...</div>
        ) : (
          <Outlet context={{ records, dispatch }} />
        )}
      </Content>
    </LayoutWrapper>
  );
}

export default App;
