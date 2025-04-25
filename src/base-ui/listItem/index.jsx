import styled from "styled-components";
import { useState } from "react";
import CategoryTag from "./CategoryTag";
import DescriptionText from "./DescriptionText";
import PaymentMethodText from "./PaymentMethodText";
import AmountText from "./TotalExpenseLabel";
import DeleteButton from "../buttons/DeleteButton";
import { formatAmount } from "../../utils/amountChanger";

export default function ListItem({ item, onEdit, onDelete }) {
  const [ishover, setIshover] = useState(false);
  const { classification, description, method, amount, currentType } = item;

  return (
    <Container
      onClick={() => onEdit(item)}
      onMouseEnter={() => setIshover(true)}
      onMouseLeave={() => setIshover(false)}
    >
      <CategoryTag classification={classification} />
      <DescriptionText description={description} />
      <PaymentMethodText method={method} />
      <AmountText
        earning={currentType === "earning" ? formatAmount(amount) : null}
        expense={currentType === "expense" ? formatAmount(amount) : null}
      />
      {ishover && <DeleteButton onClick={() => onDelete(item)} />}
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  gap: 16px;
  align-items: center;
  padding-right: 16px;
  background-color: ${({ theme }) => theme.color.token.surface.default};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.color.token.surface.point};
  }
`;
