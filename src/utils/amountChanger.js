function formatAmount(number) {
  return Number(number).toLocaleString(); // "1,000,000"
}

function parseAmount(str) {
  return parseInt(str.replace(/,/g, ""), 10);
}

export { formatAmount, parseAmount };
