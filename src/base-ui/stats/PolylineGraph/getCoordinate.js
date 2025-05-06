const getCoordinate = {
  points: function (data, width, height, padding) {
    const max = Math.max(...data.map((d) => d.amount));
    return data.map(
      (d) =>
        `${this.x(d.month, width, padding)},${this.y(
          d.amount,
          max,
          height,
          padding
        )}`
    );
  },
  x: function (month, width, padding) {
    const graphWidth = width - padding.left - padding.right;
    const gap = graphWidth / 11; // 11칸 (1~12는 11칸)
    return padding.left + gap * (month - 1);
  },
  y: function (amount, max, height, padding) {
    const graphHeight = height - padding.top - padding.bottom;
    const ratio = amount / max;
    return padding.top + (1 - ratio) * graphHeight;
  },
};

export default getCoordinate;
