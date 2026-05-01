import { TrendingUp, Users, BarChart3, Edit2, Trash2, ChevronRight, ChevronLeft, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const stats = [
    { label: 'Total Records', value: '12,842', trend: '+12%', sub: 'Updated 5m ago', icon: TrendingUp, color: 'text-primary' },
    { label: 'Recent Entries', value: '342', trend: 'this week', sub: 'Active now', icon: Users, color: 'text-emerald-600' },
    { label: 'Active Users', value: '89', trend: 'Online', sub: 'Live reporting', icon: BarChart3, color: 'text-indigo-600' },
  ];

  const recentEntries = [
    { id: '#TR-9042', name: 'Jane Doe', initials: 'JD', status: 'Active', date: 'Oct 24, 2023', color: 'bg-emerald-100 text-emerald-700' },
    { id: '#TR-8921', name: 'Marcus Knight', initials: 'MK', status: 'Pending', date: 'Oct 23, 2023', color: 'bg-amber-100 text-amber-700' },
    { id: '#TR-8700', name: 'Sarah Lopez', initials: 'SL', status: 'Archived', date: 'Oct 20, 2023', color: 'bg-slate-100 text-slate-700' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8 max-w-7xl mx-auto"
    >
      <header className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold text-on-surface" id="dashboard-title">Overview</h1>
          <p className="text-on-surface-variant text-base mt-2" id="dashboard-subtitle">Manage your organization's records and system activities.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" id="stats-grid">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2 block">{stat.label}</span>
              <div className="flex items-baseline space-x-2">
                <span className={`text-3xl font-bold ${stat.color}`}>{stat.value}</span>
                <span className={`text-xs font-bold flex items-center ${stat.label === 'Total Records' ? 'text-emerald-600' : 'text-slate-400'}`}>
                  {stat.trend === '+12%' && <TrendingUp className="h-3 w-3 mr-1" />} {stat.trend}
                </span>
              </div>
            </div>
            {stat.label === 'Recent Entries' ? (
              <div className="mt-4 flex -space-x-2">
                {[1, 2, 3].map(j => (
                  <img 
                    key={j}
                    className="w-6 h-6 rounded-full ring-2 ring-white border border-slate-200" 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${j + 10}`} 
                    alt="user"
                  />
                ))}
                <div className="w-6 h-6 rounded-full ring-2 ring-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">+12</div>
              </div>
            ) : (
              <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full ${stat.color.replace('text-', 'bg-')} w-3/4`}></div>
              </div>
            )}
            <div className="mt-4 pt-4 border-t border-slate-50 text-xs text-slate-400">{stat.sub}</div>
          </motion.div>
        ))}
      </div>

      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden" id="recent-entries-card">
        <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-on-surface">Recent Data Entries</h2>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-semibold rounded-lg hover:bg-slate-200 transition-colors">Export CSV</button>
            <button 
              onClick={() => navigate('/records/new')}
              className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Plus className="h-4 w-4" /> Add New Entry
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left" id="recent-entries-table">
            <thead className="bg-slate-50 text-slate-500 text-[11px] font-bold uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Record ID</th>
                <th className="px-6 py-4">Assigned To</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Last Modified</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {recentEntries.map((entry, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors group cursor-pointer" onClick={() => navigate('/records/1')}>
                  <td className="px-6 py-4 font-semibold text-primary">{entry.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold">{entry.initials}</div>
                      <span className="text-on-surface font-medium">{entry.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 ${entry.color} text-[10px] font-bold rounded-full uppercase`}>{entry.status}</span>
                  </td>
                  <td className="px-6 py-4 text-slate-500 text-sm">{entry.date}</td>
                  <td className="px-6 py-4 text-right space-x-3">
                    <button className="text-slate-400 hover:text-primary transition-colors">
                      <Edit2 className="h-4 w-4" />
                    </button>
                    <button className="text-slate-400 hover:text-error transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs text-slate-500">Showing 3 of 12,842 records</p>
          <div className="flex space-x-1">
            <button className="p-1 rounded hover:bg-slate-200 text-slate-400 transition-colors">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="p-1 rounded hover:bg-slate-200 text-slate-400 transition-colors">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
