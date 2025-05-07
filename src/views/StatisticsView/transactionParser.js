export default function transactionParser(transactions, expense) {
  const parsedData = transactions.reduce((acc, transaction) => {
    if (transaction.currentType === "earning") return acc;
    if (!acc[transaction.classification]) {
      acc[transaction.classification] = {
        classification: transaction.classification,
        percentage: 0,
        amount: 0,
      };
    }
    acc[transaction.classification].amount += transaction.amount;

    return acc;
  }, {});

  return Object.values(parsedData).map((category) => {
    category.percentage = Number(
      ((category.amount / expense) * 100).toFixed(1)
    );
    return category;
  });
}
