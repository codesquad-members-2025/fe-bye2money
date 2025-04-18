//선택 가능한 옵션들과 드랍다운의 옵션의 클릭 핸들러함수, 드랍다운의 옵션 삭제 요청 핸들러를 입력받는다.
// 옵션 선택시 prop으로 전달 받은 선택 핸들러 함수에 정보를 전달 한다.
// 옵션의 삭제 버튼 클릭시 전달 받은 삭제 핸들러 함수에 해당 옵션의 정보를 넘긴다.
// "추가하기" 항목을 클릭하면 onAdd 핸들러를 호출한다.
// props: options, onSelect, onDelete, onAdd
import styled from "styled-components";

const OptionWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Option = styled.li`
  font-weight: ${({ theme }) => theme.weight.light};
  font-size: ${({ theme }) => theme.weight.size.xs};
  color: ${({ theme }) => theme.color.token.text.default};
  display: flex;
  padding: 16px 24px;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.token.surface.point};
  }
`;

export default function OptionList({ opitons, onSelect }) {}
