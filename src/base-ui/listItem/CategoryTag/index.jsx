import styled from "styled-components";
import chipColorMap from "../../util/chipColorMap";

export default function CategoryTag({ classification }) {
  return <Tag $classification={classification}>{classification}</Tag>;
}

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92px;
  height: 56px;
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.light};
  line-height: 24px;
  font-family: ${({ theme }) => theme.font.sans};
  background-color: ${({ theme, $classification }) =>
    theme.color.token.chip[chipColorMap[$classification]]};
  color: ${({ theme }) => theme.color.token.text.default};
  text-align: center;
`;
