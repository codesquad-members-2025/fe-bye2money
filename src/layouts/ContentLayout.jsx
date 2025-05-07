import styled from '@emotion/styled';

const ContentLayoutContainer = styled.main`
  flex: 1;
  position: relative;
  width: 100%;
`;

export default function ContentLayout({ children }) {
  return <ContentLayoutContainer>{children}</ContentLayoutContainer>;
}
