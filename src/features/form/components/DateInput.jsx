function DateInput({ value, onChange }) {
  return (
    <div>
      <label>일자</label>
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default DateInput;
