import styled from '@emotion/styled';
import { formatKoreanDateWithWeekday, getTotalByType } from '../utils/utils';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  ${({ theme }) => theme.typography.serif14};
`;

const DateText = styled.div``;

const Summary = styled.div`
  display: flex;
  gap: 16px;
`;

const Income = styled.span``;

const Expense = styled.span``;

function formatNumber(num) {
  return num.toLocaleString();
}

export default function DailyInfo({ date, records }) {
  const formattedDate = formatKoreanDateWithWeekday(date);

  const incomeTotal = getTotalByType(records, 'income');
  const expenseTotal = getTotalByType(records, 'expense');

  return (
    <Wrapper>
      <DateText>{formattedDate}</DateText>
      <Summary>
        {incomeTotal > 0 && <Income>수입 {formatNumber(incomeTotal)}원</Income>}
        {expenseTotal > 0 && (
          <Expense>지출 {formatNumber(expenseTotal)}원</Expense>
        )}
      </Summary>
    </Wrapper>
  );
}
