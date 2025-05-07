import styled from '@emotion/styled';

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  ${({ theme }) => theme.typography.light12}
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.pastelSeagull : theme.colors.neutralTextDefault};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutralSurfacePoint};
  }
`;

const ItemLabel = styled.span`
  display: inline-block;
  width: 72px;
`;

export { ItemWrapper, ItemLabel };
