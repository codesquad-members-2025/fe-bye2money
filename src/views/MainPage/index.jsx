//여기서 전체 데이터를 다뤄야함.
import Header from "../../units/Header";
import { Outlet } from "react-router-dom";
import { useReducer } from "react";

export default function MainPage() {
  const [state, dispatch] = useReducer(mainReducer, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
