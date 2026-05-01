import { User, Lock, Settings2 as Tune, Bell, LifeBuoy, Mail, Globe, Moon, Edit, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [digests, setDigests] = useState(true);

  const tabs = [
    { name: 'Profile Information', icon: User, key: 'profile' },
    { name: 'Security', icon: Lock, key: 'security' },
    { name: 'System Preferences', icon: Tune, key: 'system' },
    { name: 'Notifications', icon: Bell, key: 'notifications' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8 max-w-5xl mx-auto space-y-10"
    >
      <header>
        <h1 className="text-4xl font-bold text-on-surface">Account Settings</h1>
        <p className="text-on-surface-variant text-base mt-2">Manage your professional identity and system security preferences.</p>
      </header>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-3 space-y-6">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <nav className="flex flex-col space-y-2">
              {tabs.map(tab => (
                <button 
                  key={tab.key}
                  className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest transition-all ${tab.key === 'profile' ? 'bg-primary text-white shadow-md' : 'text-on-surface-variant hover:bg-slate-50'}`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="bg-primary text-white p-6 rounded-xl relative overflow-hidden shadow-lg">
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2">Need help?</h3>
              <p className="text-xs text-indigo-100 opacity-80 mb-6 leading-relaxed">Our enterprise support team is available 24/7 for security audits.</p>
              <button className="bg-white text-primary text-xs font-bold px-5 py-2.5 rounded-lg hover:bg-indigo-50 transition-colors shadow-sm uppercase tracking-widest">Contact Support</button>
            </div>
            <LifeBuoy className="absolute -right-4 -bottom-4 text-white/10 w-24 h-24" />
          </div>
        </div>

        <div className="col-span-12 md:col-span-9 space-y-10">
          <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-on-surface">Profile Information</h2>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mt-1">Update your public profile and contact details.</p>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center space-x-8 mb-10">
                <div className="relative group">
                  <img alt="Profile Preview" className="w-24 h-24 rounded-full border-4 border-white shadow-xl object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alexander" />
                  <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full border-2 border-white shadow-lg hover:scale-110 transition-transform">
                    <Edit className="h-4 w-4" />
                  </button>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-on-surface">Alexander Sterling</h3>
                  <p className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Senior Operations Lead • London, UK</p>
                  <div className="flex space-x-2 mt-3">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[9px] font-bold uppercase tracking-widest border border-emerald-100">Verified Account</span>
                    <span className="px-3 py-1 bg-primary/5 text-primary rounded-full text-[9px] font-bold uppercase tracking-widest border border-primary/10">Admin Role</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">FULL NAME</label>
                  <input className="w-full border border-slate-200 rounded-lg focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all px-4 py-3 text-sm font-bold outline-none" type="text" defaultValue="Alexander Sterling" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">EMAIL ADDRESS</label>
                  <input className="w-full border border-slate-200 rounded-lg focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all px-4 py-3 text-sm font-bold outline-none" type="email" defaultValue="alexander.s@enterprisesuite.com" />
                </div>
                <div className="space-y-2 col-span-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">BIOGRAPHY</label>
                  <textarea className="w-full border border-slate-200 rounded-lg focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all px-4 py-3 text-sm font-bold outline-none min-h-[100px] resize-none leading-relaxed" rows={3}>Operations specialist focused on scaling SaaS infrastructures and cross-departmental efficiency protocols.</textarea>
                </div>
              </div>
            </div>
            <div className="px-8 py-5 bg-slate-50 border-t border-slate-100 flex justify-end space-x-4">
              <button className="px-6 py-2.5 bg-white text-slate-700 rounded-lg font-bold text-xs uppercase tracking-widest border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm">Discard Changes</button>
              <button className="px-6 py-2.5 bg-primary text-white rounded-lg font-bold text-xs uppercase tracking-widest hover:opacity-90 shadow-md transition-all">Save Profile</button>
            </div>
          </section>

          <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-100">
              <h2 className="text-xl font-bold text-on-surface">Change Password</h2>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">Maintain your account security with a strong, unique password.</p>
            </div>
            <div className="p-8 max-w-lg">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">CURRENT PASSWORD</label>
                  <input className="w-full border border-slate-200 rounded-lg focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all px-4 py-3 text-sm font-bold outline-none" placeholder="••••••••••••" type="password" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">NEW PASSWORD</label>
                  <input className="w-full border border-slate-200 rounded-lg focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all px-4 py-3 text-sm font-bold outline-none" placeholder="Min. 12 characters" type="password" />
                  <div className="flex space-x-1 mt-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-1 flex-1 bg-emerald-500 rounded-full shadow-sm"></div>
                    ))}
                    <div className="h-1 flex-1 bg-slate-200 rounded-full shadow-sm"></div>
                  </div>
                  <p className="text-[10px] text-emerald-600 font-bold mt-2 uppercase tracking-widest">PASSWORD STRENGTH: STRONG</p>
                </div>
              </div>
            </div>
            <div className="px-8 py-5 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button className="px-6 py-2.5 bg-primary text-white rounded-lg font-bold text-xs uppercase tracking-widest hover:opacity-90 shadow-md transition-all">Update Security</button>
            </div>
          </section>

          <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden" id="preferences-section">
            <div className="px-8 py-6 border-b border-slate-100">
              <h2 className="text-xl font-bold text-on-surface">Preferences</h2>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">Customize your workspace and application behavior.</p>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                <div onClick={() => setDarkMode(!darkMode)} className="flex items-center justify-between p-5 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all cursor-pointer border border-transparent hover:border-primary/10 group shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white rounded-xl shadow-md group-hover:text-primary transition-colors">
                      <Moon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-sm">Dark Mode</p>
                      <p className="text-xs text-on-surface-variant font-medium mt-0.5">Switch the interface to a darker color palette.</p>
                    </div>
                  </div>
                  <div className={`w-12 h-6 rounded-full transition-colors relative flex items-center px-1 ${darkMode ? 'bg-primary' : 'bg-slate-300'}`}>
                    <motion.div 
                      animate={{ x: darkMode ? 24 : 0 }} 
                      className="w-4 h-4 bg-white rounded-full shadow-md"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between p-5 bg-slate-50 rounded-xl border border-transparent group shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white rounded-xl shadow-md group-hover:text-primary transition-colors">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-sm">Language</p>
                      <p className="text-xs text-on-surface-variant font-medium mt-0.5">Default language for the dashboard and reports.</p>
                    </div>
                  </div>
                  <select className="bg-white border-slate-200 border rounded-lg text-xs font-bold px-4 py-2 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all uppercase tracking-widest shadow-sm">
                    <option>English (UK)</option>
                    <option>English (US)</option>
                    <option>German</option>
                    <option>French</option>
                  </select>
                </div>

                <div onClick={() => setDigests(!digests)} className="flex items-center justify-between p-5 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all cursor-pointer border border-transparent hover:border-primary/10 group shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white rounded-xl shadow-md group-hover:text-primary transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-sm">Email Digests</p>
                      <p className="text-xs text-on-surface-variant font-medium mt-0.5">Receive weekly performance summaries via email.</p>
                    </div>
                  </div>
                  <div className={`w-12 h-6 rounded-full transition-colors relative flex items-center px-1 ${digests ? 'bg-primary' : 'bg-slate-300'}`}>
                    <motion.div 
                      animate={{ x: digests ? 24 : 0 }} 
                      className="w-4 h-4 bg-white rounded-full shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-red-50 border border-red-100 rounded-xl p-8 flex items-center justify-between shadow-sm" id="danger-account-section">
            <div>
              <h3 className="text-red-800 font-bold text-lg mb-1">Delete Account</h3>
              <p className="text-sm text-red-600 opacity-90 font-medium">Once you delete your account, there is no going back. Please be certain.</p>
            </div>
            <button className="px-6 py-3 bg-white text-red-600 border border-red-200 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-red-50 transition-all shadow-sm">Deactivate Account</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
