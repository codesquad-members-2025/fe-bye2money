//여기서 전체 데이터를 다뤄야함.

import Header from "../../units/Header";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
