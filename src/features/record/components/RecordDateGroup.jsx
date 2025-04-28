import styled from '@emotion/styled';
import DailyInfo from './DailyInfo';
import RecordItem from './RecordItem';

const DateGroup = styled.div`
  margin-bottom: 24px;
`;

const ItemContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.neutralTextDefault};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutralTextDefault};
`;

export default function RecordDateGroup({
  date,
  records,
  onSelect,
  onDelete,
  editingId,
}) {
  return (
    <DateGroup>
      <DailyInfo date={date} records={records} />
      <ItemContainer>
        {records.map((record) => (
          <RecordItem
            key={record.id}
            record={record}
            onSelect={onSelect}
            onDelete={onDelete}
            isEditing={record.id === editingId}
          />
        ))}
      </ItemContainer>
    </DateGroup>
  );
}
