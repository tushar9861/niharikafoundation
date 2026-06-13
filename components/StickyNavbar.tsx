'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export function StickyNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Programs', href: '/#programs' },
    { label: 'Medha Samman', href: '/#medha-samman' },
    { label: 'Impact', href: '/impact' },
    { label: 'Get Involved', href: '/get-involved' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-gradient-to-r from-red-600 to-red-700 shadow-2xl py-2' 
        : 'bg-gradient-to-r from-red-500 via-red-600 to-red-700 py-4'
    } ${scrollDirection === 'down' && scrolled ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo with Animation */}
        <a href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="relative">
            <img src="/niharika-logo.png" alt="Niharika" className="h-10 w-10 object-contain group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          </div>
          <div>
            <h1 className="text-lg font-black text-white drop-shadow-md group-hover:text-yellow-100 transition-colors duration-300">NIHARIKA</h1>
            <p className="text-xs text-red-100 leading-none">Foundation</p>
          </div>
        </a>

        {/* Desktop Menu with Hover Effects */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              className="relative px-3 py-2 text-white font-semibold text-sm group hover:text-yellow-200 transition-colors duration-300"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* CTA Button with Pulse Animation */}
        <button
          onClick={() => {
            const message = 'Hello! I want to join Niharika Foundation. Please provide more information.';
            window.location.href = `https://wa.me/918763979798?text=${encodeURIComponent(message)}`;
          }}
          className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-white text-red-600 rounded-full font-bold hover:shadow-2xl hover:scale-110 transition-all duration-300 relative overflow-hidden group"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Zap size={16} className="group-hover:animate-pulse" />
            Join Now
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-orange-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        {/* Hamburger Menu for Mobile/Tablet */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:bg-white/20 rounded-lg transition-all duration-300"
        >
          {mobileMenuOpen ? <X size={24} className="animate-spin" style={{animationDuration: '0.3s'}} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile/Tablet Menu with Slide Animation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gradient-to-b from-red-600 to-red-700 border-t border-red-500/50 backdrop-blur-md animate-slideDown">
          <div className="flex flex-col p-4 gap-2 max-w-7xl mx-auto">
            {navItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:bg-white/10 hover:translate-x-2 font-semibold transition-all duration-300 py-3 px-4 rounded-lg"
                style={{ animationDelay: `${idx * 30}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                const message = 'Hello! I want to join Niharika Foundation. Please provide more information.';
                window.location.href = `https://wa.me/918763979798?text=${encodeURIComponent(message)}`;
                setMobileMenuOpen(false);
              }}
              className="w-full px-6 py-3 bg-white text-red-600 rounded-lg font-bold hover:shadow-lg transition-all mt-4 transform hover:scale-105"
            >
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
