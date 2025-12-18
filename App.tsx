
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { NAV_ITEMS, COLORS } from './constants';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Training from './pages/Training';
import Products from './pages/Products';
import Membership from './pages/Membership';
import News from './pages/News';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AgBot from './components/AgBot';

const App: React.FC = () => {
  const [userRole, setUserRole] = useState<'Admin' | 'Subscriber' | null>(() => {
    return localStorage.getItem('userRole') as any;
  });

  const handleLogin = (role: 'Admin' | 'Subscriber') => {
    setUserRole(role);
    localStorage.setItem('userRole', role);
  };

  const handleLogout = () => {
    setUserRole(null);
    localStorage.removeItem('userRole');
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar userRole={userRole} onLogout={handleLogout} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/training" element={<Training />} />
            <Route path="/products" element={<Products />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            
            {/* Protected Admin Routes */}
            <Route 
              path="/admin/*" 
              element={userRole === 'Admin' ? <AdminDashboard onLogout={handleLogout} /> : <Navigate to="/login" />} 
            />
          </Routes>
        </main>
        <Footer />
        <AgBot />
      </div>
    </Router>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default App;
