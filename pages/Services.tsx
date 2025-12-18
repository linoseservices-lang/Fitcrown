
import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Training & Development',
      description: 'Comprehensive workshops and online certifications covering modern farming techniques, storage solutions, and value addition.',
      icon: (
        <svg className="w-12 h-12 text-[#2D5A27]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      cta: 'View Courses',
      link: '/training'
    },
    {
      title: 'Business Support Hub',
      description: 'Exclusive mentorship for agribusiness startups, investment facilitation, and access to global market expansion strategies.',
      icon: (
        <svg className="w-12 h-12 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      cta: 'Get Mentored',
      link: '/contact'
    },
    {
      title: 'Product Trade & Export',
      description: 'Bulk sourcing and distribution of high-quality agricultural products including Ginger, Cocoa, Garlic, and Smoked Seafood.',
      icon: (
        <svg className="w-12 h-12 text-[#4B3621]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      cta: 'Shop Now',
      link: '/products'
    },
    {
      title: 'Strategic Collaborations',
      description: 'Partnering with institutions like IITA to bring world-class research and development directly to the Nigerian farmer.',
      icon: (
        <svg className="w-12 h-12 text-[#2D5A27]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      cta: 'Partner With Us',
      link: '/contact'
    }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4B3621] mb-6">Our Services</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide the infrastructure and expertise needed to scale agricultural ventures in the modern economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-start hover:-translate-y-2 transition-transform">
              <div className="mb-6">{s.icon}</div>
              <h3 className="text-2xl font-bold text-[#4B3621] mb-4">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                {s.description}
              </p>
              <Link 
                to={s.link} 
                className="px-6 py-3 bg-[#2D5A27] text-white rounded-lg font-semibold hover:bg-[#1e3d1a] transition-colors"
              >
                {s.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
