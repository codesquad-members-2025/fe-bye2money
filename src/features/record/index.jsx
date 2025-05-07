import React, { useState, useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import styled from '@emotion/styled';
import { groupByDate, filterGroupedByType } from './utils/utils';
import ErrorMessage from './components/ErrorMessage';
import EmptyMessage from './components/EmptyMessage';
import RecordListHeader from './components/RecordListHeader';
import RecordDateGroup from './components/RecordDateGroup';

const RecordListContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: 100%;
  max-width: 800px;
`;

const ListBox = styled.div`
  flex: 1 1 auto;
  padding-right: 12px;
  padding-bottom: 80px;
  min-height: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export default function RecordList({
  recordData,
  onSelect,
  onDelete,
  editingId,
}) {
  const { error, fetchRecords } = useOutletContext();
  const [showIncome, setShowIncome] = useState(true);
  const [showExpense, setShowExpense] = useState(true);

  // 날짜별 그룹핑
  const groupedByDate = useMemo(() => groupByDate(recordData), [recordData]);

  // 필터링
  const visibleGroups = useMemo(
    () => filterGroupedByType(groupedByDate, showIncome, showExpense),
    [groupedByDate, showIncome, showExpense]
  );

  const recordList = Object.entries(visibleGroups);

  if (error) return <ErrorMessage onRetry={fetchRecords} />;
  if (recordData.length === 0) return <EmptyMessage />;

  return (
    <RecordListContainer>
      <RecordListHeader
        totalCount={recordData.length}
        showIncome={showIncome}
        showExpense={showExpense}
        onToggleIncome={() => setShowIncome((prev) => !prev)}
        onToggleExpense={() => setShowExpense((prev) => !prev)}
      />
      <ListBox>
        {recordList.map(([date, items]) => (
          <RecordDateGroup
            key={date}
            date={date}
            records={items}
            onSelect={onSelect}
            onDelete={onDelete}
            editingId={editingId}
          />
        ))}
      </ListBox>
    </RecordListContainer>
  );
}
