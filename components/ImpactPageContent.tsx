'use client';

import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, BookOpen, Heart, Globe } from 'lucide-react';
import { OdishaMap } from '@/components/OdishaMap';

export function ImpactPageContent() {
  // Analytics Data
  const yearlyGrowth = [
    { year: '2026', students: 700, volunteers: 45, donations: 250, districts: 12 },
    { year: '2027', students: 1200, volunteers: 85, donations: 450, districts: 15 },
    { year: '2028', students: 1800, volunteers: 140, donations: 680, districts: 18 },
  ];

  const impactMetrics = [
    { icon: Users, label: 'Students Supported', value: '700+', color: 'from-blue-500 to-blue-600' },
    { icon: BookOpen, label: 'Scholarships', value: '₹50L+', color: 'from-green-500 to-green-600' },
    { icon: Globe, label: 'Districts Served', value: '12+', color: 'from-purple-500 to-purple-600' },
    { icon: Heart, label: 'Volunteers', value: '45+', color: 'from-red-500 to-red-600' },
  ];

  const successStories = [
    {
      name: 'Priya Kumar',
      achievement: 'AIIMS Delhi Medical Student',
      story: 'From a small village in Baleshwar, Priya secured 95% in 10th board exam. With Niharika\'s scholarship, she pursued her medical dreams.',
      image: '👩‍⚕️'
    },
    {
      name: 'Rahul Singh',
      achievement: 'Software Engineer at TCS',
      story: 'Started with coding basics through our skill training. Now leading projects and mentoring juniors at a Fortune 500 company.',
      image: '👨‍💻'
    },
    {
      name: 'Anjali Patel',
      achievement: 'Social Entrepreneur',
      story: 'Built her own NGO supporting 100+ students. Started her journey as a Niharika scholar in 2026.',
      image: '👩‍🎓'
    },
    {
      name: 'Vikram Das',
      achievement: 'IIT Bombay Engineer',
      story: 'Secured AIR 342 in JEE Advanced. Mentorship and financial support from Niharika changed his trajectory.',
      image: '👨‍🔬'
    },
  ];

  const programImpact = [
    { program: 'Scholarships', reach: 450, impact: 'Direct financial support to merit students' },
    { program: 'Mentorship', reach: 250, impact: 'Career guidance and personal development' },
    { program: 'Skill Training', reach: 180, impact: 'Technical and soft skills development' },
    { program: 'Community Care', reach: 120, impact: 'Healthcare and welfare support' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-red-600 via-red-700 to-red-800 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black mb-6 animate-slideInDown">Our Impact</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto animate-slideInUp" style={{animationDelay: '0.2s'}}>
            Measuring success through lives transformed, futures brightened, and communities empowered through quality education.
          </p>
        </div>
      </section>

      {/* Odisha Interactive Map */}
      <section className="py-16 px-4 bg-white">
        <OdishaMap />
      </section>

      {/* Impact Metrics */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12 text-gray-800 animate-slideInDown">Key Metrics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${metric.color} text-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-105 animate-scalePopIn`} style={{animationDelay: `${idx * 100}ms`}}>
                <metric.icon size={40} className="mb-4" />
                <div className="text-4xl font-black mb-2">{metric.value}</div>
                <p className="font-semibold text-sm opacity-90">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Charts */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12 text-gray-800">Year-wise Growth</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Student Growth */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Student Support Growth</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={yearlyGrowth}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="students" stroke="#dc2626" strokeWidth={3} name="Students" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Volunteer Growth */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Volunteer Growth</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={yearlyGrowth}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="volunteers" fill="#22c55e" stroke="#16a34a" strokeWidth={2} name="Volunteers" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Program Impact Breakdown */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12 text-gray-800">Program Reach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={programImpact}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="program" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="reach" fill="#dc2626" name="Beneficiaries" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4">
              {programImpact.map((program, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 transition">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold text-gray-800">{program.program}</h3>
                    <span className="text-2xl font-black text-red-600">{program.reach}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{program.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-700">Success Stories</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Real stories of transformation and achievement from our scholars</p>

          <div className="grid md:grid-cols-2 gap-6">
            {successStories.map((story, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden hover:translate-y-[-8px]">
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 text-center">
                  <div className="text-6xl mb-4">{story.image}</div>
                  <h3 className="text-2xl font-bold mb-2">{story.name}</h3>
                  <p className="text-red-100 font-semibold">{story.achievement}</p>
                </div>
                <div className="p-6 text-gray-700">
                  <p className="leading-relaxed italic">"{story.story}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Over Time */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12 text-gray-800">Our Journey</h2>
          <div className="relative">
            {[
              { year: 'May 2026', title: 'Foundation Launch', desc: 'Niharika Foundation officially established', icon: '🎯' },
              { year: 'May 2026', title: 'Medha Samman 2026', desc: 'First scholarship ceremony - 700+ scholars honored', icon: '🏆' },
              { year: '2027', title: 'Expansion Phase', desc: 'Planned expansion to 1200+ students', icon: '🚀' },
              { year: '2028+', title: 'Vision 2030', desc: 'Goal to reach 5000+ students nationwide', icon: '⭐' },
            ].map((milestone, idx) => (
              <div key={idx} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-700 text-3xl shadow-lg">
                    {milestone.icon}
                  </div>
                </div>
                <div className="flex-1 bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 transition">
                  <div className="text-sm font-bold text-red-600 mb-2">{milestone.year}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12 text-gray-800">Reports & Downloads</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Annual Report 2026', type: 'PDF', color: 'from-blue-500 to-blue-600' },
              { title: 'Impact Assessment', type: 'PDF', color: 'from-green-500 to-green-600' },
              { title: 'Financials & Transparency', type: 'PDF', color: 'from-red-500 to-red-600' },
            ].map((report, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${report.color} text-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer`}>
                <div className="text-4xl font-black mb-4">📄</div>
                <h3 className="text-xl font-bold mb-2">{report.title}</h3>
                <p className="text-sm opacity-90 mb-4">{report.type}</p>
                <a href="#" className="inline-block text-sm font-semibold bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition">
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">Join Our Impact Story</h2>
          <p className="text-xl text-red-100 mb-8">Be part of a movement transforming lives through education</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/get-involved"
              className="px-8 py-3 bg-white text-red-600 rounded-full font-bold hover:shadow-lg transition transform hover:scale-105"
            >
              Get Involved
            </a>
            <a
              href="https://wa.me/918763979798?text=I%20want%20to%20make%20a%20donation%20to%20support%20this%20impact."
              className="px-8 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition transform hover:scale-105"
            >
              Donate Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
