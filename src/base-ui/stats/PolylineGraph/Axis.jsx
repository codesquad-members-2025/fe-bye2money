export default function Axis({ width, height, padding }) {
  const { left, right, top, bottom } = padding;

  return (
    <>
      {/* X축 */}
      <line
        x1={left}
        y1={height - bottom}
        x2={width - right}
        y2={height - bottom}
        stroke="#ccc"
        strokeWidth="1"
      />

      {/* Y축 */}
      <line
        x1={left}
        y1={height - bottom}
        x2={left}
        y2={top}
        stroke="#ccc"
        strokeWidth="1"
      />
    </>
  );
}
