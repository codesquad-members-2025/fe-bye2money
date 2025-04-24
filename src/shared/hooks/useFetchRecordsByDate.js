import { useState, useEffect } from 'react';

const useFetchRecordsByDate = (year, month) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (year, month) => {
    try {
      // TODO 실제 API url로 변경
      const response = await fetch(`/mockData/${year}/${month}.json`);
      if (!response.ok) {
        throw new Error('Data file not found');
      }
      const result = await response.json();
      setData(result.records);
    } catch (err) {
      setError(err.message); //TODO 메세지에 따라 외부에서 사용자를 위한 에러핸들링 처리
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (year && month) {
      setLoading(true);
      setError(null);
      fetchData(year, month);
    }
  }, [year, month]);

  return { data, loading, error };
};

export default useFetchRecordsByDate;
