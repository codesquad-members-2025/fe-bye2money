import { useState, useEffect, useRef } from "react";
import { useTheme } from "styled-components";
import styled from "styled-components";

const StyledCircle = styled.circle`
  transition: ${({ $transFormRef }) =>
    $transFormRef ? "stroke-dashoffset 2s ease-out" : "none"};
  transform: rotate(-90deg);
  transform-origin: center;
`;

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
  const transFormRef = useRef(true);

  useEffect(() => {
    transFormRef.current = false;
    setOffset(0);
    const timer = setTimeout(() => {
      transFormRef.current = true;
      setOffset(-circumference);
    }, 100);
    return () => clearTimeout(timer);
  }, [data]);

  return (
    <StyledCircle
      cx={cx}
      cy={cy}
      r={radius}
      fill="transparent"
      stroke={theme.color.token.surface.default}
      strokeWidth={strokeWidth}
      strokeDasharray={circumference}
      strokeDashoffset={offset}
      $transFormRef={transFormRef.current}
    />
  );
}
