import styled from "styled-components";
import DailyTransactionList from "../DailyTransactionList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  z-index: 1;
`;
export default function MonthTransactionList({
  transactions,
  onEdit,
  onDelete,
  selectedTransactions,
}) {
  const monthlyData = groupTransactionsByDay(transactions);
  return (
    <Container>
      {monthlyData.map((dailyItem, idx) => {
        return (
          <DailyTransactionList
            transactions={dailyItem}
            onEdit={onEdit}
            onDelete={onDelete}
            key={idx}
            selectedTransactions={selectedTransactions}
          />
        );
      })}
    </Container>
  );
}

function groupTransactionsByDay(monthlyItems) {
  const grouped = monthlyItems.reduce((acc, dailyItem) => {
    const day = dailyItem.day;
    if (!acc[day]) acc[day] = [];
    acc[day].push(dailyItem);
    return acc;
  }, {});
  return Object.entries(grouped)
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map(([_, items]) => items);
}
