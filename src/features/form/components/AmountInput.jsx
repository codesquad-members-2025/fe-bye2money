function AmountInput({ type, amount, onTypeToggle, onAmountChange }) {
  const formatAmount = (value) => {
    if (!value) return '';
    const num = Number(value.toString().replaceAll(',', ''));
    return num.toLocaleString();
  };

  const handleChange = (e) => {
    const rawValue = e.target.value.replace(/,/g, ''); // 쉼표 제거
    const numericValue = parseInt(rawValue.replace(/\D/g, ''), 10); // 숫자만 추출

    onAmountChange(!isNaN(numericValue) ? numericValue : 0);
  };

  return (
    <div>
      <label>금액</label>
      <button type="button" onClick={onTypeToggle}>
        {type === 'expense' ? '–' : '+'}
      </button>
      <input
        type="text"
        value={formatAmount(amount)}
        onChange={handleChange}
        placeholder="0"
      />
      <span>원</span>
    </div>
  );
}

export default AmountInput;
