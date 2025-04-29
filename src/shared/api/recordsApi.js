import { BASE_URL, API } from '../constants/api';

// 레코드 가져오기
export async function getRecords({ year, month }) {
  const response = await fetch(
    `${BASE_URL}${API.RECORDS}?year=${year}&month=${month}`
  );

  if (!response.ok) {
    throw new Error('레코드 불러오기 실패');
  }

  const data = await response.json();
  return data;
}

// 레코드 생성
export async function postRecordToServer(record) {
  const response = await fetch(`${BASE_URL}${API.RECORDS}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(record),
  });

  if (!response.ok) {
    throw new Error('레코드 생성 실패');
  }

  const data = await response.json();
  return data;
}

// 레코드 수정
export async function patchRecordToServer(record) {
  const response = await fetch(`${BASE_URL}${API.RECORDS}/${record.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(record),
  });

  if (!response.ok) {
    throw new Error('레코드 수정 실패');
  }

  const data = await response.json();
  return data;
}

// 레코드 삭제
export async function deleteRecordFromServer(id) {
  const response = await fetch(`${BASE_URL}${API.RECORDS}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('레코드 삭제 실패');
  }
}
