import styled from "styled-components";
import AmountText from "./TotalExpenseLabel";
import CategoryTag from "./CategoryTag";
import DateLabel from "./DateLabel";
import DescriptionText from "./DescriptionText";
import PaymentMethodText from "./PaymentMethodText";
import AmountText from "./TotalExpenseLabel";
import DeleteButton from "./DeleteButton";

export default function ListItem({ item, onEdit, onDelete }) {
  const { id, regDate, content, amount, category, method, type } = item;

  return (
    <Container onClick={() => onEdit(item)}>
      <TopRow>
        <DateLabel regDate={regDate} />
        <DeleteButton
          onClick={(e) => {
            e.stopPropagation();
            onDelete(id);
          }}
        />
      </TopRow>
      <ContentRow>
        <CategoryTag category={category} type={type} />
        <Text>{content}</Text>
        <PaymentLabel method={method} />
        <AmountText amount={amount} type={type} />
      </ContentRow>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  gap: 16px;
  background-color: ${({ theme }) => theme.color.token.surface.default};
  border-bottom: 1px solid ${({ theme }) => theme.color.token.border.default};
  cursor: pointer;
  transition: background-color 0.3s;

  &.hover {
    background-color: ${({ theme }) => theme.color.token.surface.point};
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const Text = styled.span`
  flex: 1;
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.color.token.text.default};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
