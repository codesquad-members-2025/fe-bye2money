import { formatDate } from '../utils/format';

function DateInput({ value, onChange }) {
  function handleChange(e) {
    const rawValue = e.target.value;
    const numbersOnly = rawValue.replace(/\D/g, '');

    const formatted = formatDate(numbersOnly);

    onChange(formatted);
  }

  return (
    <div>
      <label>일자</label>
      <input
        placeholder="YYYY.MM.DD"
        value={formatDate(value)}
        onChange={handleChange}
      />
    </div>
  );
}

export default DateInput;
