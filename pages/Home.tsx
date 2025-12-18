
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/farm/1920/1080" 
            alt="Agribusiness Background" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 earthy-overlay"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Empowering Agricultural Excellence for a <span className="text-[#D4AF37]">Sustainable Future</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-200 font-light leading-relaxed">
              Bridging the gap between traditional agricultural knowledge and modern digital monetization through education, collaboration, and national economic transformation.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/membership" className="px-8 py-4 bg-[#D4AF37] text-[#4B3621] font-bold rounded-md hover:bg-[#B8860B] transition-all text-center shadow-xl">
                Join Our Colony
              </Link>
              <Link to="/about" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-md hover:bg-white/20 transition-all text-center">
                Explore Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Spotlight */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 border-2 border-[#D4AF37] rounded-lg -z-10 translate-x-4 translate-y-4"></div>
                <img 
                  src="https://picsum.photos/seed/ceo/800/1000" 
                  alt="Adelani Adebayo Jacob" 
                  className="rounded-lg shadow-2xl w-full object-cover aspect-[4/5]"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="inline-block px-4 py-1 bg-[#2D5A27]/10 text-[#2D5A27] rounded-full text-sm font-bold tracking-widest uppercase mb-4">Leadership Spotlight</div>
              <h2 className="text-4xl font-bold text-[#4B3621] mb-6">Meet Adelani Adebayo Jacob</h2>
              <p className="text-lg text-gray-600 mb-8 italic leading-relaxed">
                "Agriculture is not just about farming; it's about the entire value chain—the science, the business, and the economic backbone of our nation. At FitCrown, we build the experts who will lead this transformation."
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                As the visionary CEO of FitCrown Enterprise, Adelani has dedicated his career to professionalizing Nigeria's agribusiness sector. Through strategic mentorship and human capital development, he is fostering a new generation of agricultural entrepreneurs.
              </p>
              <div className="flex items-center space-x-4">
                <Link to="/contact" className="text-[#2D5A27] font-bold border-b-2 border-[#D4AF37] hover:text-[#B8860B] transition-colors">
                  Contact CEO Directly
                </Link>
                <span className="text-gray-300">|</span>
                <span className="text-sm font-semibold text-gray-500 uppercase">Visionary Founder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-[#2D5A27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#D4AF37] mb-2">500+</div>
              <div className="text-sm uppercase tracking-widest text-gray-300">Members Nationwide</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#D4AF37] mb-2">12+</div>
              <div className="text-sm uppercase tracking-widest text-gray-300">Strategic Partners</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#D4AF37] mb-2">50k</div>
              <div className="text-sm uppercase tracking-widest text-gray-300">Hectares Impacted</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#D4AF37] mb-2">₦2B+</div>
              <div className="text-sm uppercase tracking-widest text-gray-300">Revenue Facilitated</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#4B3621] mb-8">Ready to Transform Your Agribusiness Journey?</h2>
          <p className="text-xl text-gray-600 mb-12">Join the hub where expertise meets opportunity. Whether you're an investor, professional, or aspiring agriculturist, there's a place for you in our colony.</p>
          <Link to="/membership" className="inline-block px-10 py-5 gold-gradient text-[#4B3621] font-bold rounded-lg shadow-xl hover:scale-105 transition-transform">
            Become a Member Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
