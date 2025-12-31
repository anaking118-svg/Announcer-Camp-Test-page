
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Youtube, Facebook, ShieldCheck } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SERVICES', path: '/services' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'BLOG', path: '/blog' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <span className="text-white">아나운서</span>
            <span className="text-[#FFD700]">훈련소</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-widest hover:text-[#FFD700] transition-colors ${location.pathname === link.path ? 'text-[#FFD700]' : 'text-white'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/admin" className="p-2 hover:bg-[#FFD700] hover:text-black rounded-full transition-all duration-300">
               <ShieldCheck size={20} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-black flex flex-col items-center justify-center transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-bold mb-8 hover:text-[#FFD700]"
          >
            {link.name}
          </Link>
        ))}
        <Link to="/admin" onClick={() => setIsOpen(false)} className="text-xl flex items-center gap-2 text-[#FFD700]">
            <ShieldCheck size={20} /> 관리자 패널
        </Link>
      </div>

      <main className="flex-grow pt-24 md:pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-black mb-6">아나운서 <span className="text-[#FFD700]">훈련소</span></h2>
              <p className="text-zinc-400 max-w-sm mb-6 leading-relaxed">
                우리는 당신의 목소리가 가진 잠재력을 발견하고, 세상에 가장 아름다운 울림으로 전달될 수 있도록 돕는 프리미엄 스피치 에이전시입니다.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-black hover:bg-[#FFD700] hover:text-black rounded-full transition-all"><Instagram size={20}/></a>
                <a href="#" className="p-2 bg-black hover:bg-[#FFD700] hover:text-black rounded-full transition-all"><Youtube size={20}/></a>
                <a href="#" className="p-2 bg-black hover:bg-[#FFD700] hover:text-black rounded-full transition-all"><Facebook size={20}/></a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6 text-[#FFD700]">Contact</h3>
              <ul className="space-y-4 text-zinc-400 text-sm">
                <li>서울특별시 강남구 테헤란로 123, 45층</li>
                <li>02-1234-5678</li>
                <li>info@announcer-academy.co.kr</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6 text-[#FFD700]">Quick Links</h3>
              <ul className="space-y-4 text-zinc-400 text-sm">
                <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Consulting</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-zinc-800 text-center text-zinc-500 text-xs">
            &copy; 2024 Announcer Academy. All Rights Reserved. Designed for Excellence.
          </div>
        </div>
      </footer>
    </div>
  );
};
