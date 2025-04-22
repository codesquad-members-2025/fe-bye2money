import styled from '@emotion/styled';
import getMonthEnglishName from '../utils/getMonthEnglishName';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const YearText = styled.span`
  ${({ theme }) => theme.typography.light14};
  color: ${({ theme }) => theme.colors.neutralTextDefault};
`;

const MonthText = styled.strong`
  ${({ theme }) => theme.typography.serif48};
  color: ${({ theme }) => theme.colors.neutralTextDefault};
  padding: 0 48px;
`;

const MonthNameText = styled.span`
  ${({ theme }) => theme.typography.light14};
  color: ${({ theme }) => theme.colors.neutralTextDefault};
`;

export default function MonthDisplay({ year, month }) {
  const monthName = getMonthEnglishName(month);

  return (
    <Wrapper>
      <YearText>{year}</YearText>
      <MonthText>{month}</MonthText>
      <MonthNameText>{monthName}</MonthNameText>
    </Wrapper>
  );
}
