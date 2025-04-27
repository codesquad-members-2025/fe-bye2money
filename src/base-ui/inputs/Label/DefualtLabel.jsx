import styled from "styled-components";

const DefaultLabel = styled.div`
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.color.token.text.default};
  font-weight: ${({ theme }) => theme.font.weight.light};
  line-height: ${({ theme }) => theme.font.lineHeight.md};
`;

export default DefaultLabel;
