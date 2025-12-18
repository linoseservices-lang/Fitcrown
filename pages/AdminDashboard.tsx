
import React, { useState } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleGenAI } from '@google/genai';

const AdminDashboard: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Overview', path: '/admin', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
    { label: 'News & Blog', path: '/admin/news', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z' },
    { label: 'Products', path: '/admin/products', icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' },
    { label: 'Subscribers', path: '/admin/subscribers', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
    { label: 'SEO Tools', path: '/admin/seo', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden lg:flex flex-col">
        <div className="p-6 border-b">
          <div className="text-xl font-bold text-[#2D5A27]">FitCrown Admin</div>
          <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Management Suite</div>
        </div>
        <nav className="flex-grow p-4 space-y-1">
          {menuItems.map(item => (
            <Link 
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                location.pathname === item.path ? 'bg-[#2D5A27] text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              <span className="font-semibold text-sm">{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t">
          <button 
            onClick={onLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            <span className="font-bold text-sm">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-grow">
        <header className="bg-white h-20 border-b flex items-center justify-between px-8 lg:px-12">
          <h1 className="text-xl font-bold text-[#4B3621]">
            {menuItems.find(i => i.path === location.pathname)?.label || 'Dashboard'}
          </h1>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm font-bold text-[#2D5A27]">Jacob Adelani</div>
              <div className="text-[10px] text-gray-400 uppercase font-black">Super Admin</div>
            </div>
            <img src="https://picsum.photos/seed/ceo/100/100" className="w-10 h-10 rounded-full border-2 border-[#D4AF37]" alt="Admin" />
          </div>
        </header>

        <main className="p-8 lg:p-12 overflow-y-auto max-h-[calc(100vh-80px)]">
          <Routes>
            <Route path="/" element={<AdminOverview />} />
            <Route path="/news" element={<AdminNews />} />
            <Route path="/products" element={<AdminProducts />} />
            <Route path="/seo" element={<AdminSEO />} />
            <Route path="/subscribers" element={<AdminSubscribers />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

const AdminOverview = () => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { label: 'Total Revenue', value: '₦4,250,000', change: '+12% this month', color: 'text-green-600' },
        { label: 'Active Subscribers', value: '1,284', change: '+45 new', color: 'text-[#D4AF37]' },
        { label: 'Training Bookings', value: '38', change: '8 pending approval', color: 'text-blue-600' }
      ].map((stat, i) => (
        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-2">{stat.label}</div>
          <div className={`text-3xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
          <div className="text-xs text-gray-500 font-semibold">{stat.change}</div>
        </div>
      ))}
    </div>
    
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold text-[#4B3621] mb-6">Recent Activity</h3>
      <div className="space-y-4">
        {[
          { user: 'Amaka O.', action: 'Subscribed to Gold Membership', time: '2 mins ago' },
          { user: 'System', action: 'Automated Ginger SEO generated', time: '15 mins ago' },
          { user: 'FitCrown Sales', action: 'New bulk order: Smoked Crayfish (50kg)', time: '1 hour ago' },
        ].map((item, i) => (
          <div key={i} className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0">
            <div>
              <span className="font-bold text-[#2D5A27]">{item.user}</span>
              <span className="text-gray-500 text-sm ml-2">{item.action}</span>
            </div>
            <div className="text-xs text-gray-400">{item.time}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AdminNews = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
        <h3 className="text-2xl font-bold text-[#4B3621] mb-8">Post New Update</h3>
        <div className="grid grid-cols-1 gap-6">
          <input 
            type="text" 
            placeholder="Headline" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-6 py-4 rounded-xl bg-gray-50 border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#2D5A27]" 
          />
          <textarea 
            rows={8} 
            placeholder="Write your agricultural insight or news update here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-6 py-4 rounded-xl bg-gray-50 border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#2D5A27] resize-none"
          ></textarea>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-6 py-4 bg-gray-100 rounded-xl font-bold text-gray-600 hover:bg-gray-200">
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
               <span>Add Photo</span>
            </button>
            <button className="flex-grow py-4 bg-[#2D5A27] text-white font-bold rounded-xl hover:bg-[#1e3d1a] transition-all shadow-lg">
              Publish Professional Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminSEO = () => {
  const [target, setTarget] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const generateSEO = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const prompt = `Analyze this topic for a Nigerian agribusiness website and generate high-conversion SEO metadata: "${target}". Provide Title (max 60 chars), Description (max 160 chars), and 5 high-traffic Keywords. Format as clean text.`;
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });
      setResult(response.text);
    } catch (e) {
      setResult("Error generating SEO tags.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-[#D4AF37]/10 rounded-lg text-[#D4AF37]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
          </div>
          <h3 className="text-2xl font-bold text-[#4B3621]">AI SEO Co-Pilot</h3>
        </div>
        <p className="text-gray-500 mb-8">Let Gemini optimize your agricultural content for Google Search ranking automatically.</p>
        <div className="flex space-x-4 mb-8">
          <input 
            type="text" 
            placeholder="Topic (e.g. Exporting Nigerian Cocoa to Belgium)" 
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="flex-grow px-6 py-4 rounded-xl bg-gray-50 border-gray-100 focus:outline-none" 
          />
          <button 
            onClick={generateSEO}
            disabled={loading}
            className="px-8 py-4 bg-[#D4AF37] text-[#4B3621] font-bold rounded-xl hover:bg-[#B8860B] transition-all disabled:opacity-50"
          >
            {loading ? 'Optimizing...' : 'Generate SEO Tags'}
          </button>
        </div>
        
        {result && (
          <div className="p-8 bg-gray-900 text-green-400 rounded-2xl font-mono text-sm leading-relaxed whitespace-pre-wrap animate-in fade-in duration-500">
            {result}
          </div>
        )}
      </div>
    </div>
  );
};

const AdminProducts = () => (
  <div className="grid grid-cols-1 gap-6">
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
       <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-bold text-[#4B3621]">Inventory Manager</h3>
          <button className="px-4 py-2 bg-[#2D5A27] text-white rounded-lg text-sm font-bold">+ New Product</button>
       </div>
       <table className="w-full text-left">
          <thead>
            <tr className="text-xs text-gray-400 uppercase tracking-widest border-b">
              <th className="pb-4">Product</th>
              <th className="pb-4">Price</th>
              <th className="pb-4">Stock</th>
              <th className="pb-4">Status</th>
              <th className="pb-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {[
              { name: 'Dried Ginger', price: '₦4,500', stock: '250kg', status: 'In Stock' },
              { name: 'Smoked Crayfish', price: '₦8,500', stock: '120kg', status: 'In Stock' },
              { name: 'Cocoa Tea', price: '₦6,000', stock: '15 units', status: 'Low Stock' },
            ].map((p, i) => (
              <tr key={i} className="text-sm">
                <td className="py-4 font-bold text-[#4B3621]">{p.name}</td>
                <td className="py-4">{p.price}</td>
                <td className="py-4 font-mono">{p.stock}</td>
                <td className="py-4">
                   <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${p.status === 'Low Stock' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'}`}>{p.status}</span>
                </td>
                <td className="py-4 text-right text-[#D4AF37] font-bold cursor-pointer hover:underline">Edit</td>
              </tr>
            ))}
          </tbody>
       </table>
    </div>
  </div>
);

const AdminSubscribers = () => (
   <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold text-[#4B3621] mb-8">FitCrown Subscriber List</h3>
      <div className="space-y-4">
        {[
          { email: 'samuel@domain.com', joined: '12 Oct 2024', status: 'Active' },
          { email: 'fatima.b@agri.ng', joined: '10 Oct 2024', status: 'Active' },
          { email: 'export_guru@gmail.com', joined: '05 Oct 2024', status: 'Active' },
          { email: 'investor_group@ibadan.com', joined: '01 Oct 2024', status: 'Active' },
        ].map((s, i) => (
          <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
             <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#2D5A27]/10 rounded-full flex items-center justify-center text-[#2D5A27] font-bold text-xs">{s.email[0].toUpperCase()}</div>
                <div>
                  <div className="font-bold text-[#4B3621] text-sm">{s.email}</div>
                  <div className="text-[10px] text-gray-400">Joined on {s.joined}</div>
                </div>
             </div>
             <button className="text-xs font-bold text-[#2D5A27] hover:underline">Message</button>
          </div>
        ))}
      </div>
   </div>
);

export default AdminDashboard;
