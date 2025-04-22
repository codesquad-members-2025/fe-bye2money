import styled from '@emotion/styled';

const Logo = styled.h1`
  ${({ theme }) => theme.typography.serif24};
  color: ${({ theme }) => theme.colors.neutralTextDefault};

  cursor: pointer;
`;

const LogoSection = ({ onLogoClick }) => {
  return <Logo onClick={onLogoClick}>Wise Wallet</Logo>;
};

export default LogoSection;
