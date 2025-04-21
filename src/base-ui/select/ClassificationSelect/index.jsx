import { useState, useReducer } from "react";
import styled from "styled-components";
import CategorySelectButton from "../CategorySelect/CategorySelectButton";

const OptionWrapper = styled.div`
  position: relative; // 기준이 되는 요소
`;

export default function ClassificationSelect({
  classification,
  transactionType,
  onSelectOption,
}) {}
