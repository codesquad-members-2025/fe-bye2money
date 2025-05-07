import styled from '@emotion/styled';
import BaseContent from './BaseContent';

const HomeContent = styled(BaseContent)`
  gap: 34px;
`;

export default function HomeLayout({ children }) {
  return <HomeContent>{children}</HomeContent>;
}
