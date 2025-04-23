import { useReducer, useEffect } from 'react';
import useFetchRecordsByDate from './useFetchRecordsByDate';
import recordReducer from '../reducers/recordReducer';

export default function useRecordState(year, month) {
  const { data, loading, error } = useFetchRecordsByDate(year, month);
  const [records, dispatch] = useReducer(recordReducer, []);

  useEffect(() => {
    if (data?.records.length > 0) {
      dispatch({ type: 'SET_RECORDS', payload: data.records });
    }
  }, [data]);

  return { records, dispatch, loading, error };
}
