import styled from '@emotion/styled';
import CloseSvg from '../../../assets/icons/closed.svg?react';

const ItemRemoveButton = styled(CloseSvg)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.dangerTextDefault};
`;

export default ItemRemoveButton;
