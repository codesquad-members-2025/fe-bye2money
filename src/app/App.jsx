import styled from '@emotion/styled';
import Content from './Content';
import Header from '../features/header';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

function App() {
  return (
    <LayoutWrapper>
      <Header />
      <Content />
    </LayoutWrapper>
  );
}

export default App;
