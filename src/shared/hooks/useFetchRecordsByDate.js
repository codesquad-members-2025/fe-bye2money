import { useState, useEffect, useCallback } from 'react';
import { getRecords } from '../api/recordsApi';

const useFetchRecordsByDate = (year, month) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (!year || !month) return;

    setLoading(true);
    setError(null);
    setData([]);

    try {
      const result = await getRecords({ year, month });
      setData(result);
    } catch (err) {
      setError(err.message || '데이터를 불러오는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  }, [year, month]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetchRecordsByDate;
