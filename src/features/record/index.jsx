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
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const ListBox = styled.div`
  margin-top: 16px;
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
