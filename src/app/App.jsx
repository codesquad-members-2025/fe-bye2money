import AppLayout from '../layouts/AppLayout';
import { Outlet } from 'react-router-dom';
import Header from '../features/header';

function App() {
  return (
    <AppLayout>
      <Header />
      <Outlet />
    </AppLayout>
  );
}

export default App;
