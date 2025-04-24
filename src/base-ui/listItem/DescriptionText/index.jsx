import styled from "styled-components";

export default function DescriptionText({ description }) {
  return <Text>{description}</Text>;
}

const Text = styled.div`
  width: 400px;
  font-family: ${({ theme }) => theme.font.sans};
  font-weight: 300;
  font-size: ${({ theme }) => theme.font.size.sm};
  line-height: ${({ theme }) => theme.font.lineHeight.sm};
  color: ${({ theme }) => theme.color.token.text.default};
`;
