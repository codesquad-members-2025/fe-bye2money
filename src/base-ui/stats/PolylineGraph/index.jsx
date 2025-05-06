import Axis from "./Axis";
import Polyline from "./Polyline";
import getCoordinate from "./getCoordinate";
import Label from "./Label";
import { GuideLineX, GuideLineY } from "./GuideLine";

/*
const data = [
  { month: '2024-01', amount: 120000 },
  { month: '2024-02', amount: 150000 },
  { month: '2024-03', amount: 100000 },
  ...
];
*/
export default function PolygonGraph({ data }) {
  const width = 750;
  const height = 300;
  const padding = { left: 0, right: 0, top: 0, bottom: 0 };
  const points = getCoordinate.points(data, width, height, padding);

  return (
    <svg width={width} height={height}>
      <Axis width={width} height={height} padding={padding} />
      <GuideLineX width={width} height={height} padding={padding} count={10} />
      <GuideLineY width={width} height={height} padding={padding} count={10} />
      <Polyline points={points.map(" ")} />
      <Label data={data} width={width} height={height} padding={padding} />
    </svg>
  );
}
