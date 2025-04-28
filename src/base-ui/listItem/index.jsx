import styled from "styled-components";
import { useState } from "react";
import CategoryTag from "./CategoryTag";
import DescriptionText from "./DescriptionText";
import PaymentMethodText from "./PaymentMethodText";
import AmountText from "./AmountText";
import DeleteButton from "../buttons/DeleteButton";
import { formatAmount } from "../../utils/amountChanger";
import { useModal } from "../../constants/AlertModal";

export default function ListItem({ item, onEdit, onDelete }) {
  const [ishover, setIshover] = useState(false);
  const { classification, description, method, amount, currentType } = item;
  const openModal = useModal();
  const deleteModalDataObj = {
    message: "해당 내역을 삭제하시겠습니까?",
    placeholder: null, // 삭제 시에는 placeholder는 필요없다.
    selectedContent: item,
    onConfirm: () => onDelete(item), // 삭제 핸들러 함수를 전달해야한다.
  };

  function handleContainerClick(e) {
    const target = e.target;
    if (target.closest("button")) return;
    onEdit(item);
  }

  return (
    <Container
      onClick={handleContainerClick}
      onMouseEnter={() => setIshover(true)}
      onMouseLeave={() => setIshover(false)}
    >
      <CategoryTag classification={classification} />
      <DescriptionText description={description} />
      <PaymentMethodText method={method} />
      <AmountText
        ishover={ishover}
        earning={currentType === "earning" ? formatAmount(amount) : null}
        expense={currentType === "expense" ? formatAmount(amount) : null}
      />
      {ishover && (
        <DeleteButton
          ishover={ishover}
          onClick={() => {
            openModal(deleteModalDataObj);
            e.stopPropagation();
          }}
        />
      )}
    </Container>
  );
}

const Container = styled.li`
  position: relative;
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
