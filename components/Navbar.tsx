
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  userRole?: 'Admin' | 'Subscriber' | null;
  onLogout?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ userRole, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#2D5A27] rounded-full flex items-center justify-center text-[#D4AF37] font-bold text-xl">FC</div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-[#2D5A27] leading-tight">FitCrown</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold leading-tight">Enterprise</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-[#2D5A27] border-b-2 border-[#D4AF37]'
                    : 'text-gray-600 hover:text-[#2D5A27]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {userRole === 'Admin' && (
              <Link to="/admin" className="text-sm font-bold text-red-600 hover:text-red-800 transition-colors">Admin Panel</Link>
            )}

            {userRole ? (
              <button 
                onClick={() => { onLogout?.(); navigate('/'); }}
                className="text-sm font-medium text-gray-500 hover:text-red-600"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-[#D4AF37] text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#B8860B] transition-all shadow-md"
              >
                Sign In
              </Link>
            )}
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#2D5A27] hover:bg-gray-50"
              >
                {item.label}
              </Link>
            ))}
            {userRole === 'Admin' && (
              <Link to="/admin" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-red-600 font-bold">Admin Panel</Link>
            )}
            {userRole ? (
               <button 
                onClick={() => { onLogout?.(); setIsOpen(false); navigate('/'); }}
                className="block w-full text-left px-3 py-2 text-gray-700 font-medium"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-semibold text-white bg-[#D4AF37]"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
