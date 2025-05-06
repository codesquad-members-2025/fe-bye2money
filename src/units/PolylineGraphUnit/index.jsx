// 이 유닛 컴포넌트에서 현재 페이지의 월이 몇월인지, 현재 카테고리는 어떻게 되는지 쿼리 파람을 알아낸다.
// 쿼리파람으로 찾은 것들을 바탕으로 제이슨 서버에 관련 데이터를 요청한다.
//  카테고리는 해당하는 카테고리 명의 데이터를 찾는다.
// 월은 현재 페이지의 월-6 범위만큼 데이터를 요청한다.

import PolygonGraph from "../../base-ui/stats/PolylineGraph";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Domain from "../../utils/serverDomain";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

function getLastSixMonthsObjects(year, month) {
  const result = [];
  const baseDate = new Date(year, month - 1);

  for (let i = 5; i >= 0; i--) {
    const date = new Date(baseDate.getFullYear(), baseDate.getMonth() - i);
    result.push({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
    });
  }

  return result;
}

export default function PolylineGraphUnit() {
  const [polyLineData, setPolyLineData] = useState(null);
  const [searchParams] = useSearchParams();
  const currentMonth = searchParams.get("month");
  const currentYear = searchParams.get("year");
  const currentCategory = searchParams.get("category");
  useEffect(() => {
    async function getData() {
      const lastSixMonths = getLastSixMonthsObjects(currentYear, currentMonth);
      const currentType = "expense";
      const query = lastSixMonths
        .map((date) => `&year=${date.year}&month=${date.month}`)
        .join("");
      try {
        const res = await fetch(`${Domain.main}`);
        const raw = await res.json();
        const filtered = raw.filter(
          (item) =>
            item.currentType === currentType &&
            item.classification === currentCategory &&
            lastSixMonths.some(
              ({ year, month }) => item.year === year && item.month === month
            )
        );
        const parsed = lastSixMonths.map(({ year, month }) => {
          const amount = filtered
            .filter((item) => item.year === year && item.month === month)
            .reduce((acc, cur) => acc + Number(cur.amount), 0);
          return { month, amount };
        });
        setPolyLineData(parsed);
      } catch (err) {
        console.error(err);
      }
    }
    getData();
  }, [currentMonth, currentCategory]);

  return (
    <Container>
      <PolygonGraph data={polyLineData || []} />
    </Container>
  );
}
