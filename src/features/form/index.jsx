import CATEGORY_TYPES from '../../shared/constants/categoryOptions';
import useFetchPayments from '../../shared/hooks/useFetchPayments';
import Form from './components/Form';

const TEST_USER_ID = 1;

function FormContainer({ formData, onChange, onSubmit, onReset, isFormValid }) {
  const { payments, loading, error } = useFetchPayments(TEST_USER_ID);

  if (loading) return <div>결제수단을 불러오는 중입니다...</div>;
  if (error) return <div>에러: {error}</div>;

  return (
    <Form
      formData={formData}
      onChange={onChange}
      onSubmit={onSubmit}
      onReset={onReset}
      paymentOptions={payments}
      categoryOptions={CATEGORY_TYPES[formData.type]}
      isFormValid={isFormValid}
    />
  );
}

export default FormContainer;
