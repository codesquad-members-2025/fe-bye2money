import styled from '@emotion/styled';
import BaseContent from '../../shared/components/layout/BaseContent';

const StatsContent = styled(BaseContent)`
  gap: 40px;
`;

export default function HomeLayout({ children }) {
  return <StatsContent>{children}</StatsContent>;
}
