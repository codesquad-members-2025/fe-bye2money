import styled from "styled-components";
import { DefaultLi } from "../CategorySelect/defaultListStyle";

const OptionLi = styled(DefaultLi)`
  justify-content: flex-start;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const Divider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.color.token.border.default};
`;

export default function getOptionList(options, onSelect) {
  return options.map((option, index) => {
    const isLast = index === options.length - 1;
    return (
      <div key={option}>
        <OptionLi onClick={() => onSelect(option)}>
          <div>{option}</div>
        </OptionLi>
        {!isLast && <Divider />}
      </div>
    );
  });
}
