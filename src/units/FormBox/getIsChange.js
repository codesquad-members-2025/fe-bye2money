export default function getIsChange(formState, selectedTransactions) {
  const validations = [
    formState.regDate !== selectedTransactions.regDate,
    formState.amount !== selectedTransactions.amount,
    formState.currentType !== selectedTransactions.currentType,
    formState.description !== selectedTransactions.description,
    formState.method !== selectedTransactions.method,
    formState.classification !== selectedTransactions.classification,
  ];
  return validations.includes(true);
}
