import { useState, useEffect, useCallback } from 'react';
import { getPayments } from '../api/paymentsApi';

export default function useFetchPayments(userId) {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPayments = useCallback(async () => {
    if (!userId) return;

    setLoading(true);
    setError(null);
    setPayments([]);

    try {
      const result = await getPayments();
      setPayments(result);
    } catch (err) {
      setError(err.message || '결제수단을 불러오는 데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchPayments();
  }, [fetchPayments]);

  return { payments, loading, error, refetch: fetchPayments };
}
