import initialFormState from './initialFormState';

export default function formReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };

    case 'INIT_EDIT':
      return {
        ...action.payload,
      };

    case 'RESET_FORM':
      return initialFormState;

    default:
      return state;
  }
}
