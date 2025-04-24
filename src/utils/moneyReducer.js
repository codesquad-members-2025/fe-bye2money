export default function moneyReducer(items) {
  const moneyResult = items.reduce(
    (acc, item) => {
      const parsedAmount = Number(item.amount.replace(/,/g, ""));
      if (item.currentType === "earning") {
        acc.earning += parsedAmount;
      } else {
        acc.expense += parsedAmount;
      }
      return acc;
    },
    { earning: 0, expense: 0 }
  );
  return {
    earning: moneyResult.earning.toLocaleString(),
    expense: moneyResult.expense.toLocaleString(),
  };
}
