import { useState, useEffect } from "react";
import { useTheme } from "styled-components";

export function MaskCircle({
  cx,
  cy,
  radius,
  strokeWidth,
  circumference,
  data,
}) {
  const [offset, setOffset] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    setOffset(0);
    const timer = setTimeout(() => setOffset(-circumference), 100);
    return () => clearTimeout(timer);
  }, [data]);

  return (
    <circle
      cx={cx}
      cy={cy}
      r={radius}
      fill="transparent"
      stroke={theme.color.token.surface.default}
      strokeWidth={strokeWidth}
      strokeDasharray={circumference}
      strokeDashoffset={offset}
      style={{
        transition: "stroke-dashoffset 2s ease-out",
        transform: `rotate(-90deg)`,
        transformOrigin: "center",
      }}
    />
  );
}
