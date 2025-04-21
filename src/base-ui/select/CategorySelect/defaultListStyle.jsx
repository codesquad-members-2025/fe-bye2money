import styled from "styled-components";

const OptionUl = styled.ul`
  position: absolute;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DefaultLi = styled.li`
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.color.token.text.default};
  display: flex;
  padding: 16px 24px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.token.surface.point};
  }
`;

export { OptionUl, DefaultLi };
