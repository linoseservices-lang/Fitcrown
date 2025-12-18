
import React from 'react';
import { MOCK_EVENTS } from '../constants';

const Training: React.FC = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#4B3621] mb-4">Training & Development</h2>
          <p className="text-lg text-gray-600">Empowering the next generation of agribusiness professionals.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-[#2D5A27] mb-6 border-b pb-2">Upcoming Workshops</h3>
              <div className="space-y-6">
                {MOCK_EVENTS.map(event => (
                  <div key={event.id} className="border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center hover:shadow-lg transition-shadow">
                    <div className="mb-4 md:mb-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded ${event.type === 'Online' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                          {event.type}
                        </span>
                        <span className="text-sm font-semibold text-gray-400">{event.date}</span>
                      </div>
                      <h4 className="text-xl font-bold text-[#4B3621] mb-2">{event.title}</h4>
                      <div className="text-sm text-gray-500 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        {event.location}
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <div className="text-xs text-gray-400 uppercase font-bold">Registration Fee</div>
                        <div className="text-xl font-bold text-[#2D5A27]">{event.price}</div>
                      </div>
                      <button className="bg-[#D4AF37] text-[#4B3621] px-6 py-2 rounded-lg font-bold hover:bg-[#B8860B] transition-colors">Register</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#F8F9FA] p-10 rounded-3xl">
              <h3 className="text-2xl font-bold text-[#4B3621] mb-6">Success Stories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm italic text-gray-600">
                  "The export masterclass gave me the confidence and contacts to start shipping my ginger to the UK. FitCrown is truly a bridge to the world."
                  <div className="mt-4 font-bold text-[#2D5A27] not-italic">— Segun A., Oyo State</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm italic text-gray-600">
                  "Digital monetization wasn't even on my radar until I attended the FitCrown webinar. Now I sell my products online before they even leave the farm."
                  <div className="mt-4 font-bold text-[#2D5A27] not-italic">— Amaka J., Lagos</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#2D5A27] text-white p-8 rounded-3xl sticky top-28">
              <h3 className="text-xl font-bold mb-6">Why Train With Us?</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#D4AF37] mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Curriculum designed by active agribusiness veterans.
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#D4AF37] mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Direct links to export networks and buyers.
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#D4AF37] mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Hands-on mentorship beyond the classroom.
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#D4AF37] mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Certificates recognized by major industry players.
                </li>
              </ul>
              <button className="w-full mt-10 py-4 bg-white text-[#2D5A27] font-bold rounded-xl hover:bg-gray-100 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
