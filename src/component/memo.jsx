const validateForm = () => {
  const data = dataForm.current;
  return data.date && date.amount && contents && method && classification;
};

function handleInputChange(field, value) {
  formData.current[field] = value;
  validateForm();
}

const formData = useRef({
  regDate: null,
  amount: 0,
  contents: null,
  method: null,
  classification: null,
});
