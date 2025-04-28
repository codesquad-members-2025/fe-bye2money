import styled from '@emotion/styled';
import Message from '../../../shared/components/Message';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  background: ${({ theme }) => theme.colors.dangerSurfaceSubtle};
  padding: 24px;
`;

const StyledMessage = styled(Message)`
  text-align: center;

  ${({ theme }) => theme.typography.medium16};
  color: ${({ theme }) => theme.colors.dangerTextDefault};
`;

const RetryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.dangerSurfaceDefault};
  color: ${({ theme }) => theme.colors.dangerSurfaceDefault};
`;

export default function ErrorMessage({ onRetry }) {
  return (
    <ErrorContainer>
      <StyledMessage>
        내역을 가져오는데 에러가 발생했습니다.
        <br />
        다시 시도해주세요 😢
      </StyledMessage>
      <RetryButton onClick={onRetry}>↺</RetryButton>
    </ErrorContainer>
  );
}
