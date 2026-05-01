import { User, Mail, Phone, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function CreateRecord() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8 max-w-3xl mx-auto"
    >
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-on-surface mb-2">Create New Record</h1>
        <p className="text-on-surface-variant text-base">Fill in the information below to add a new entity to the EnterpriseSuite database.</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8" id="create-record-card">
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/records'); }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block">Name</label>
              <div className="relative group">
                <input 
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 outline-none" 
                  placeholder="John Doe" 
                  type="text"
                  required
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
                  <User className="text-slate-300 group-focus-within:text-primary h-4 w-4" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block">Email Address</label>
              <div className="relative group">
                <input 
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 outline-none" 
                  placeholder="john@example.com" 
                  type="email"
                  required
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
                  <Mail className="text-slate-300 group-focus-within:text-primary h-4 w-4" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block">Phone Number</label>
            <div className="relative group">
              <input 
                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 outline-none" 
                placeholder="+1 (555) 000-0000" 
                type="tel"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
                <Phone className="text-slate-300 group-focus-within:text-primary h-4 w-4" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block">Description</label>
            <textarea 
              className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 outline-none resize-none min-h-[120px]" 
              placeholder="Enter record details, notes, and metadata..." 
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block">Record Category</label>
            <div className="flex flex-wrap gap-2">
              {['Client', 'Internal', 'Vendor'].map(cat => (
                <label key={cat} className="cursor-pointer">
                  <input defaultChecked={cat === 'Client'} className="hidden peer" name="category" type="radio" value={cat} />
                  <span className="px-5 py-2 rounded-full border border-slate-200 bg-slate-50 text-slate-600 font-bold text-xs peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all inline-block shadow-sm">
                    {cat}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-end space-x-4">
            <button 
              type="button" 
              onClick={() => navigate('/records')}
              className="px-6 py-2.5 rounded-lg font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors duration-200 active:scale-95 text-sm"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-8 py-2.5 rounded-lg font-bold text-white bg-primary hover:bg-primary-container transition-all duration-200 active:scale-95 shadow-lg shadow-primary/20 text-sm flex items-center gap-2"
            >
              Save Record <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6" id="create-record-info-grid">
        <div className="md:col-span-2 bg-primary text-white rounded-xl p-6 relative overflow-hidden shadow-lg border border-primary/20">
          <div className="relative z-10">
            <h3 className="text-lg font-bold mb-2">Data Security Notice</h3>
            <p className="text-indigo-200 text-sm opacity-90 leading-relaxed">
              All records added to EnterpriseSuite are encrypted at rest and in transit. Ensure that personal identifiable information is handled according to the company privacy policy.
            </p>
          </div>
          <ShieldCheck className="absolute -right-4 -bottom-4 text-white/10 w-32 h-32" />
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-center items-center text-center shadow-sm">
          <Sparkles className="text-primary mb-3 h-8 w-8" />
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Quick Tip</p>
          <p className="text-sm font-bold text-slate-800">Use 'Tab' to quickly navigate fields.</p>
        </div>
      </div>
    </motion.div>
  );
}
