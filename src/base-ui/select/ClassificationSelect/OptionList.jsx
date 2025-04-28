import styled from "styled-components";
import { OptionUl } from "../CategorySelect/defaultListStyle";
import getOptionList from "./getOptionList";

const DropBox = styled(OptionUl)`
  justify-content: space-between;
`;
export default function OptionList({ options, onSelectOption }) {
  return <DropBox>{getOptionList(options, onSelectOption)}</DropBox>;
}
