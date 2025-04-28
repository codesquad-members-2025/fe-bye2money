import { useReducer, useMemo } from 'react';
import { getSortedRecordsByDate } from '../../shared/utils/record';

function recordReducer(state, action) {
  switch (action.type) {
    case 'SET_RECORDS':
      return action.payload;
    case 'ADD_RECORD': {
      const { record: newRecord, isInCurrentMonth } = action.payload;
      return isInCurrentMonth ? [...state, newRecord] : state;
    }
    case 'UPDATE_RECORD': {
      const { record: updatedRecord, isInCurrentMonth } = action.payload;
      const exists = state.some((record) => record.id === updatedRecord.id);

      if (!isInCurrentMonth && exists) {
        // 날짜가 다른 달로 바뀌었으면 삭제
        return state.filter((record) => record.id !== updatedRecord.id);
      }
      if (isInCurrentMonth && exists) {
        // 같은 달이면 업데이트
        return state.map((record) =>
          record.id === updatedRecord.id ? updatedRecord : record
        );
      }
      return state;
    }
    case 'DELETE_RECORD': {
      const idToDelete = action.payload;
      return state.filter((prevRecord) => prevRecord.id !== idToDelete);
    }
    default:
      return state;
  }
}

function useRecordState() {
  const initialData = [];
  const [state, dispatch] = useReducer(recordReducer, initialData);

  // 최신순으로 정렬 후 반환
  const sortedRecords = useMemo(() => getSortedRecordsByDate(state), [state]);
  return { records: sortedRecords, dispatch };
}

export default useRecordState;
