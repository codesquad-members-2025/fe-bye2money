import getCoordinate from "./getCoordinate";
import { formatAmount } from "../../../utils/amountChanger";

export default function Label({ data, width, height, padding }) {
  const max = Math.max(...data.map((d) => d.amount));

  return data.map((d) => {
    const x = getCoordinate.x(d.month, width, padding);
    const y = getCoordinate.y(d.amount, max, height, padding);

    return (
      <g key={d.month}>
        <circle cx={x} cy={y} r="4" fill="#C04646" />
        <text x={x} y={y - 10} fontSize="12" textAnchor="middle">
          {formatAmount(d.amount)}
        </text>
      </g>
    );
  });
}
