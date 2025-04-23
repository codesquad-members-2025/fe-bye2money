// src/components/layout/Layout.tsx
import { Outlet } from "react-router-dom";
import Layout from "../features/layout/Layout";

const App = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Layout />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
