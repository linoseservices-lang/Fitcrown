
import React from 'react';

const News: React.FC = () => {
  const posts = [
    {
      title: "Nigeria's Export Boom: The Rise of High-Value Spices",
      excerpt: "Analyzing the 45% increase in ginger and garlic exports and how local farmers can tap into this global demand.",
      date: "Oct 05, 2024",
      image: "https://picsum.photos/seed/spice/600/400"
    },
    {
      title: "Digital Scaling for Smallholder Farmers",
      excerpt: "How mobile payments and digital supply chains are revolutionizing the traditional marketplace in Oyo and beyond.",
      date: "Sep 28, 2024",
      image: "https://picsum.photos/seed/digital/600/400"
    },
    {
      title: "Sustainable Storage: Preserving the Harvest",
      excerpt: "A deep dive into low-cost, high-efficiency storage solutions for cocoa and cereal grains in tropical climates.",
      date: "Sep 15, 2024",
      image: "https://picsum.photos/seed/storage/600/400"
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-[#4B3621] mb-4">Agribusiness Trends & News</h2>
            <p className="text-gray-600">Thought leadership from the hub of Nigeria's agricultural revolution.</p>
          </div>
          <div className="w-full md:w-auto">
            <div className="bg-gray-100 p-2 rounded-xl flex items-center">
              <input type="email" placeholder="Your email..." className="bg-transparent px-4 py-2 text-sm focus:outline-none" />
              <button className="bg-[#2D5A27] text-white px-4 py-2 rounded-lg text-sm font-bold">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="relative h-64 overflow-hidden rounded-2xl mb-6">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-[#D4AF37] text-[#4B3621] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">Industry News</div>
              </div>
              <time className="text-xs text-gray-400 font-bold block mb-2">{post.date}</time>
              <h3 className="text-2xl font-bold text-[#4B3621] mb-4 group-hover:text-[#2D5A27] transition-colors">{post.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
              <div className="mt-6 flex items-center text-[#2D5A27] font-bold text-sm">
                Read More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
