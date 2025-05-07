import { useTheme } from "styled-components";
import chipColorMap from "../../util/chipColorMap";
import { MaskCircle } from "./chartMaskHandler";

export default function DonutChart({
  data,
  mainPageState,
  svgSize = 254,
  strokeWidth = svgSize * 0.2,
}) {
  const theme = useTheme();
  const circleRadius = (svgSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * circleRadius;
  let cumulativePercentage = 0;
  return (
    <svg width={svgSize} height={svgSize}>
      {data.map(({ classification, percentage }, idx) => {
        const filled = (percentage / 100) * circumference;
        const gap = circumference - filled;
        const dashArray = `${filled}, ${gap}`;
        const dashOffset = circumference * (1 - cumulativePercentage / 100);
        if (gap < 0)
          console.warn("gap is negative!", { classification, percentage });
        const rotation = -90;
        const strokeColor =
          theme.color.token.chip[chipColorMap[classification]];
        const circle = (
          <circle
            key={idx}
            r={circleRadius}
            cx={svgSize / 2}
            cy={svgSize / 2}
            fill="transparent"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            transform={`rotate(${rotation}, ${svgSize / 2}, ${svgSize / 2})`}
          />
        );

        cumulativePercentage += percentage;
        return circle;
      })}
      <MaskCircle
        data={data}
        cx={svgSize / 2}
        cy={svgSize / 2}
        radius={circleRadius}
        strokeWidth={strokeWidth}
        circumference={circumference}
      />
    </svg>
  );
}
