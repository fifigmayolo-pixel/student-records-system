import { ArrowLeft, Edit, Trash2, CheckCircle, Mail, Phone, MapPin, FileText, Terminal, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate, useParams } from 'react-router-dom';

export default function RecordDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const activityLog = [
    { text: 'Record accessed by Admin', time: '2 minutes ago', active: true },
    { text: 'Email notification sent', time: 'Yesterday at 4:30 PM', active: false },
    { text: 'Initial data synchronization', time: 'Oct 24, 2023', active: false },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8 max-w-7xl mx-auto space-y-8"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-2">
        <div>
          <nav className="flex items-center space-x-2 text-slate-500 text-sm mb-2">
            <button onClick={() => navigate('/records')} className="hover:text-primary transition-colors">Records</button>
            <ChevronRight className="h-3 w-3" />
            <span className="text-slate-900 font-bold">Record Details</span>
          </nav>
          <h1 className="text-3xl font-bold text-on-surface">Review System Entry #REC-8842</h1>
        </div>
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => navigate('/records')}
            className="flex items-center px-4 py-2 text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all shadow-sm active:scale-95 text-sm font-semibold"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Back
          </button>
          <button 
            onClick={() => navigate(`/records/${id}/edit`)}
            className="flex items-center px-4 py-2 text-white bg-primary rounded-lg hover:opacity-90 transition-all shadow-md active:scale-95 text-sm font-semibold"
          >
            <Edit className="h-4 w-4 mr-2" /> Edit Record
          </button>
          <button 
            className="flex items-center px-4 py-2 text-error bg-error/10 border border-error/20 rounded-lg hover:bg-error/20 transition-all active:scale-95 text-sm font-semibold"
          >
            <Trash2 className="h-4 w-4 mr-2" /> Delete
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4 space-y-8">
          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <div className="flex flex-col items-center text-center pb-8 border-b border-slate-100 mb-8">
              <div className="relative mb-4">
                <img 
                  alt="Record Subject" 
                  className="h-24 w-24 rounded-full border-4 border-primary/20 ring-1 ring-slate-200 shadow-xl" 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alexander" 
                />
                <span className="absolute bottom-1 right-1 h-5 w-5 bg-emerald-500 border-2 border-white rounded-full shadow-sm"></span>
              </div>
              <h2 className="text-2xl font-bold text-on-surface">Alexander Sterling</h2>
              <p className="text-sm text-slate-500 mt-1 font-medium">Senior Systems Architect</p>
              <div className="mt-4 inline-flex items-center px-4 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-100 shadow-sm uppercase tracking-wider">
                <CheckCircle className="h-3 w-3 mr-1.5 fill-emerald-700 text-emerald-50" />
                Verified Record
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-bold text-slate-400 block mb-1 uppercase tracking-widest">SYSTEM ID</label>
                <code className="text-sm font-mono text-primary bg-primary/5 px-2 py-1 rounded-md block border border-primary/10">#ID-0092-XQ-2024</code>
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-400 block mb-1 uppercase tracking-widest">DATA CREATION</label>
                <p className="text-sm text-on-surface font-bold">October 24, 2023</p>
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-400 block mb-1 uppercase tracking-widest">LAST MODIFIED</label>
                <p className="text-sm text-on-surface font-bold">Jan 12, 2024 • 09:42 AM</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <h3 className="text-lg font-bold mb-6 text-on-surface border-b border-slate-50 pb-2">Activity Log</h3>
            <div className="space-y-8 relative before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-slate-100">
              {activityLog.map((log, i) => (
                <div key={i} className="relative pl-10">
                  <span className={`absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-white shadow-md ${log.active ? 'bg-primary scale-110' : 'bg-slate-200 scale-90'}`}></span>
                  <p className={`text-sm font-bold ${log.active ? 'text-on-surface' : 'text-slate-500'}`}>{log.text}</p>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">{log.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-8 space-y-8">
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <div className="px-8 py-5 border-b border-slate-100 bg-slate-50/50 flex items-center">
              <FileText className="text-primary mr-3 h-5 w-5" />
              <h3 className="text-lg font-bold text-on-surface">Communication & Identity</h3>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">FULL NAME</label>
                <p className="text-base text-on-surface font-bold">Alexander Marcus Sterling</p>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">PRIMARY EMAIL</label>
                <div className="flex items-center text-primary font-bold hover:underline cursor-pointer">
                  <Mail className="h-4 w-4 mr-2" /> alex.sterling@enterprise.co
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">PHONE NUMBER</label>
                <div className="flex items-center text-on-surface font-bold">
                  <Phone className="h-4 w-4 mr-2 text-slate-400" /> +1 (555) 012-9938
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">LOCATION</label>
                <div className="flex items-center text-on-surface font-bold">
                  <MapPin className="h-4 w-4 mr-2 text-slate-400" /> San Francisco, CA (Remote)
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <div className="px-8 py-5 border-b border-slate-100 bg-slate-50/50 flex items-center">
              <Terminal className="text-primary mr-3 h-5 w-5" />
              <h3 className="text-lg font-bold text-on-surface">Detailed Description</h3>
            </div>
            <div className="p-8">
              <p className="text-slate-600 leading-relaxed font-medium">
                Alexander acts as the primary architect for the EnterpriseSuite infrastructure division. He specializes in high-availability distributed systems and cloud migration strategies. This record documents his integration into the core management module and tracks his security clearance levels across multiple regional nodes.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {['Cloud Architecture', 'Infrastructure', 'Security Clearance Level 4'].map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-lg border border-slate-200 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <div className="px-8 py-5 border-b border-slate-100 bg-slate-50/50 flex items-center">
              <Terminal className="text-primary mr-3 h-5 w-5" />
              <h3 className="text-lg font-bold text-on-surface">Technical Metadata</h3>
            </div>
            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-slate-100">
                {[
                  { label: 'Environment', value: 'Production-Cluster-A' },
                  { label: 'Protocol Compliance', value: 'SOX-2, GDPR, HIPAA' },
                  { label: 'Linked Accounts', value: '8 Linked Profiles' },
                  { label: 'Data Retention Policy', value: 'Standard - 7 Years', badge: true },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-8 py-5 text-slate-500 font-bold uppercase text-[10px] tracking-widest">{row.label}</td>
                    <td className="px-8 py-5 text-on-surface font-bold">
                      {row.badge ? (
                        <span className="px-3 py-1 bg-primary/5 text-primary rounded-md border border-primary/10">{row.value}</span>
                      ) : row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="pt-12 pb-8 flex items-center justify-between border-t border-slate-200">
        <div className="flex items-center space-x-6 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
          <button className="hover:text-primary transition-colors">Export as PDF</button>
          <span>•</span>
          <button className="hover:text-primary transition-colors">Print Record</button>
          <span>•</span>
          <button className="hover:text-primary transition-colors">Audit History</button>
        </div>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Encrypted with 256-bit AES Security Standards</p>
      </div>
    </motion.div>
  );
}
