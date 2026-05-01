import { Building2, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface font-sans">
      <main className="flex-grow flex items-center justify-center px-gutter py-xl bg-gradient-to-br from-surface-container-low to-surface-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-[440px] flex flex-col gap-lg"
          id="login-container"
        >
          <div className="flex flex-col items-center gap-base">
            <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-xl shadow-sm mb-xs" id="login-brand-icon">
              <Building2 className="text-white h-7 w-7" />
            </div>
            <h1 className="text-4xl font-bold text-on-surface tracking-tight" id="login-title">EnterpriseSuite</h1>
            <p className="text-on-surface-variant text-base" id="login-subtitle">Sign in to manage your workspace</p>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant p-gutter md:p-lg rounded-xl login-card-shadow" id="login-card">
            <form onSubmit={handleLogin} className="flex flex-col gap-md">
              <div className="flex flex-col gap-xs">
                <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider" htmlFor="email">Email Address</label>
                <input 
                  className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200" 
                  id="email" 
                  placeholder="name@company.com" 
                  required 
                  type="email" 
                />
              </div>
              <div className="flex flex-col gap-xs">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider" htmlFor="password">Password</label>
                  <a className="text-xs font-semibold text-primary hover:underline transition-all" href="#">Forgot Password?</a>
                </div>
                <input 
                  className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200" 
                  id="password" 
                  placeholder="••••••••" 
                  required 
                  type="password" 
                />
              </div>
              <div className="flex items-center gap-sm">
                <input 
                  className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20 transition-all cursor-pointer" 
                  id="remember" 
                  type="checkbox" 
                />
                <label className="text-sm text-on-surface-variant cursor-pointer select-none" htmlFor="remember">Remember me for 30 days</label>
              </div>
              <button 
                className="w-full h-12 bg-primary hover:bg-primary-container text-white font-semibold rounded-lg shadow-sm active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-sm" 
                type="submit"
                id="btn-login"
              >
                <span>Login to Dashboard</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>

            <div className="mt-xl pt-md border-t border-outline-variant flex flex-col gap-md">
              <p className="text-center text-sm text-on-surface-variant">Or continue with</p>
              <div className="grid grid-cols-2 gap-sm">
                <button className="flex items-center justify-center gap-sm h-11 border border-outline-variant rounded-lg bg-white hover:bg-slate-50 transition-colors font-semibold text-on-surface-variant" id="btn-google">
                  <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmV2afbGSOLEez_zf4AVDru7EtBpYW9aVsQVoPA88ARwvKQudLeKG-_9h4gNqGP4EHmCplpW1KYFLQ53RGETVJLsKejzGrBek7pftJCfHb0EPY4yt27OrrNwcJ2hA46TSWaM-5cqvV6-X45iGgFaWrZJw9F5voB9LA-zjcyXbvuslrz1fqrGe2KFF9gCbQ0AgRrWLLxtS5Gbc0ImTxLxFSuU6qqstuap4yLsnFOy0KmrwQzDI5MjuG5_vZKm3YPFN8p-mShUWtakOg" />
                  <span>Google</span>
                </button>
                <button className="flex items-center justify-center gap-sm h-11 border border-outline-variant rounded-lg bg-white hover:bg-slate-50 transition-colors font-semibold text-on-surface-variant" id="btn-sso">
                  <img alt="SSO" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK9Nr4p1GkXX18D4xyjEBLzP4zvVmC3ybAN_5ucJ_8yjpytib08typ-ENVgr-4CZ_KHI6RnHdkDeNCjONq4WpknqJ63bWUGQPVcf_gYCU0E5Nqpprcgni2BfCJPl3vpo02gTVVmDcDyKBmIMkI4xzY4E46k5kxYJBDGOUIBV06m-DgP7fXxaVeUmueCUCS09kb99A_KSKr-LtXAa8qPZpcRfCiQ_gVxphhW3aODc9KIJwYis-Fe2uJK8pdzKTLFPKl1mr1HoUyDSa8" />
                  <span>SAML SSO</span>
                </button>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-on-surface-variant" id="login-footer">
            New to Management? <a className="text-primary font-semibold hover:underline" href="#">Contact Administrator</a>
          </p>
        </motion.div>
      </main>
      
      <footer className="h-16 flex items-center justify-between px-margin border-t border-outline-variant bg-surface-container-lowest">
        <span className="text-sm text-on-surface-variant">© 2024 EnterpriseSuite Inc.</span>
        <div className="flex gap-md">
          <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
        </div>
      </footer>

      <div className="fixed bottom-margin right-margin hidden md:block">
        <div className="bg-surface-container-high/80 backdrop-blur-md p-md rounded-xl border border-outline-variant flex items-center gap-md max-w-xs shadow-lg" id="secure-sticker">
          <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center shrink-0">
            <ShieldCheck className="text-primary h-6 w-6" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Secure Infrastructure</p>
            <p className="text-sm text-on-surface mt-0.5">Encrypted with industry-standard 256-bit protocols.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
