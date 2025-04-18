/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.pastelAmaranth};
  ${({ theme }) => theme.typography.serif48};
`;

const Paragraph = styled.p`
  margin-bottom: 10px;

  ${({ theme }) => theme.typography.serif24};
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.neutralTextRevDefault};
  color: white;
  border: none;
  cursor: pointer;

  ${({ theme }) => theme.typography.semibold16};

  &:hover {
    background-color: ${({ theme }) => theme.colors.brandTextIncome};
  }
`;

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  };

  return (
    <Container>
      <Heading>404</Heading>
      <Paragraph>Page Not Found</Paragraph>
      <Button onClick={goToHomePage}>Go to Home</Button>
    </Container>
  );
};

export default NotFoundPage;
