import styled from '@emotion/styled';

const LayoutWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;

export default function AppLayout({ children }) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}
