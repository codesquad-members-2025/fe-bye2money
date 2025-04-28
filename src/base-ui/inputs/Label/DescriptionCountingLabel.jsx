import styled from "styled-components";
import DefaultLabel from "./DefualtLabel";

const CounterLabel = styled(DefaultLabel)`
  color: ${({ theme }) => theme.color.token.text.weak};
`;

export default function DescriptionCountingLabel({ currentCounting }) {
  const maxNumber = 32;

  return <CounterLabel>{`${currentCounting}/${maxNumber}`}</CounterLabel>;
}
