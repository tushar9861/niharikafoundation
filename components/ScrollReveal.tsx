'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'slideInUp' | 'slideInLeft' | 'slideInRight' | 'scalePopIn' | 'float' | 'bounce';
  delay?: number;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className = '',
  animation = 'slideInUp',
  delay = 0,
  threshold = 0.1
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? `animate-${animation}` : 'opacity-0'}`}
      style={
        isVisible
          ? {
              animationDelay: `${delay}ms`
            }
          : {}
      }
    >
      {children}
    </div>
  );
}
