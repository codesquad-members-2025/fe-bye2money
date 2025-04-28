function PaymentMethodSelect({ value, options, onChange }) {
  return (
    <div>
      <label>결제수단</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">선택하세요</option>
        {options.map((method) => (
          <option key={method.id} value={method.name}>
            {method.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PaymentMethodSelect;
