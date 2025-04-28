import styled from '@emotion/styled';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => theme.typography.serif14};
  color: ${({ theme }) => theme.colors.neutralTextDefault};
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.typography.light12};
`;

const Title = styled.span`
  margin-right: 4px;
  color: ${({ theme }) => theme.colors.neutralTextDefault};
`;

const Count = styled.span`
  color: ${({ theme }) => theme.colors.neutralTextDefault};
`;

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  ${({ theme }) => theme.typography.light12};
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  input {
    margin-right: 4px;
  }
`;

export default function RecordListHeader({
  totalCount,
  showIncome,
  showExpense,
  onToggleIncome,
  onToggleExpense,
}) {
  return (
    <Header>
      <LeftGroup>
        <Title>전체 내역</Title>
        <Count>{totalCount}</Count>
      </LeftGroup>

      <RightGroup>
        <CheckboxLabel>
          <input
            type="checkbox"
            checked={showIncome}
            onChange={() => onToggleIncome((prev) => !prev)}
          />
          수입
        </CheckboxLabel>
        <CheckboxLabel>
          <input
            type="checkbox"
            checked={showExpense}
            onChange={() => onToggleExpense((prev) => !prev)}
          />
          지출
        </CheckboxLabel>
      </RightGroup>
    </Header>
  );
}
