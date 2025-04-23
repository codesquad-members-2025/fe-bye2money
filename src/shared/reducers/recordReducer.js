export default function recordReducer(state, action) {
  switch (action.type) {
    case 'SET_RECORDS':
      return action.payload;
    case 'ADD_RECORD':
      return [...state, action.payload];
    case 'UPDATE_RECORD':
      return state.map((record) =>
        record.id === action.payload.id
          ? { ...record, ...action.payload }
          : record
      );
    case 'DELETE_RECORD':
      return state.filter((record) => record.id !== action.payload);
    default:
      return state;
  }
}
