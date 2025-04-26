import styled from "styled-components";
import ListItem from "../../base-ui/listItem";
import DateLabel from "../../base-ui/listItem/DateLabel";
import TotalExpenseLabel from "../../base-ui/listItem/TotalExpenseLabel";
import moneyReducer from "../../utils/moneyReducer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.color.token.border.default};
  border-bottom: 1px solid ${({ theme }) => theme.color.token.border.default};
`;
// transactions: 동일 날짜에 해당하는 트랜잭션 객체 배열
// onEdit, onDelete는 상위(MainPage)에서 prop으로 내려받은 핸들러
export default function DailyTransactionList({
  transactions,
  onEdit,
  onDelete,
}) {
  const { year, month, day } = transactions[0];
  const { earning, expense } = moneyReducer(transactions);

  return (
    <Container>
      <Header>
        <DateLabel year={year} month={month} day={day} />
        <TotalExpenseLabel earning={earning} expense={expense} />
      </Header>
      <Body>{renderTransactionList(transactions, onEdit, onDelete)}</Body>
    </Container>
  );
}

function renderTransactionList(transactions, onEdit, onDelete) {
  return transactions.map((log) => {
    const id = log.id;
    return <ListItem key={id} item={log} onEdit={onEdit} onDelete={onDelete} />;
  });
}
