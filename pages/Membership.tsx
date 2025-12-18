
import React, { useState } from 'react';
import { MOCK_MEMBERS } from '../constants';

const Membership: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const filteredMembers = MOCK_MEMBERS.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.expertise.some(e => e.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-white">
      {/* Benefits Hero */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#4B3621] mb-4">Join Our Colony of Experts</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Membership at FitCrown is more than a title—it's an investment in your agribusiness legacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#2D5A27]">
              <h3 className="text-xl font-bold mb-4">Network & Collaboration</h3>
              <p className="text-gray-600 text-sm">Direct access to our database of verified experts, investors, and strategic partners across the globe.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#D4AF37]">
              <h3 className="text-xl font-bold mb-4">Market Expansion</h3>
              <p className="text-gray-600 text-sm">Preferred rates for export logistics, marketing support, and placement in our digital marketplace.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#4B3621]">
              <h3 className="text-xl font-bold mb-4">Exclusive Resources</h3>
              <p className="text-gray-600 text-sm">Access to premium research, data reports on market trends, and priority registration for workshops.</p>
            </div>
          </div>

          <div className="bg-[#2D5A27] p-12 rounded-3xl text-center shadow-2xl">
            {submitted ? (
              <div className="py-8 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#4B3621] mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Application Received!</h3>
                <p className="text-gray-200 max-w-md mx-auto mb-8">Thank you for your interest in joining the FitCrown Colony. Our membership committee will review your profile and contact you within 48 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-[#D4AF37] font-bold hover:underline"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-3xl font-bold text-white mb-8">Start Your Membership Application</h3>
                <div className="max-w-md mx-auto">
                  <form onSubmit={handleApply} className="space-y-4">
                    <input required type="text" placeholder="Full Name" className="w-full px-6 py-4 rounded-xl focus:outline-none" />
                    <input required type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-xl focus:outline-none" />
                    <button 
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-[#D4AF37] text-[#4B3621] font-bold rounded-xl hover:bg-[#B8860B] transition-colors shadow-lg disabled:opacity-50 flex items-center justify-center space-x-2"
                    >
                      {loading ? (
                         <svg className="animate-spin h-5 w-5 text-[#4B3621]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      ) : (
                        <span>Submit Interest</span>
                      )}
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Searchable Directory */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <h2 className="text-3xl font-bold text-[#4B3621]">Expert Directory</h2>
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="Search by name or expertise..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2D5A27] focus:outline-none"
            />
            <svg className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map(member => (
            <div key={member.id} className="bg-white border border-gray-100 p-6 rounded-2xl flex items-center space-x-6 hover:shadow-md transition-shadow">
              <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full object-cover border-2 border-[#D4AF37]" />
              <div>
                <h4 className="font-bold text-[#4B3621]">{member.name}</h4>
                <div className="text-xs text-[#2D5A27] font-semibold uppercase mb-2">{member.role} • {member.location}</div>
                <div className="flex flex-wrap gap-1">
                  {member.expertise.map(exp => (
                    <span key={exp} className="bg-gray-100 text-gray-500 text-[9px] px-2 py-0.5 rounded-full">{exp}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {filteredMembers.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-400">No members found matching your search.</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Membership;
