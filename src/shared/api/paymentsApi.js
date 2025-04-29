import { BASE_URL, API } from '../constants/api';

// 결제수단 전체 가져오기 (GET)
export async function getPayments() {
  const response = await fetch(`${BASE_URL}${API.PAYMENTS}`);

  if (!response.ok) {
    throw new Error('결제수단 불러오기 실패');
  }

  return await response.json();
}

// 결제수단 수정하기 (PATCH)
export async function patchPayment(payment) {
  const response = await fetch(`${BASE_URL}${API.PAYMENTS}/${payment.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payment),
  });

  if (!response.ok) {
    throw new Error('결제수단 수정 실패');
  }

  return await response.json();
}

// 결제수단 삭제하기 (DELETE)
export async function deletePayment(id) {
  const response = await fetch(`${BASE_URL}${API.PAYMENTS}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('결제수단 삭제 실패');
  }
}
