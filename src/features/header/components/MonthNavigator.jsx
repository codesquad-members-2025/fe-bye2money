// components/MonthNavigator.jsx
import styled from '@emotion/styled';
import LeftIcon from '../../../assets/icons/chevron-left.svg?react';
import RightIcon from '../../../assets/icons/chevron-right.svg?react';
import MonthDisplay from './MonthDisplay';

const NavigatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const StyledLeftIcon = styled(LeftIcon)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.neutralTextDefault};
  cursor: pointer;
`;

const StyledRightIcon = styled(RightIcon)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.neutralTextDefault};
  cursor: pointer;
`;

export default function MonthNavigator({
  year,
  month,
  onPrevMonth,
  onNextMonth,
}) {
  return (
    <NavigatorWrapper>
      <StyledLeftIcon onClick={onPrevMonth} />
      <MonthDisplay year={year} month={month} />
      <StyledRightIcon onClick={onNextMonth} />
    </NavigatorWrapper>
  );
}
