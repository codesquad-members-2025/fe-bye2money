import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${({ theme }) => theme.colors.neutralTextWeak};
  background-color: ${({ theme }) => theme.colors.neutralSurface};
`;

export default function Message({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
