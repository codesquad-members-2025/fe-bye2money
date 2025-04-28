function CategorySelect({ value, options, onChange }) {
  return (
    <div>
      <label>분류</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">선택하세요</option>
        {options.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategorySelect;
