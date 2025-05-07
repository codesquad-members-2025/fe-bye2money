import styled from '@emotion/styled';
import BaseContent from '../../shared/components/layout/BaseContent';

const CalendarContent = styled(BaseContent)`
  gap: 40px;
`;

export default function CalendarLayout({ children }) {
  return <CalendarContent>{children}</CalendarContent>;
}
