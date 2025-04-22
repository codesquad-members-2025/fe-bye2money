import styled from "styled-components";
import getMonthName from "./getMonthName";

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledYear = styled.div`
  font-family: ${({ theme }) => theme.font.sans};
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-size: ${({ theme }) => theme.font.size.sm};
  line-height: ${({ theme }) => theme.font.lineHeight.sm};
  color: ${({ theme }) => theme.color.token.text.default};
  text-align: center;
`;

const StyledMonth = styled.div`
  font-family: ${({ theme }) => theme.font.serif};
  font-weight: 400;
  font-size: ${({ theme }) => theme.font.size.xl};
  line-height: ${({ theme }) => theme.font.lineHeight.xl};
  color: ${({ theme }) => theme.color.token.text.default};
  text-align: center;
`;

const StyledMonthEn = styled.div`
  font-family: ${({ theme }) => theme.font.sans};
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-size: ${({ theme }) => theme.font.size.sm};
  line-height: ${({ theme }) => theme.font.lineHeight.sm};
  color: ${({ theme }) => theme.color.token.text.default};
  text-align: center;
`;

export default function MonthYearTitle({ currentYear, currentMonth }) {
  return (
    <TitleWrapper>
      <StyledYear>{currentYear}</StyledYear>
      <StyledMonth>{currentMonth}</StyledMonth>
      <StyledMonthEn>{getMonthName(currentMonth)}</StyledMonthEn>
    </TitleWrapper>
  );
}
