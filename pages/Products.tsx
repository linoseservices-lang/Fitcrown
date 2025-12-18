
import React, { useState } from 'react';
import { MOCK_PRODUCTS } from '../constants';

const Products: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Spices', 'Seafood', 'Beverage'];

  const filteredProducts = filter === 'All' 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-[#4B3621] mb-2">Premium Products</h2>
            <p className="text-gray-600">Sourced directly from our colony of experts.</p>
          </div>
          <div className="flex space-x-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === cat 
                  ? 'bg-[#2D5A27] text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
              <div className="h-64 relative">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#2D5A27]">
                  ₦{product.price.toLocaleString()}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <span className="text-[10px] uppercase font-bold text-[#D4AF37] mb-1">{product.category}</span>
                <h3 className="text-xl font-bold text-[#4B3621] mb-3">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-6 flex-grow">{product.description}</p>
                <div className="flex flex-col space-y-2">
                  <button className="w-full py-2.5 bg-[#2D5A27] text-white rounded-lg font-bold text-sm hover:bg-[#1e3d1a] transition-colors">
                    Add to Cart
                  </button>
                  <button className="w-full py-2.5 border border-[#2D5A27] text-[#2D5A27] rounded-lg font-bold text-sm hover:bg-[#2D5A27]/5 transition-colors">
                    Bulk Inquiry
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-[#4B3621] rounded-3xl p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4">Subscription Services</h3>
            <p className="text-gray-300">Get your essential agricultural products delivered regularly. Perfect for restaurants, retailers, and export partners.</p>
          </div>
          <button className="px-10 py-4 bg-[#D4AF37] text-[#4B3621] font-bold rounded-xl hover:scale-105 transition-transform">
            Setup Subscription
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
