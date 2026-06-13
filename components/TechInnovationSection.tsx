'use client';

import React, { useState, useEffect } from 'react';
import { Cpu, Zap, Globe, BarChart3, Users, Smartphone, Code, Lock } from 'lucide-react';

export function TechInnovationSection() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });

    const section = document.getElementById('tech-section');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Cpu,
      title: 'AI-Powered Learning Platform',
      desc: 'Personalized learning paths powered by machine learning algorithms that adapt to each scholar\'s pace and style',
      color: 'from-blue-500 to-blue-600',
      benefits: ['Adaptive Curriculum', 'Real-time Feedback', 'Smart Recommendations']
    },
    {
      icon: Globe,
      title: 'Global Scholarship Marketplace',
      desc: 'Connect directly with international scholarships, sponsors, and educational opportunities worldwide',
      color: 'from-green-500 to-green-600',
      benefits: ['Global Connections', 'Real-time Listings', 'Direct Messaging']
    },
    {
      icon: BarChart3,
      title: 'Smart Progress Dashboard',
      desc: 'Track comprehensive performance metrics, career development, and scholarship impact in real-time',
      color: 'from-purple-500 to-purple-600',
      benefits: ['Live Analytics', 'Career Mapping', 'Impact Reports']
    },
    {
      icon: Users,
      title: 'Mentor Matching AI',
      desc: 'Intelligent pairing system that matches scholars with the best mentors based on goals and expertise',
      color: 'from-orange-500 to-orange-600',
      benefits: ['Smart Matching', 'Expert Network', 'Growth Tracking']
    },
    {
      icon: Smartphone,
      title: 'Mobile Learning App',
      desc: 'Complete learning ecosystem on-the-go with offline access, video lessons, and community support',
      color: 'from-pink-500 to-pink-600',
      benefits: ['Offline Mode', 'Video Library', 'Live Sessions']
    },
    {
      icon: Lock,
      title: 'Secure Blockchain Verification',
      desc: 'Tamper-proof certificate issuance and credential verification using blockchain technology',
      color: 'from-cyan-500 to-cyan-600',
      benefits: ['Verified Certs', 'Lifetime Access', 'Global Recognition']
    },
  ];

  return (
    <section id="tech-section" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-700">
            The Future of Education
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            With your support and the aspirations of students and parents, Niharika Foundation is pioneering technology-driven education solutions that will transform learning across Odisha.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={idx}
                onClick={() => setActiveFeature(idx)}
                className={`group cursor-pointer p-8 rounded-2xl border-2 transition-all duration-500 transform hover:scale-105 ${
                  activeFeature === idx
                    ? 'border-red-600 bg-gradient-to-br from-red-50 to-orange-50 shadow-2xl'
                    : 'border-gray-200 bg-white hover:border-red-400 hover:shadow-lg'
                }`}
                style={{
                  animationDelay: `${idx * 100}ms`,
                  animation: isVisible ? `slideInUp 0.6s ease-out forwards` : 'none'
                }}
              >
                <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <IconComponent size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {feature.desc}
                </p>
                <div className={`flex flex-wrap gap-2 transition-all duration-500 ${activeFeature === idx ? 'opacity-100 h-auto' : 'opacity-0 h-0'}`}>
                  {feature.benefits.map((benefit, bidx) => (
                    <span key={bidx} className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full font-semibold">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline - Development Roadmap */}
        <div className={`mt-20 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-3xl font-black text-gray-800 mb-12 text-center">
            Development Roadmap
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-600 to-orange-600"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                { quarter: 'Q3 2026', milestone: 'AI Learning Platform Beta Launch', status: 'In Development' },
                { quarter: 'Q4 2026', milestone: 'Mobile App Release', status: 'Planned' },
                { quarter: 'Q1 2027', milestone: 'Global Scholarship Integration', status: 'Planned' },
                { quarter: 'Q2 2027', milestone: 'Blockchain Verification System', status: 'Planned' },
              ].map((item, idx) => (
                <div key={idx} className={`flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-1/2 ${idx % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <div className={`bg-white border-2 border-red-600 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-red-600 font-bold text-sm mb-2">{item.quarter}</div>
                      <h4 className="text-xl font-black text-gray-800 mb-2">{item.milestone}</h4>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === 'In Development' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {item.status}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-12 flex justify-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-black mb-4">Help Shape the Future of Education</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Every contribution accelerates our mission to bring cutting-edge technology and world-class education to deserving students across Odisha.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-white text-red-600 rounded-full font-bold hover:shadow-lg transition-all hover:scale-105">
              Support Our Vision
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
