
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="h-64 bg-[#4B3621] relative flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img src="https://picsum.photos/seed/about/1920/400" className="w-full h-full object-cover opacity-30" alt="About" />
        </div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-white text-center">Our Identity & Mission</h1>
      </div>

      {/* Core Values */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-[#2D5A27]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#2D5A27]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-[#4B3621] mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To drive economic transformation by professionalizing agriculture through high-impact education, networking, and business support systems.
            </p>
          </div>
          <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-[#4B3621] mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the premier global hub for agricultural expertise, where traditional wisdom meets digital innovation for sustainable food security.
            </p>
          </div>
          <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-[#4B3621]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#4B3621]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-[#4B3621] mb-4">Our Doctrine</h3>
            <p className="text-gray-600 leading-relaxed">
              Knowledge is the seed of profit. We believe in collaborative growth, ethical trade, and the relentless pursuit of agribusiness mastery.
            </p>
          </div>
        </div>
      </section>

      {/* Extended CEO Message */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row">
            <div className="lg:w-2/5 relative h-96 lg:h-auto">
              <img src="https://picsum.photos/seed/portrait/800/1200" className="w-full h-full object-cover" alt="CEO" />
              <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-[#2D5A27] to-transparent text-white">
                <div className="font-bold text-2xl">Adelani Adebayo Jacob</div>
                <div className="text-sm text-[#D4AF37] uppercase font-bold tracking-widest">Chief Executive Officer</div>
              </div>
            </div>
            <div className="lg:w-3/5 p-12 lg:p-20">
              <h2 className="text-3xl md:text-4xl font-bold text-[#4B3621] mb-8">A Message from the CEO</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  Welcome to FitCrown Enterprise. We established this hub not just as a business, but as a movement. For too long, the agricultural sector in Nigeria has been viewed as a back-breaking struggle rather than the high-growth industrial engine it truly is.
                </p>
                <p>
                  Our goal is simple yet profound: to build a "Colony of Experts." We bridge the gap between those who work the land and those who lead the markets. By integrating digital monetization strategies into traditional farming practices, we ensure that our members don't just produce—they thrive.
                </p>
                <p>
                  At FitCrown, we emphasize human capital development. We believe that an educated farmer is an empowered entrepreneur. Whether you are looking for investment facilitation, market expansion, or world-class training, you are in the right place.
                </p>
                <p className="font-serif italic text-2xl text-[#2D5A27]">
                  "Join us as we transform the green fields of today into the gold mines of tomorrow."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
