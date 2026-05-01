import { Search, Filter, Plus, ChevronLeft, ChevronRight, Edit, Trash2, ArrowDown, TrendingUp, Users, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function Records() {
  const navigate = useNavigate();

  const records = [
    { id: '#REC-8291', name: 'Jane Dorothy', initials: 'JD', email: 'jane.dorothy@enterprise.com', date: 'Oct 24, 2023', status: 'Active', statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
    { id: '#REC-8292', name: 'Marcus Knight', initials: 'MK', email: 'm.knight@logistics.net', date: 'Oct 22, 2023', status: 'Pending', statusColor: 'bg-amber-50 text-amber-700 border-amber-100' },
    { id: '#REC-8293', name: 'Aisha Sharma', initials: 'AS', email: 'aisha.s@techflow.io', date: 'Oct 21, 2023', status: 'Active', statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
    { id: '#REC-8294', name: 'Thomas Burke', initials: 'TB', email: 'tburke@foundation.org', date: 'Oct 20, 2023', status: 'Archived', statusColor: 'bg-slate-100 text-slate-700 border-slate-200' },
  ];

  const stats = [
    { label: 'TOTAL VALUE', value: '$1.2M', trend: '+12%', icon: 'payments' },
    { label: 'ACTIVE USERS', value: '1,482', trend: null, icon: 'group' },
    { label: 'SYSTEM UPTIME', value: '99.98%', trend: 'Next maintenance in 12 days', icon: 'analytics' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8 max-w-7xl mx-auto space-y-8"
    >
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold text-on-surface">Data Records</h1>
          <p className="text-on-surface-variant text-base mt-2">Central management for all system entities and logs.</p>
        </div>
        <button 
          onClick={() => navigate('/records/new')}
          className="bg-primary text-white font-semibold py-2.5 px-5 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity shadow-sm"
          id="btn-add-record"
        >
          <Plus className="h-4 w-4" />
          <span>Add New Record</span>
        </button>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl shadow-sm flex flex-wrap gap-4 items-center" id="filters-bar">
        <div className="flex-1 min-w-[240px] relative font-sans">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline h-4 w-4" />
          <input 
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm h-10" 
            placeholder="Filter records..." 
            type="text" 
          />
        </div>
        <div className="flex gap-2">
          <select className="px-4 py-2 border border-slate-200 rounded-lg bg-white text-sm outline-none focus:ring-2 focus:ring-primary/20 h-10">
            <option>Category: All</option>
            <option>System</option>
            <option>User-Generated</option>
            <option>Third-Party</option>
          </select>
          <select className="px-4 py-2 border border-slate-200 rounded-lg bg-white text-sm outline-none focus:ring-2 focus:ring-primary/20 h-10">
            <option>Status: Active</option>
            <option>Pending</option>
            <option>Archived</option>
          </select>
          <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2 h-10">
            <Filter className="h-4 w-4" /> Advanced
          </button>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm" id="records-table-container">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                <div className="flex items-center gap-1">
                  ID <ArrowDown className="h-3 w-3" />
                </div>
              </th>
              <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">NAME</th>
              <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">EMAIL</th>
              <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">DATE CREATED</th>
              <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">STATUS</th>
              <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {records.map((rec, i) => (
              <tr 
                key={i} 
                className="hover:bg-slate-50 transition-colors group cursor-pointer"
                onClick={() => navigate(`/records/${i+1}`)}
              >
                <td className="px-6 py-4 font-mono text-xs text-primary font-bold">{rec.id}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">{rec.initials}</div>
                    <span className="font-semibold text-slate-900">{rec.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-600 text-sm">{rec.email}</td>
                <td className="px-6 py-4 text-slate-500 text-sm">{rec.date}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${rec.statusColor} border`}>
                    {rec.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-1">
                    <button 
                      onClick={(e) => { e.stopPropagation(); navigate(`/records/${i+1}/edit`); }}
                      className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); }}
                      className="p-2 text-slate-400 hover:text-error hover:bg-error/5 rounded-lg transition-all"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <p className="text-sm text-slate-500">Showing <span className="font-semibold text-slate-900">1 to 10</span> of <span className="font-semibold text-slate-900">248</span> records</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-400 hover:bg-slate-50 cursor-not-allowed">
              <ChevronLeft className="h-4 w-4" />
            </button>
            {[1, 2, 3].map(p => (
              <button key={p} className={`w-8 h-8 rounded-lg font-semibold text-sm ${p === 1 ? 'bg-primary text-white' : 'text-slate-600 hover:bg-slate-200'}`}>
                {p}
              </button>
            ))}
            <span className="text-slate-400 mx-1 text-sm font-bold">...</span>
            <button className="w-8 h-8 rounded-lg text-slate-600 font-semibold text-sm hover:bg-slate-200">25</button>
            <button className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="records-footer-grid">
        <div className="bg-primary text-white p-6 rounded-2xl relative overflow-hidden group shadow-lg">
          <div className="relative z-10">
            <p className="text-indigo-200 text-[10px] font-bold tracking-widest uppercase">TOTAL VALUE</p>
            <h4 className="text-3xl font-bold mt-1">$1.2M</h4>
            <p className="text-indigo-300 text-xs mt-4 flex items-center gap-1 font-semibold">
              <TrendingUp className="h-4 w-4" /> +12% from last month
            </p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="absolute -right-4 -bottom-4 opacity-10 font-bold"
          >
            <BarChart3 className="w-32 h-32" />
          </motion.div>
        </div>

        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-400 text-[10px] font-bold tracking-widest uppercase">ACTIVE USERS</p>
              <h4 className="text-3xl font-bold mt-1 text-slate-800">1,482</h4>
            </div>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg shadow-inner">
              <Users className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-4 flex -space-x-2">
            {[1, 2, 3].map(j => (
              <img 
                key={j}
                className="w-8 h-8 rounded-full border-2 border-white shadow-sm" 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${j + 20}`} 
                alt="user"
              />
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500 shadow-sm">+12</div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-400 text-[10px] font-bold tracking-widest uppercase">SYSTEM UPTIME</p>
              <h4 className="text-3xl font-bold mt-1 text-slate-800">99.98%</h4>
            </div>
            <div className="p-2 bg-primary/10 text-primary rounded-lg shadow-inner">
              <BarChart3 className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-4 bg-slate-100 h-1.5 w-full rounded-full overflow-hidden">
            <div className="bg-primary h-full w-[99.98%] shadow-[0_0_8px_rgba(31,16,142,0.3)]"></div>
          </div>
          <p className="mt-2 text-[10px] text-slate-400 font-semibold">Next maintenance in 12 days</p>
        </div>
      </div>
    </motion.div>
  );
}
