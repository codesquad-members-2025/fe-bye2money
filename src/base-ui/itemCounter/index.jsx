import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.font.sans};
  font-size: ${({ theme }) => theme.font.size.xs};
  line-height: ${({ theme }) => theme.font.lineHeight.md};
  font-weight: ${({ theme }) => theme.font.weight.light};
  color: ${({ theme }) => theme.color.token.text.default};
`;

export default function ItemCounter({ count }) {
  return (
    <Wrapper>
      <span>전체 내역</span>
      <span>{count}건</span>
    </Wrapper>
  );
}
