
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${isScrolled ? 'glass-effect border-b border-gray-200 py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="size-10 bg-orange-700 text-white flex items-center justify-center rounded-xl rotate-3 group-hover:rotate-0 transition-transform">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l9 4.9V17.1L12 22l-9-4.9V6.9L12 2z" />
            </svg>
          </div>
          <span className="text-xl font-black tracking-tighter uppercase">Paula Gimeno</span>
        </a>
        
        <a href="#contact" className="hidden sm:inline-flex h-11 items-center justify-center rounded-full bg-orange-700 px-6 text-sm font-bold text-white transition-all hover:bg-orange-800 hover:shadow-lg hover:shadow-orange-700/20">
          Work with me
        </a>

        <button className="sm:hidden p-2 text-orange-700">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
