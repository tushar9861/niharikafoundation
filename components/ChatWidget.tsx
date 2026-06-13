'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { ChatWindow } from './ChatWindow';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Close chat when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (chatWindowRef.current && !chatWindowRef.current.contains(event.target as Node)) {
        const chatButton = document.getElementById('chat-widget-button');
        if (chatButton && !chatButton.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <>
      {/* Chat Button */}
      <button
        id="chat-widget-button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group"
      >
        {isOpen ? (
          <X size={24} className="animate-spin" style={{ animationDuration: '0.3s' }} />
        ) : (
          <>
            <MessageCircle size={24} />
            <span className="absolute top-1 right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></span>
          </>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          ref={chatWindowRef}
          className="fixed bottom-24 right-6 z-50 w-96 max-h-[600px] animate-slideUp"
        >
          <ChatWindow onClose={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
}
