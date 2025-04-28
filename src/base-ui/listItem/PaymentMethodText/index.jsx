import styled from "styled-components";

export default function PaymentMethodText({ method }) {
  return <Text>{method}</Text>;
}

const Text = styled.div`
  width: 104px;
  font-family: ${({ theme }) => theme.font.sans};
  font-weight: 300;
  font-size: ${({ theme }) => theme.font.size.sm};
  line-height: ${({ theme }) => theme.font.lineHeight.sm};
  color: ${({ theme }) => theme.color.token.text.default};
`;
