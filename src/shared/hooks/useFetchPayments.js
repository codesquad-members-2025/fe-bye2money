import { useState, useEffect } from 'react';

export default function useFetchPayments(userId) {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPayments = async () => {
    try {
      // TODO 실제 API url로 변경
      const response = await fetch(`/mockData/payments${userId}.json`);
      if (!response.ok) {
        throw new Error('Data file not found');
      }

      const result = await response.json();
      setPayments(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!userId) return;
    setLoading(true);
    setError(null);
    fetchPayments();
  }, [userId]);

  return { payments, loading, error };
}
