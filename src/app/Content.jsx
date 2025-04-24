import styled from '@emotion/styled';
import { useParams, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import useFetchRecordsByDate from '../shared/hooks/useFetchRecordsByDate';
import useRecordState from '../shared/hooks/useRecordState';

const ContentWrapper = styled.main`
  flex: 1;
`;

export default function Content() {
  const { year, month } = useParams();
  const { data: fetchedData, loading } = useFetchRecordsByDate(year, month);
  const { records, dispatch } = useRecordState(fetchedData);

  useEffect(() => {
    if (!loading && fetchedData) {
      dispatch({ type: 'SET_RECORDS', payload: fetchedData });
    }
  }, [loading, fetchedData]);

  return (
    <ContentWrapper>
      {loading ? (
        <div>loading...</div>
      ) : (
        <Outlet context={{ records, dispatch }} />
      )}
    </ContentWrapper>
  );
}
