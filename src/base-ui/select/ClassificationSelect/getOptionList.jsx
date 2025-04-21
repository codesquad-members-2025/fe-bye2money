import styled from "styled-components";
import { DefaultLi } from "../CategorySelect/defaultListStyle";

const OptionLi = styled(DefaultLi)`
  justify-content: flex-start;
`;

export default function getOptionList(options, onSelect) {
  return options.map((option) => {
    return (
      <OptionLi key={option} onClick={() => onSelect(option)}>
        <div>{option}</div>
      </OptionLi>
    );
  });
}
