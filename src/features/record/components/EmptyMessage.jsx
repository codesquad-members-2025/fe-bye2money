import styled from '@emotion/styled';
import Message from '../../../shared/components/Message';

const StyledMessage = styled(Message)`
  text-align: center;

  ${({ theme }) => theme.typography.medium16};
  color: ${({ theme }) => theme.colors.dangerTextDefault};
`;

export default function EmptyMessage() {
  return (
    <StyledMessage>
      기록한 내역이 없어요! <br />
      가계부를 작성해주세요! <br />
      📘
    </StyledMessage>
  );
}
