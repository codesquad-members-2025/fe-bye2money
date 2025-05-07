import styled from '@emotion/styled';

const StyledCategoryTag = styled.span`
  display: inline-block;
  width: 92px;
  flex: 0 0 auto;
  padding: 16px 23px;
  text-align: center;
  white-space: nowrap;
  background-color: ${({ theme, children }) => {
    const colorKey = theme.categoryColors[children];
    return theme.colors[colorKey];
  }};

  ${({ theme }) => theme.typography.light12};
`;

export default function CategoryTag({ children }) {
  return <StyledCategoryTag>{children}</StyledCategoryTag>;
}
