import styled from "styled-components";

const OptionUl = styled.ul`
  position: absolute;
  top: 100%;
  /* left: -24px; */
  /* transform: translateY(0%); */
  list-style: none;
  padding: 0px 24px;
  margin: 0;
  background-color: ${({ theme }) => theme.color.token.surface.default};
  width: 152px;
  border: 1px solid ${({ theme }) => theme.color.token.border.default};
  z-index: 2;
  transform-origin: top;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: translateX(-24px)
    scaleY(${({ $categoryActivate }) => ($categoryActivate ? 1 : 0)});
  opacity: ${({ $categoryActivate }) => ($categoryActivate ? 1 : 0)};
`;

const DefaultLi = styled.li`
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.color.token.text.default};
  line-height: ${({ theme }) => theme.font.lineHeight.md};
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.token.surface.point};
  }
`;

export { OptionUl, DefaultLi };
