'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function StickyNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/niharika-logo.png" alt="Niharika" className="h-10 w-10 object-contain" />
          <div>
            <h1 className="text-xl font-black text-red-600">NIHARIKA</h1>
            <p className="text-xs text-gray-600 leading-none">Foundation</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-red-600 font-semibold transition-colors text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => {
            const message = 'Hello! I want to join Niharika Foundation. Please provide more information.';
            window.location.href = `https://wa.me/918763979798?text=${encodeURIComponent(message)}`;
          }}
          className="hidden md:block px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-bold hover:shadow-lg transition-all transform hover:scale-105"
        >
          Join Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fadeIn">
          <div className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-red-600 font-semibold transition-colors py-2"
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
              className="w-full px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-bold hover:shadow-lg transition-all mt-4"
            >
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
