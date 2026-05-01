import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex pt-16 h-screen">
        <Sidebar />
        <main className="ml-64 flex-1 bg-surface-container-lowest overflow-y-auto" id="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
