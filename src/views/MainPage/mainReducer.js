export default function mainReducer(state, action) {
  switch (action.type) {
    case "TRANSACTION_ADD": {
      //폼박스 컴포넌트에서 데이터 등록시 대응하는 로직
      return [...state, action.payload];
    }
    case "TRANSACTION_EDIT": {
      //폼박스 컴포넌트에서 데이터 편집시 대응하는 로직
      return [
        ...state.filter((item) => item.id !== action.payload.id),
        action.payload,
      ];
    }
    case "TRANSACTION_GET_ALL": {
      //데이터 전체 패치해올때 대응하는 로직
      return action.payload;
    }
    case "TRANSACTION_DELETE": {
      //로그 컴포넌트에서 데이터 삭제할때 대응하는 로직
      return state.filter((item) => item.id !== action.payload.id);
    }
  }
}
