export default function mainPageReducer(state, action) {
  switch (action.type) {
    case "ADD_TRANSACTION": {
      //폼박스 컴포넌트에서 데이터 등록시 대응하는 로직
      return [...state, action.payload];
    }
    case "EDIT_TRANSACTION": {
      //폼박스 컴포넌트에서 데이터 편집시 대응하는 로직
      return action.isSamePage
        ? [
            ...state.filter((item) => item.id !== action.payload.id),
            action.payload,
          ]
        : state.filter((item) => item.id !== action.payload.id);
    }
    case "GET_ALL_TRANSACTION": {
      //데이터 전체 패치해올때 대응하는 로직
      return action.payload;
    }
    case "DELETE_TRANSACTION": {
      //로그 컴포넌트에서 데이터 삭제할때 대응하는 로직
      return state.filter((item) => item.id !== action.payload.id);
    }
  }
}
