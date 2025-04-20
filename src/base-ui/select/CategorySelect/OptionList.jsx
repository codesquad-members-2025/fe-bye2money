import styled from "styled-components";
import DefaultButton from "../DefaultButton";
import { useModal } from "../../../constants/AlertModal";

const OptionUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DefaultLi = styled.li`
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.color.token.text.default};
  display: flex;
  padding: 16px 24px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.token.surface.point};
  }
`;

const OptionLi = styled(DefaultLi)`
  justify-content: space-between;
`;

const AddLi = styled(DefaultLi)`
  justify-content: flex-start;
`;

export default function OptionList({
  options,
  onSelectOption,
  onAdd,
  onDelete,
}) {
  const openModal = useModal();
  const addText = "추가하기";

  const openModalDataObj = {
    message: "추가하실 결제 수단을 입력해주세요.",
    placeholder: "결제 수단 입력",
    confirmText: "추가",
    cancelText: "취소",
    selectedContent: null,
    onConfirm: onAdd,
  };

  function getOptionList(options, onSelect, openModal) {
    return options.map((option) => {
      const deleteModalDataObj = {
        message: "해당 결제 수단을 삭제하시겠습니까?",
        placeholder: null,
        selectedContent: null,
        onConfirm: () => onDelete(option),
      };
      return (
        <OptionLi key={option} onClick={() => onSelect(option)}>
          <div>{option}</div>
          <DefaultButton onClick={() => openModal(deleteModalDataObj)}>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.75732 8.25735L16.2426 16.7426"
                stroke="#E93B5A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.75732 16.7426L16.2426 8.25736"
                stroke="#E93B5A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </DefaultButton>
        </OptionLi>
      );
    });
  }

  return (
    <>
      <OptionUl>
        {getOptionList(options, onSelectOption, openModal)}
        <AddLi onClick={() => openModal(openModalDataObj)}>{addText}</AddLi>
      </OptionUl>
    </>
  );
}
