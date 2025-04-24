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
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.color.border.default};
  border-bottom: 1px solid ${({ theme }) => theme.color.border.default};
`;
// item: 동일 날짜에 해당하는 트랜잭션 객체 배열
// onEdit, onDelete는 상위(MainPage)에서 prop으로 내려받은 핸들러
export default function DailyTransactionList({ item, onEdit, onDelete }) {
  const { year, month, day } = item[0];
  const { earning, expense } = moneyReducer(item);
  return (
    <Container>
      <Header>
        <DateLabel year={year} month={month} day={day} />
        <TotalExpenseLabel earning={earning} expense={expense} />
      </Header>
      <Body>{getTransactionItemList(item, onEdit, onDelete)}</Body>
    </Container>
  );
}

function getTransactionItemList(item, onEdit, onDelete) {
  return item.map((log) => {
    const id = log.id;
    return <ListItem key={id} item={log} onEdit={onEdit} onDelete={onDelete} />;
  });
}
