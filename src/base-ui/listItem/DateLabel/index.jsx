import styled from "styled-components";

export default function DateLabel({ year, month, day }) {
  const date = new Date(year, month - 1, day);
  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  const dayName = dayNames[date.getDay()];

  return <Label>{`${month}월 ${day}일 ${dayName}요일`}</Label>;
}

const Label = styled.div`
  font-family: ${({ theme }) => theme.font.serif};
  font-weight: 400;
  font-size: ${({ theme }) => theme.font.size.sm};
  line-height: ${({ theme }) => theme.font.lineHeight.sm};
  text-align: center;
  margin: 0;
`;
