
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  onLogin: (role: 'Admin' | 'Subscriber') => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'Admin' | 'Subscriber'>('Subscriber');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulation of secure hashed authentication check
    setTimeout(() => {
      setLoading(false);
      // In a real app, we check database hash
      if (email && password.length >= 6) {
        onLogin(role);
        navigate(role === 'Admin' ? '/admin' : '/');
      } else {
        alert("Invalid credentials. Use any email and a 6+ char password for demo.");
      }
    }, 1200);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 bg-[#2D5A27] rounded-full flex items-center justify-center text-[#D4AF37] font-bold text-2xl mx-auto mb-4 shadow-lg">FC</div>
          <h2 className="text-3xl font-extrabold text-[#4B3621]">Welcome Back</h2>
          <p className="mt-2 text-sm text-gray-500">Access the FitCrown Professional Network</p>
        </div>

        <div className="flex bg-gray-100 p-1 rounded-xl mb-6">
          <button 
            onClick={() => setRole('Subscriber')}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${role === 'Subscriber' ? 'bg-white text-[#2D5A27] shadow-sm' : 'text-gray-500'}`}
          >
            Subscriber
          </button>
          <button 
            onClick={() => setRole('Admin')}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${role === 'Admin' ? 'bg-white text-red-600 shadow-sm' : 'text-gray-500'}`}
          >
            Admin
          </button>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 ml-1">Email Address</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-xl relative block w-full px-4 py-3 border border-gray-200 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2D5A27] focus:z-10 sm:text-sm bg-gray-50 transition-all"
                placeholder="email@fitcrown.org"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 ml-1">Password</label>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-xl relative block w-full px-4 py-3 border border-gray-200 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2D5A27] focus:z-10 sm:text-sm bg-gray-50 transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-[#2D5A27] focus:ring-[#2D5A27] border-gray-300 rounded" />
              <label className="ml-2 block text-gray-500">Remember me</label>
            </div>
            <a href="#" className="font-medium text-[#2D5A27] hover:underline">Forgot password?</a>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-bold rounded-xl text-white transition-all shadow-lg ${
                role === 'Admin' ? 'bg-red-600 hover:bg-red-700' : 'bg-[#2D5A27] hover:bg-[#1e3d1a]'
              } disabled:opacity-50`}
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              ) : (
                `Secure ${role} Sign In`
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
