import styled from "styled-components";

const chipColorMap = {
  생활: 10,
  "쇼핑/뷰티": 20,
  "의료/건강": 30,
  식비: 50,
  교통: 60,
  "문화/여가": 100,
  미분류: 110,
  월급: 20,
  기타수입: 10,
  용돈: 40,
};

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
