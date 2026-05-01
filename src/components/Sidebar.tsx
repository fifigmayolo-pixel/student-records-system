import { LayoutDashboard, Database, PlusCircle, Settings, Building2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'Records', icon: Database, path: '/records' },
    { name: 'Add New', icon: PlusCircle, path: '/records/new' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-slate-50 border-r border-slate-200 flex flex-col pt-4 overflow-y-auto font-sans text-sm font-medium">
      <div className="px-6 mb-6">
        <div className="flex items-center space-x-3 mb-1">
          <div className="h-8 w-8 rounded bg-primary flex items-center justify-center text-white">
            <Building2 className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-on-surface font-bold text-sm leading-none">Management</h2>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider">v2.4.0</span>
          </div>
        </div>
      </div>
      <nav className="space-y-1 px-3 flex-grow">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `group flex items-center px-4 py-3 space-x-3 transition-all rounded-lg ${
                isActive
                  ? 'bg-white text-primary border-r-2 border-primary shadow-sm'
                  : 'text-slate-500 hover:text-primary hover:bg-slate-100'
              }`
            }
            id={`nav-item-${item.name.toLowerCase().replace(' ', '-')}`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
      <div className="p-6 mt-auto">
        <div className="bg-primary/5 rounded-xl p-4 border border-primary/10" id="sidebar-status-card">
          <p className="text-xs text-primary font-semibold mb-2">System Status</p>
          <div className="flex items-center text-[11px] text-primary/80">
            <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
            All systems operational
          </div>
        </div>
      </div>
    </aside>
  );
}
