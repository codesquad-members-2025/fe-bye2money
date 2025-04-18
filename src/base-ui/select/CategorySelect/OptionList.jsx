//선택 가능한 옵션들과 드랍다운의 옵션의 클릭 핸들러함수, 드랍다운의 옵션 삭제 요청 핸들러를 입력받는다.
// 옵션 선택시 prop으로 전달 받은 선택 핸들러 함수에 정보를 전달 한다.
// 옵션의 삭제 버튼 클릭시 전달 받은 삭제 핸들러 함수에 해당 옵션의 정보를 넘긴다.
// "추가하기" 항목을 클릭하면 onAdd 핸들러를 호출한다.
// props: options, onSelect, onDelete, onAdd

// 드랍다운 옵션을 클릭했을때 옵션을 CategorySelect에 전달해야한다.
// 삭제 버튼을 클랙했을때 해당 옵션을 CategorySelect에 전달해야한다.
import styled from "styled-components";
import ResetButton from "../ResetButton";

const OptionUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DefaultLi = styled.li`
  font-weight: ${({ theme }) => theme.weight.light};
  font-size: ${({ theme }) => theme.weight.size.xs};
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

function getOptionList(options, onSelect, onDelete) {
  return options.map((option) => {
    return (
      <OptionLi key={option} onClick={() => onSelect(option)}>
        <div>{option}</div>
        <ResetButton onClick={() => onDelete(option)}>
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
        </ResetButton>
      </OptionLi>
    );
  });
}

export default function OptionList({ options, onSelect, onDelete, onAdd }) {
  const addText = "추가하기";
  return (
    <>
      <OptionUl>
        {getOptionList(options, onSelect, onDelete)}
        <AddLi onClick={onAdd}>{addText}</AddLi>
      </OptionUl>
    </>
  );
}
