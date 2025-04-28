import styled from "styled-components";
import DefaultButton from "../DefaultButton";
import { useModal } from "../../../constants/AlertModal";
import { OptionUl, DefaultLi } from "../CategorySelect/defaultListStyle";

const OptionLi = styled(DefaultLi)`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const AddLi = styled(DefaultLi)`
  justify-content: flex-start;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 16px;
`;

const Divider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.color.token.border.default};
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
        <ListContainer>
          <OptionLi key={option} onClick={() => onSelect(option)}>
            <div>{option}</div>
            <DefaultButton
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                openModal(deleteModalDataObj);
              }}
            >
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.75732 16.7426L16.2426 8.25736"
                  stroke="#E93B5A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </DefaultButton>
          </OptionLi>
          <Divider />
        </ListContainer>
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
