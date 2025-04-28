import { getFormatDateToString } from '../../../shared/utils/date';

const initialFormState = {
  id: null,
  category: '',
  description: '',
  paymentMethod: '',
  amount: 0,
  type: 'expense',
  date: getFormatDateToString(new Date()),
  createdAt: '',
};

export default initialFormState;
