import { ChevronRight, Info, HardDrive, Cpu, Upload, History, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditRecord() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8 max-w-7xl mx-auto space-y-8"
    >
      <div className="flex justify-between items-end">
        <div>
          <nav className="flex items-center gap-2 text-on-surface-variant text-[10px] uppercase font-bold tracking-widest mb-2">
            <button onClick={() => navigate('/records')} className="hover:text-primary transition-colors">Records</button>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary font-bold">Edit Record {id}</span>
          </nav>
          <h1 className="text-3xl font-bold text-on-surface">Edit Asset Record</h1>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/records')}
            className="px-5 py-2.5 text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors rounded-lg font-bold text-sm shadow-sm"
          >
            Cancel
          </button>
          <button 
            onClick={() => navigate('/records')}
            className="px-6 py-2.5 bg-primary text-white hover:bg-primary-container transition-colors rounded-lg font-bold text-sm shadow-lg shadow-primary/20"
          >
            Update Record
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 space-y-8">
          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-50 pb-4 mb-8">
              <h2 className="text-xl font-bold text-on-surface">General Information</h2>
              <span className="text-[10px] font-bold text-indigo-700 bg-primary/5 border border-primary/10 px-3 py-1 rounded-md uppercase tracking-widest">Asset ID: ENT-7842</span>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-2">
                <label className="text-[10px] font-bold text-on-surface-variant block mb-2 uppercase tracking-widest">RECORD NAME</label>
                <input 
                  className="w-full bg-white border border-slate-200 rounded-lg py-3 px-4 text-sm font-bold focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" 
                  type="text" 
                  defaultValue="Quantum Infrastructure Backbone" 
                />
              </div>
              <div className="col-span-1">
                <label className="text-[10px] font-bold text-on-surface-variant block mb-2 uppercase tracking-widest">ASSET TYPE</label>
                <select className="w-full bg-white border border-slate-200 rounded-lg py-3 px-4 text-sm font-bold focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none appearance-none">
                  <option>Hardware</option>
                  <option selected>Infrastructure</option>
                  <option>Software</option>
                  <option>Cloud Service</option>
                </select>
              </div>
              <div className="col-span-1">
                <label className="text-[10px] font-bold text-on-surface-variant block mb-2 uppercase tracking-widest">SERIAL NUMBER</label>
                <input 
                  className="w-full bg-white border border-slate-200 rounded-lg py-3 px-4 text-sm font-bold focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" 
                  type="text" 
                  defaultValue="SN-99801-QX" 
                />
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm border-l-4 border-primary">
            <div className="flex items-center justify-between border-b border-slate-50 pb-4 mb-8">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-on-surface">Operational Status</h2>
                <span className="bg-primary/10 text-primary text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">Modified</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-1">
                <label className="text-[10px] font-bold text-primary block mb-2 uppercase tracking-widest">CURRENT STATUS</label>
                <div className="relative">
                  <select className="w-full bg-primary/5 border-primary border rounded-lg py-3 px-4 text-sm font-bold focus:ring-4 focus:ring-primary/20 transition-all outline-none appearance-none cursor-pointer">
                    <option>Maintenance</option>
                    <option selected>Operational</option>
                    <option>Decommissioned</option>
                  </select>
                </div>
                <p className="text-[10px] text-primary mt-3 flex items-center gap-2 font-bold uppercase tracking-wider">
                  <Info className="h-3 w-3" /> Changed from 'Maintenance' 5 minutes ago
                </p>
              </div>
              <div className="col-span-1">
                <label className="text-[10px] font-bold text-on-surface-variant block mb-2 uppercase tracking-widest">DEPLOYMENT DATE</label>
                <input 
                  className="w-full bg-white border border-slate-200 rounded-lg py-3 px-4 text-sm font-bold focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" 
                  type="date" 
                  defaultValue="2023-11-14" 
                />
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-on-surface border-b border-slate-50 pb-4 mb-8">Configuration Details</h2>
            <div className="space-y-4">
              {[
                { title: 'Processor Allocation', sub: '64-Core Quantum Threading', icon: Cpu, action: 'Edit Node' },
                { title: 'Storage Capacity', sub: '2.4 PB Solid State', icon: HardDrive, action: 'Manage Storage' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary/20 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-lg shadow-inner group-hover:text-primary transition-colors">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-slate-800">{item.title}</p>
                      <p className="text-xs text-on-surface-variant font-medium mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                  <button className="text-primary font-bold text-xs hover:underline uppercase tracking-widest">{item.action}</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-8">
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <img 
              alt="Asset Preview" 
              className="w-full h-56 object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500" 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=600" 
            />
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">PREVIEW IMAGE</span>
                <button className="text-primary font-bold text-xs flex items-center gap-1.5 uppercase hover:underline">
                  <Upload className="h-3 w-3" /> Change
                </button>
              </div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Last updated: Oct 12, 2023 at 14:30 PM</p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <h3 className="text-lg font-bold text-on-surface mb-6 border-b border-slate-50 pb-2">System Metadata</h3>
            <div className="space-y-5">
              {[
                { label: 'Created By', value: 'Sarah Jenkins' },
                { label: 'Created Date', value: '2023-01-12' },
                { label: 'Last Modified', value: 'Just now' },
                { label: 'Environment', value: 'Production', badge: true },
              ].map((row, i) => (
                <div key={i} className="flex justify-between items-center text-sm font-medium">
                  <span className="text-on-surface-variant font-bold text-[10px] uppercase tracking-widest">{row.label}</span>
                  <span className={row.badge ? 'px-3 py-0.5 bg-emerald-50 text-emerald-700 rounded-full text-[9px] font-bold uppercase tracking-wider' : 'text-slate-800 font-bold'}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100">
              <button className="w-full py-3 flex items-center justify-center gap-2 text-on-surface-variant hover:bg-slate-50 rounded-xl transition-all border border-slate-200 group">
                <History className="h-4 w-4 group-hover:rotate-[-45deg] transition-transform" />
                <span className="text-xs font-bold uppercase tracking-widest">View Revision History</span>
              </button>
            </div>
          </div>

          <div className="bg-error/5 border border-error/20 rounded-xl p-8 shadow-sm">
            <h3 className="text-lg font-bold text-error mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" /> Danger Zone
            </h3>
            <p className="text-xs text-error font-medium leading-relaxed mb-6">
              Deleting or deactivating this record will immediately impact 4 downstream connected services.
            </p>
            <button className="w-full py-3 bg-white text-error border border-error/30 hover:bg-error hover:text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-sm">
              Deactivate Record
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
