import styled from '@emotion/styled';

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;

  color: ${({ theme }) => theme.colors.neutralTextDefault};
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
  transition: background-color 0.3s ease;

  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

export default function TabNavigator({ activeTab, tabs, onTabClick }) {
  return (
    <IconWrapper>
      {tabs.map(({ key, icon: Icon, path }) => (
        <IconButton
          key={key}
          active={activeTab === key}
          onClick={() => onTabClick(path)}
        >
          <Icon />
        </IconButton>
      ))}
    </IconWrapper>
  );
}
