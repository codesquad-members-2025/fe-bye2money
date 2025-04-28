/**
 * @param {Array} records
 * @returns {Record<string, Array>}
 */
export function groupByDate(records) {
  return records.reduce((acc, record) => {
    const key = record.date; // YYYY-MM-DD
    if (!acc[key]) acc[key] = [];
    acc[key].push(record);
    return acc;
  }, {});
}

/**
 * @param {Record<string, Array>} groupedRecords
 * @param {boolean} showIncome
 * @param {boolean} showExpense
 * @returns {Record<string, Array>}
 */
export function filterGroupedByType(groupedRecords, showIncome, showExpense) {
  const result = {};
  for (const [date, records] of Object.entries(groupedRecords)) {
    const filtered = records.filter((r) =>
      r.type === 'income' ? showIncome : showExpense
    );
    if (filtered.length > 0) {
      result[date] = filtered;
    }
  }
  return result;
}

const KOREAN_WEEKDAYS = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
];

/**
 * @param {string} dateString  – ex) "2025-08-14"
 * @returns {string}           – "8월 14일 목요일"
 */
export function formatKoreanDateWithWeekday(dateString) {
  const date = new Date(dateString);
  if (isNaN(date)) {
    throw new Error(`Invalid date: ${dateString}`);
  }

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekday = KOREAN_WEEKDAYS[date.getDay()];

  return `${month}월 ${day}일 ${weekday}`;
}

/**
 * 특정 타입(income 또는 expense)의 총 금액을 계산합니다.
 *
 * @param {Array<{ type: string, amount: number }>} records - 거래 내역 배열
 * @param {'income' | 'expense'} type - 합계를 구할 거래 타입
 * @returns {number} - 해당 타입의 총 금액
 */
export function getTotalByType(records, type) {
  return records
    .filter((record) => record.type === type)
    .reduce((sum, record) => sum + record.amount, 0);
}
