function DescriptionInput({ value, onChange }) {
  return (
    <div>
      <label>내용</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="입력하세요"
        maxLength={32}
      />
      <span>{value.length}/32</span>
    </div>
  );
}

export default DescriptionInput;
