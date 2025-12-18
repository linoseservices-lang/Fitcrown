
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4B3621] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#2D5A27] font-bold">FC</div>
              <span className="text-xl font-bold tracking-tight">FitCrown</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Empowering Nigeria's agricultural sector through professional networking, 
              strategic education, and business transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#D4AF37]">The Hub</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">Who We Are</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/membership" className="hover:text-white transition-colors">Member Benefits</Link></li>
              <li><Link to="/training" className="hover:text-white transition-colors">Training Calendar</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#D4AF37]">Resources</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/news" className="hover:text-white transition-colors">Industry News</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Marketplace</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#D4AF37]">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#D4AF37] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Agric Villa, Alase Moniya, Ibadan
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-[#D4AF37] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                08064632156
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-[#D4AF37] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                info@fitcrown.org
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} FitCrown Enterprise. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
