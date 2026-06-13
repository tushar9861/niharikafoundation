'use client';

import React, { useState, useEffect } from 'react';
import { MessageSquare, Heart, Hand, ArrowUp } from 'lucide-react';

export function FloatingActionButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/918763979798?text=Hello%20Niharika%20Foundation%21%20I%20want%20to%20know%20more%20about%20your%20programs."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all transform hover:scale-110 animate-pulse"
        title="Chat with us on WhatsApp"
      >
        <MessageSquare size={24} />
      </a>

      {/* Donate Button */}
      <button
        onClick={() => {
          const message = 'I want to make a donation to Niharika Foundation. Please provide donation details.';
          window.location.href = `https://wa.me/918763979798?text=${encodeURIComponent(message)}`;
        }}
        className="fixed bottom-24 right-8 z-40 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all transform hover:scale-110 hidden md:flex items-center justify-center"
        title="Donate now"
      >
        <Heart size={24} />
      </button>

      {/* Volunteer Button */}
      <button
        onClick={() => {
          const message = 'I am interested in volunteering with Niharika Foundation. Please provide more details.';
          window.location.href = `https://wa.me/918763979798?text=${encodeURIComponent(message)}`;
        }}
        className="fixed bottom-40 right-8 z-40 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all transform hover:scale-110 hidden md:flex items-center justify-center"
        title="Volunteer"
      >
        <Hand size={24} />
      </button>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-24 z-40 bg-gray-800 hover:bg-gray-900 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all transform hover:scale-110 animate-fadeIn md:right-32"
          title="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
}
