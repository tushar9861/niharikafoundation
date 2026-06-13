'use client';

import React, { useState, useEffect } from 'react';
import { Users, BookOpen, MapPin, Award, Zap, TrendingUp } from 'lucide-react';

export function ImpactInfographics() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    scholars: 0,
    books: 0,
    districts: 0,
    volunteers: 0,
    impact: 0,
    growth: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });

    const section = document.getElementById('impact-infographics');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, [isVisible]);

  // Animate counter numbers
  useEffect(() => {
    if (!isVisible) return;

    const targets = {
      scholars: 700,
      books: 15000,
      districts: 12,
      volunteers: 45,
      impact: 50,
      growth: 240
    };

    const duration = 2000;
    const startTime = Date.now();

    const animateCounters = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounts({
        scholars: Math.floor(targets.scholars * progress),
        books: Math.floor(targets.books * progress),
        districts: Math.floor(targets.districts * progress),
        volunteers: Math.floor(targets.volunteers * progress),
        impact: Math.floor(targets.impact * progress),
        growth: Math.floor(targets.growth * progress)
      });

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      }
    };

    requestAnimationFrame(animateCounters);
  }, [isVisible]);

  const metrics = [
    {
      icon: Users,
      value: counts.scholars,
      suffix: '+',
      label: 'Scholars Supported',
      color: 'from-blue-500 to-blue-600',
      description: 'Deserving students empowered with scholarships'
    },
    {
      icon: BookOpen,
      value: counts.books,
      suffix: '+',
      label: 'Books Distributed',
      color: 'from-green-500 to-green-600',
      description: 'Educational resources shared across communities'
    },
    {
      icon: MapPin,
      value: counts.districts,
      suffix: '+',
      label: 'Districts Served',
      color: 'from-purple-500 to-purple-600',
      description: 'Reaching across Odisha with impact'
    },
    {
      icon: Award,
      value: counts.volunteers,
      suffix: '+',
      label: 'Dedicated Volunteers',
      color: 'from-orange-500 to-orange-600',
      description: 'Community changemakers committed to education'
    },
    {
      icon: MapPin,
      value: counts.impact,
      suffix: '+',
      label: 'Villages Impacted',
      color: 'from-red-500 to-red-600',
      description: 'Remote communities transformed through education'
    },
    {
      icon: TrendingUp,
      value: counts.growth,
      suffix: '%',
      label: 'Year-on-Year Growth',
      color: 'from-cyan-500 to-cyan-600',
      description: 'Exponential expansion in reach and impact'
    }
  ];

  return (
    <section id="impact-infographics" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-700">
            Our Impact at a Glance
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Real numbers reflecting real change in the lives of students and communities across Odisha
          </p>
        </div>

        {/* Metrics Grid with Animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, idx) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={idx}
                className="group cursor-pointer"
                style={{
                  animation: isVisible ? `slideInUp 0.6s ease-out forwards` : 'none',
                  animationDelay: `${idx * 100}ms`
                }}
              >
                <div className={`bg-gradient-to-br ${metric.color} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <IconComponent size={32} className="text-white" />
                    </div>
                    <div className="text-white/30 group-hover:text-white/60 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.894 2.553a.989.989 0 00-1.788 0l-7 14a.989.989 0 001.788 1.787l7-14z" />
                      </svg>
                    </div>
                  </div>

                  <div className="text-white">
                    <div className="text-5xl font-black mb-2">
                      {metric.value.toLocaleString()}{metric.suffix}
                    </div>
                    <div className="text-lg font-bold mb-3">{metric.label}</div>
                    <div className="text-white/80 text-sm leading-relaxed">{metric.description}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visualization - Education Growth Chart */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16">
          <h3 className="text-3xl font-black text-gray-800 mb-8 text-center">
            Growth Trajectory
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Bar Chart Representation */}
            <div>
              <div className="space-y-6">
                {[
                  { year: '2026', scholars: 700, percent: 100 },
                  { year: '2027 (Projected)', scholars: 1200, percent: 85 },
                  { year: '2028 (Projected)', scholars: 2000, percent: 65 },
                  { year: '2029 (Projected)', scholars: 5000, percent: 25 }
                ].map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-gray-800">{item.year}</span>
                      <span className="text-red-600 font-bold">{item.scholars}+ Scholars</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-red-600 to-orange-600 transition-all duration-1000 rounded-full`}
                        style={{
                          width: isVisible ? `${item.percent}%` : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Categories */}
            <div>
              <div className="space-y-4">
                {[
                  { label: 'Scholarships & Financial Aid', value: 85, color: 'from-blue-500 to-blue-600' },
                  { label: 'Mentorship & Guidance', value: 72, color: 'from-green-500 to-green-600' },
                  { label: 'Skill Development', value: 64, color: 'from-purple-500 to-purple-600' },
                  { label: 'Community Care', value: 58, color: 'from-orange-500 to-orange-600' }
                ].map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-gray-800 group-hover:text-red-600 transition-colors">{item.label}</span>
                      <span className="text-gray-600">{item.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${item.color} transition-all duration-1000`}
                        style={{
                          width: isVisible ? `${item.value}%` : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Achievements Timeline */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-black mb-12 text-center">
            Key Achievements
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎓', achievement: '700+ Scholars Awarded', detail: 'Medha Samman 2026 Success' },
              { icon: '🏆', achievement: '₹50 Lakhs Distributed', detail: 'Direct Scholarship Support' },
              { icon: '📚', achievement: '15,000+ Books', detail: 'Educational Resources' },
              { icon: '🌟', achievement: '45+ Volunteers', detail: 'Active Community Members' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
                style={{
                  animation: isVisible ? `slideInUp 0.6s ease-out forwards` : 'none',
                  animationDelay: `${idx * 150}ms`
                }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="font-bold mb-2">{item.achievement}</div>
                <div className="text-sm text-white/80">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
