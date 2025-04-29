import styled from '@emotion/styled';

const LayoutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export default function Layout({ children }) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}
