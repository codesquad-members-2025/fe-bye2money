import styled from "styled-components";
import DefaultLabel from "./DefualtLabel";

const CounterLabel = styled(DefaultLabel)`
  color: ${({ theme }) => theme.color.token.text.weak};
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-size: ${({ theme }) => theme.font.size.xs};
  line-height: ${({ theme }) => theme.font.lineHeight.md};
`;

export default function DescriptionCountingLabel({ currentCounting }) {
  const maxNumber = 32;

  return <CounterLabel>{`${currentCounting}/${maxNumber}`}</CounterLabel>;
}
