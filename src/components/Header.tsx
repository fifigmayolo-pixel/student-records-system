import { Search, Bell, HelpCircle, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-slate-200 shadow-sm flex justify-between items-center h-16 px-6 font-sans text-sm antialiased">
      <div className="flex items-center gap-8">
        <span 
          className="text-xl font-bold text-primary cursor-pointer" 
          onClick={() => navigate('/')}
          id="brand-logo"
        >
          EnterpriseSuite
        </span>
        <div className="hidden md:flex items-center bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
          <Search className="text-slate-400 mr-2 h-4 w-4" id="header-search-icon" />
          <input 
            className="bg-transparent border-none focus:ring-0 text-sm w-64 p-0 placeholder-slate-400 outline-none" 
            placeholder="Search resources..." 
            type="text"
            id="header-search-input"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 text-slate-600 hover:bg-slate-50 transition-colors duration-200 cursor-pointer rounded-full" id="btn-notifications">
          <Bell className="h-5 w-5" />
        </button>
        <button className="p-2 text-slate-600 hover:bg-slate-50 transition-colors duration-200 cursor-pointer rounded-full" id="btn-help">
          <HelpCircle className="h-5 w-5" />
        </button>
        <div className="h-8 w-px bg-slate-200 mx-2"></div>
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" id="user-menu" onClick={() => navigate('/settings')}>
          <span className="text-slate-600 font-medium md:inline hidden">Logout</span>
          <img 
            alt="User Avatar" 
            className="h-8 w-8 rounded-full border border-slate-200" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLJnLw3hTpYayOW6sVXNtPcs3tigYXLEgwm3Od24R8fGMwDQelsBd93uDTTQhS3tW01xoB7bTLQ7iGNpLp49OgYGtuW2McnhJZTqLbEYOezIflzKuxxSofBk3X9idAHkzKowAzog2dTo-W57Df1JLb8GZVsCk6SrmQ_Ar6Pombl-YfDoTbs3pdHCmRk_Lmh4zsOk0XWAHLlnTCAt2FXLAtuRkagjXMCILp-HrdRZOvR9K4A1jQRmO_hf0NX7uQWLbVXcRNbv2KtJ1k"
            id="user-avatar-img"
          />
        </div>
      </div>
    </header>
  );
}
