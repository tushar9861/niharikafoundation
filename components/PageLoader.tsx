'use client';

import React, { useState, useEffect } from 'react';

const messages = [
  '📚 Educating Futures...',
  '🌱 Growing Communities...',
  '❤️ Creating Impact...',
  '🎓 Empowering Students...',
  '🤝 Building Better Odisha...',
];

export function PageLoader({ isVisible }: { isVisible: boolean }) {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center animate-fadeIn">
      <div className="text-center">
        <div className="w-24 h-24 mx-auto mb-8 animate-bounce">
          <img src="/niharika-logo.png" alt="Niharika" className="w-full h-full object-contain" />
        </div>
        <div className="mb-12">
          <div className="h-8 flex items-center justify-center">
            <p className="text-2xl font-bold text-red-600 animate-fadeIn">
              {messages[messageIndex]}
            </p>
          </div>
        </div>
        <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-red-600 to-green-600 animate-pulse" style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  );
}
