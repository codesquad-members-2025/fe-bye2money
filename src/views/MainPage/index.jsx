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
