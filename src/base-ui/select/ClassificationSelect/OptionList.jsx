import { OptionUl } from "../CategorySelect/defaultListStyle";
import getOptionList from "./getOptionList";

export default function OptionList({ options, onSelectOption }) {
  return <OptionUl>{getOptionList(options, onSelectOption)}</OptionUl>;
}
