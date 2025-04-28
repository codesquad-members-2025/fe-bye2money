function ConfirmButton({ onClick, isFormValid }) {
  return (
    <button type="button" disabled={!isFormValid} onClick={onClick}>
      ✔
    </button>
  );
}

export default ConfirmButton;
