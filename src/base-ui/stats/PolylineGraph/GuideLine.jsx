function GuideLineX(width, height, padding, count) {
  const { left, right, top, bottom } = padding;

  const x1 = left;
  const x2 = width - right;

  for (let i = 0; i < count; i++) {
    const y = (height - top - bottom) * (i / count) + top;
    return <line key={i} x1={x1} y1={y} x2={x2} y2={y} />;
  }
}

function GuideLineY(width, height, padding, count) {
  const { left, right, top, bottom } = padding;

  const y1 = top;
  const y2 = height - bottom;

  for (let i = 0; i < count; i++) {
    const x = (width - right - left) * ((i + 1) / count) + left;
    return <line key={i} x1={x} y1={y1} x2={x} y2={y2} />;
  }
}

export { GuideLineX, GuideLineY };
