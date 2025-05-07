import styled from "@emotion/styled";

const MonthNavigator = () => {
  return (
    <Container>
      <button className="p-2 bg-gray-200 rounded">Previous</button>
      <Calendar>
        <Year></Year>
        <MonthNum></MonthNum>
        <MonthEng></MonthEng>
      </Calendar>
      <button className="p-2 bg-gray-200 rounded">Next</button>
    </Container>
  );
};
export default MonthNavigator;

const Container = styled.div``;

const Calendar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Year = styled.div``;
const MonthNum = styled.div``;
const MonthEng = styled.div``;
