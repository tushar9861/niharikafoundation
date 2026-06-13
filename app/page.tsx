'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, MessageSquare, Mail, Phone, MapPin, Calendar, Clock, ChevronDown, Award, Heart, Users, BookOpen, TrendingUp, Star, Target, Globe, ChevronRight, ChevronLeft, Zap, Lightbulb, Shield, Smile } from 'lucide-react';
import { PhotoSlideshow } from '@/components/PhotoSlideshow';
import { JoinNowModal } from '@/components/JoinNowModal';
import { TechInnovationSection } from '@/components/TechInnovationSection';
import { ImpactInfographics } from '@/components/ImpactInfographics';

export default function NiharikaSite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [countdownDays, setCountdownDays] = useState(7);
  const [countdownHours, setCountdownHours] = useState(0);
  const [countdownMinutes, setCountdownMinutes] = useState(0);
  const [countdownSeconds, setCountdownSeconds] = useState(0);
  const [formData, setFormData] = useState({ name: '', village: '', marks: '', class: '', referral: '' });
  const [homeSlideIndex, setHomeSlideIndex] = useState(0);
  const [ceremonyGalleryIndex, setCeremonyGalleryIndex] = useState(0);
  const [scholarshipGalleryIndex, setScholarshipGalleryIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [visibleStats, setVisibleStats] = useState({});
  const [hoveredTeam, setHoveredTeam] = useState(null);
  const statsRef = useRef({});

  // Countdown Timer
  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      const nextScholarship = new Date(now);
      nextScholarship.setDate(nextScholarship.getDate() + 7);
      nextScholarship.setHours(0, 0, 0, 0);
      const diff = nextScholarship - now;
      if (diff > 0) {
        setCountdownDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
        setCountdownHours(Math.floor((diff / (1000 * 60 * 60)) % 24));
        setCountdownMinutes(Math.floor((diff / (1000 * 60)) % 60));
        setCountdownSeconds(Math.floor((diff / 1000) % 60));
      }
    };
    calculateCountdown();
    const timer = setInterval(calculateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  // Home Auto-slide
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setHomeSlideIndex(prev => (prev + 1) % homeSlides.length);
    }, 4000);
    return () => clearInterval(slideTimer);
  }, []);

  // Rotating Quotes
  const quotes = [
    { text: "Education is the most powerful weapon which you can use to change the world.", author: "- Nelson Mandela" },
    { text: "Invest in yourself. Your education is the best investment you can make.", author: "- Unknown" },
    { text: "An investment in knowledge pays the best interest.", author: "- Benjamin Franklin" },
    { text: "Education is not the filling of a pail, but the lighting of a fire.", author: "- William Butler Yeats" },
  ];

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setQuoteIndex(prev => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(quoteTimer);
  }, []);

  const whatsappLink = (message) => {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/918763979798?text=${encoded}`;
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const message = `📋 MEDHA SAMMAN 2026 - REGISTRATION\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n👤 Student Name: ${formData.name}\n📍 Village/District: ${formData.village}\n📊 10th Board Marks: ${formData.marks || 'Not provided'}\n📚 Current Class: ${formData.class}\n🔑 Referral Code: ${formData.referral || 'None'}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n✅ Please confirm this registration for Medha Samman 2026 Ceremony (24 May 2026).`;
    window.location.href = whatsappLink(message);
    setSelectedForm(null);
    setFormData({ name: '', village: '', marks: '', class: '', referral: '' });
  };

  const homeSlides = [
    { img: '/ceremony-gallery/dsc09206.jpg', title: 'Congratulations Ceremony' },
    { img: '/ceremony-gallery/dsc00217.jpg', title: 'Award Ceremony' },
    { img: '/ceremony-gallery/dsc09053.jpg', title: 'Cultural Performance' },
    { img: '/ceremony-gallery/dsc09178.jpg', title: '700+ Scholars' },
  ];

  const ceremonyImages = [
    { img: '/ceremony-gallery/dsc09206.jpg', title: 'Felicitation on Stage' },
    { img: '/ceremony-gallery/dsc00217.jpg', title: 'Award Certificate' },
    { img: '/ceremony-gallery/dsc09158.jpg', title: 'Founder Speech' },
    { img: '/ceremony-gallery/dsc09196.jpg', title: 'Student Recognition' },
    { img: '/ceremony-gallery/dsc00253.jpg', title: 'Team Portrait' },
    { img: '/ceremony-gallery/dsc09053.jpg', title: 'Odissi Dance Performance' },
  ];

  const scholarshipImages = [
    { img: '/ceremony-gallery/dsc00213.jpg', title: 'Family Celebration' },
    { img: '/ceremony-gallery/dsc09344.jpg', title: 'Woman Scholar Award' },
    { img: '/ceremony-gallery/dsc09214.jpg', title: 'Boy Recipient' },
    { img: '/ceremony-gallery/dsc00219.jpg', title: 'Dignitary Ceremony' },
    { img: '/ceremony-gallery/dsc00276.jpg', title: 'Group Recognition' },
    { img: '/ceremony-gallery/dsc00261.jpg', title: 'Award Presentation' },
  ];

  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* ===== NAVBAR ===== */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-red-700 to-red-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/niharika-logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
            <div>
              <div className="font-bold text-white text-sm">NIHARIKA</div>
              <div className="text-xs text-red-100">Foundation</div>
            </div>
          </div>
          <div className="hidden md:flex gap-6 text-white font-semibold">
            <a href="#home" className="hover:text-yellow-300 transition">Home</a>
            <a href="#about" className="hover:text-yellow-300 transition">About</a>
            <a href="#medha-samman" className="hover:text-yellow-300 transition">Medha Samman</a>
            <a href="#gallery" className="hover:text-yellow-300 transition">Gallery</a>
            <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
          </div>
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-red-800 px-4 py-4 space-y-2">
            <a href="#home" className="block text-white hover:text-yellow-300">Home</a>
            <a href="#about" className="block text-white hover:text-yellow-300">About</a>
            <a href="#medha-samman" className="block text-white hover:text-yellow-300">Medha Samman</a>
            <a href="#gallery" className="block text-white hover:text-yellow-300">Gallery</a>
            <a href="#contact" className="block text-white hover:text-yellow-300">Contact</a>
          </div>
        )}
      </nav>

      {/* ===== HERO WITH AUTO-SLIDESHOW & GROWTH THEME ===== */}
      <section id="home" className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Growth Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Auto-slideshow with Enhanced Transitions */}
        <div className="absolute inset-0 w-full h-full z-0">
          {homeSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-1200 ${idx === homeSlideIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
            >
              <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
            </div>
          ))}
        </div>

        {/* Hero Content with Animations */}
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          {/* Logo with Floating Animation */}
          <div className="mb-12 flex justify-center animate-slideInLeft" style={{animationDelay: '0.2s'}}>
            <div className="w-40 h-40 rounded-full border-8 border-gradient-to-r from-yellow-400 to-orange-400 shadow-2xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-white to-gray-100 relative group"
              style={{
                boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 0 60px rgba(255,193,7,0.8), inset 0 -4px 8px rgba(0,0,0,0.3)'
              }}
            >
              <img src="/niharika-logo.png" alt="Niharika" className="w-36 h-36 object-contain animate-float" />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Main Title with Growth Theme */}
          <h1 className="text-5xl md:text-7xl font-black mb-4 drop-shadow-lg animate-slideInRight" style={{animationDelay: '0.3s'}}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-300 to-red-400">NIHARIKA FOUNDATION</span>
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl font-bold text-yellow-300 mb-6 drop-shadow-lg animate-slideInLeft" style={{animationDelay: '0.4s'}}>
            Educational Charitable Trust • Odisha
          </p>

          {/* Mission with Growth Focus */}
          <p className="text-lg md:text-xl mb-8 drop-shadow-lg leading-relaxed animate-slideInRight" style={{animationDelay: '0.5s'}}>
            Empowering 700+ scholars through education • Building futures with technology • Nurturing growth in every student
          </p>

          {/* Growth & Innovation Focus */}
          <div className="mb-8 p-6 bg-white/10 backdrop-blur border border-white/20 rounded-2xl animate-scalePopIn" style={{animationDelay: '0.6s'}}>
            <p className="text-sm md:text-base text-yellow-100 mb-3 font-semibold">
              🚀 Soon: AI-Powered Learning Platform • Technology Integration • Scholarship Marketplace
            </p>
            <p className="text-xs md:text-sm text-gray-300">
              With your support, we're building the future of education in Odisha with cutting-edge technology, innovation, and personalized learning paths for every scholar.
            </p>
          </div>

          {/* CTA Buttons with Animations */}
          <div className="flex gap-4 justify-center flex-wrap animate-slideInUp" style={{animationDelay: '0.7s'}}>
            <button 
              onClick={() => setIsJoinModalOpen(true)} 
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-red-900 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-110 relative overflow-hidden group"
            >
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <a 
              href="#medha-samman" 
              className="px-8 py-4 bg-white/90 hover:bg-white text-red-900 rounded-full font-bold text-lg transition-all transform hover:scale-110 hover:shadow-2xl"
            >
              Learn More
            </a>
          </div>

          {/* Growth Statistics Teaser */}
          <div className="mt-12 grid grid-cols-3 gap-4 text-center animate-slideInUp" style={{animationDelay: '0.8s'}}>
            <div className="animate-bounce-slow" style={{animationDelay: '0s'}}>
              <div className="text-3xl font-black text-yellow-300">700+</div>
              <div className="text-sm text-gray-300">Scholars Supported</div>
            </div>
            <div className="animate-bounce-slow" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl font-black text-orange-300">50+</div>
              <div className="text-sm text-gray-300">Villages Reached</div>
            </div>
            <div className="animate-bounce-slow" style={{animationDelay: '0.4s'}}>
              <div className="text-3xl font-black text-red-300">12+</div>
              <div className="text-sm text-gray-300">Districts Served</div>
            </div>
          </div>
        </div>

        {/* Enhanced Slide Indicators */}
        <div className="absolute bottom-12 z-20 flex gap-2 justify-center w-full animate-slideUp" style={{animationDelay: '0.9s'}}>
          {homeSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setHomeSlideIndex(idx)}
              className={`rounded-full transition-all duration-500 ${idx === homeSlideIndex ? 'bg-yellow-400 w-8 h-3 shadow-lg shadow-yellow-400/50' : 'bg-white/40 w-3 h-3 hover:bg-white/60'}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 z-20 flex justify-center w-full">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* ===== COUNTDOWN TIMER ===== */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h3 className="text-white text-xl font-bold">Next Scholarship Announcement in:</h3>
          </div>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="bg-white/20 backdrop-blur rounded-lg px-6 py-3 border border-white/30">
              <div className="text-white font-black text-2xl">{countdownDays}</div>
              <div className="text-green-100 text-xs font-bold">DAYS</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-6 py-3 border border-white/30">
              <div className="text-white font-black text-2xl">{countdownHours}</div>
              <div className="text-green-100 text-xs font-bold">HOURS</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-6 py-3 border border-white/30">
              <div className="text-white font-black text-2xl">{countdownMinutes}</div>
              <div className="text-green-100 text-xs font-bold">MINS</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-6 py-3 border border-white/30">
              <div className="text-white font-black text-2xl">{countdownSeconds}</div>
              <div className="text-green-100 text-xs font-bold">SECS</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-700 animate-slideInDown">About Niharika Foundation</h2>
          <p className="text-center text-gray-600 mb-12 text-lg animate-slideInUp" style={{animationDelay: '0.2s'}}>
            Founded on <span className="font-bold text-red-600">24th May, 2026</span> in Baleshwar, Odisha
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft" style={{animationDelay: '0.3s'}}>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">Provide quality education, support research, and empower individuals and communities to achieve their full potential.</p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">A world where every individual has access to education, equal opportunities, and the power to create positive change.</p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-6 rounded-xl text-center hover:shadow-xl transition transform hover:scale-110 hover:-translate-y-2 animate-scalePopIn" style={{animationDelay: '0.4s'}}>
                  <div className="text-3xl font-black">700+</div>
                  <div className="text-sm font-bold">Scholars 2026</div>
                </div>
                <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-6 rounded-xl text-center hover:shadow-xl transition transform hover:scale-110 hover:-translate-y-2 animate-scalePopIn" style={{animationDelay: '0.5s'}}>
                  <div className="text-3xl font-black">50+</div>
                  <div className="text-sm font-bold">Villages</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-xl text-center hover:shadow-xl transition transform hover:scale-110 hover:-translate-y-2 animate-scalePopIn" style={{animationDelay: '0.6s'}}>
                  <div className="text-3xl font-black">100%</div>
                  <div className="text-sm font-bold">Transparent</div>
                </div>
              </div>
            </div>
            <img src="/ceremony-gallery/dsc09178.jpg" alt="Community" className="rounded-2xl shadow-2xl h-96 object-cover animate-slideInRight hover:shadow-3xl transition-shadow duration-500" style={{animationDelay: '0.4s'}} />
          </div>
        </div>
      </section>

      {/* ===== IMPACT COUNTERS ===== */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-700">Live Impact Metrics</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '🎓', label: 'Students Supported', stat: '700+', color: 'from-blue-500 to-blue-600' },
              { icon: '📚', label: 'Books Distributed', stat: '15K+', color: 'from-green-500 to-green-600' },
              { icon: '🤝', label: 'Volunteers', stat: '45+', color: 'from-yellow-500 to-yellow-600' },
              { icon: '📍', label: 'Districts Served', stat: '12+', color: 'from-purple-500 to-purple-600' },
            ].map((metric, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${metric.color} text-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-110 text-center`}>
                <div className="text-5xl mb-4">{metric.icon}</div>
                <div className="text-4xl font-black mb-2 animate-pulse">{metric.stat}</div>
                <p className="font-semibold text-sm opacity-90">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IMPACT INFOGRAPHICS ===== */}
      <ImpactInfographics />

      {/* ===== ROTATING QUOTE ===== */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="min-h-24 flex items-center justify-center">
            <div className="transition-all duration-700 opacity-100">
              <p className="text-2xl md:text-3xl font-bold mb-4 italic">"{quotes[quoteIndex].text}"</p>
              <p className="text-lg font-semibold text-blue-100">{quotes[quoteIndex].author}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROGRAMS & INITIATIVES ===== */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-700">Our Programs</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Comprehensive support across education, skills, and community development</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: 'Scholarship Support', desc: '700+ students awarded', color: 'from-blue-500 to-blue-600' },
              { icon: Users, title: 'Mentorship', desc: 'Expert guidance & coaching', color: 'from-green-500 to-green-600' },
              { icon: Zap, title: 'Skill Development', desc: 'Technical & soft skills', color: 'from-yellow-500 to-yellow-600' },
              { icon: Heart, title: 'Community Care', desc: 'Healthcare & welfare', color: 'from-red-500 to-red-600' },
            ].map((program, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${program.color} text-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300`}>
                <program.icon size={40} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-sm opacity-90">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IMPACT TIMELINE ===== */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-center text-white mb-12">Our Journey</h2>
          <div className="space-y-8">
            {[
              { year: '2026', title: 'Foundation Launched', desc: 'Niharika Foundation officially established on 24th May, 2026', icon: '🎯' },
              { year: '2026', title: 'Medha Samman 2026', desc: 'First ceremony awarding 700+ outstanding scholars', icon: '🏆' },
              { year: 'Future', title: 'Expansion', desc: 'Reaching 5000+ students across Odisha', icon: '🚀' },
              { year: 'Future', title: 'Excellence', desc: 'Building generations of empowered leaders', icon: '⭐' },
            ].map((milestone, idx) => (
              <div key={idx} className="flex gap-6 items-start animate-fadeIn" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-2xl">
                    {milestone.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold text-lg">{milestone.year}</div>
                  <div className="text-white font-bold text-xl mb-2">{milestone.title}</div>
                  <div className="text-gray-300">{milestone.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VALUES SECTION ===== */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-700">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Lightbulb, title: 'Excellence', color: 'from-yellow-500 to-yellow-600' },
              { icon: Shield, title: 'Integrity', color: 'from-blue-500 to-blue-600' },
              { icon: Smile, title: 'Compassion', color: 'from-red-500 to-red-600' },
              { icon: Target, title: 'Impact', color: 'from-green-500 to-green-600' },
            ].map((value, idx) => (
              <div key={idx} className={`text-center p-8 rounded-xl bg-gradient-to-br ${value.color} text-white hover:shadow-xl transition transform hover:scale-105`}>
                <value.icon size={48} className="mx-auto mb-4" />
                <h3 className="text-2xl font-bold">{value.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGY & INNOVATION ===== */}
      <TechInnovationSection />

      {/* ===== MEDHA SAMMAN 2026 ===== */}
      <section id="medha-samman" className="py-16 px-4 bg-gradient-to-b from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-600">Medha Samman 2026</h2>
            <p className="text-gray-600 text-lg">Celebrating Excellence & Awarding 700+ Outstanding Scholars</p>
          </div>

          {/* Featured Poster */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img src="/ceremony-gallery/dsc09206.jpg" alt="Medha Samman Poster" className="w-full h-96 object-cover" />
          </div>

          {/* Event Details Card */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4">
                <Calendar size={32} />
                <div>
                  <div className="font-bold">Date</div>
                  <div className="text-lg">24th May, 2026</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock size={32} />
                <div>
                  <div className="font-bold">Time</div>
                  <div className="text-lg">10:00 AM - 9:00 PM</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin size={32} />
                <div>
                  <div className="font-bold">Location</div>
                  <div className="text-lg">Gandhi Smruti, Baleshwar</div>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-white border-2 border-red-300 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Register for Medha Samman 2026</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleFormChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none font-semibold"
                required
              />
              <input
                type="text"
                name="village"
                placeholder="Village / District"
                value={formData.village}
                onChange={handleFormChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none font-semibold"
                required
              />
              <input
                type="number"
                name="marks"
                placeholder="10th Board Marks (Optional)"
                value={formData.marks}
                onChange={handleFormChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none font-semibold"
              />
              <input
                type="text"
                name="class"
                placeholder="Current Class"
                value={formData.class}
                onChange={handleFormChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none font-semibold"
                required
              />
              <input
                type="text"
                name="referral"
                placeholder="Referral Code (Optional)"
                value={formData.referral}
                onChange={handleFormChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none font-semibold"
              />
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-bold text-lg hover:shadow-lg transition transform hover:scale-105"
              >
                Register via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== CEREMONY GALLERY ===== */}
      <section id="gallery" className="py-16 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center text-white mb-4">Ceremony Gallery</h2>
          <p className="text-center text-gray-300 mb-12">Moments from Medha Samman 2026 Inauguration Ceremony</p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {ceremonyImages.map((image, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden shadow-2xl group cursor-pointer h-64">
                <img src={image.img} alt={image.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition">
                  <p className="text-white font-bold">{image.title}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-4xl font-black text-center text-white mb-4">Scholarship Distribution</h2>
          <p className="text-center text-gray-300 mb-12">Celebrating 700+ Student Awardees</p>

          <div className="grid md:grid-cols-3 gap-6">
            {scholarshipImages.map((image, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden shadow-2xl group cursor-pointer h-64">
                <img src={image.img} alt={image.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition">
                  <p className="text-white font-bold">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-700">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Find answers to common questions about our programs</p>

          <div className="space-y-4">
            {[
              { q: 'Who is eligible for Medha Samman scholarship?', a: 'Students who scored 90% and above in 10th Board Exam are eligible. Applications are open to all students in Odisha.' },
              { q: 'How do I apply?', a: 'You can register through our website form or visit our office in Baleshwar. Registration is free.' },
              { q: 'What is the scholarship amount?', a: 'Scholarship amounts vary based on merit and need assessment. Each scholar receives financial support, books, and mentorship.' },
              { q: 'When is the next ceremony?', a: 'Our countdown timer shows exactly when the next scholarship announcement and ceremony will happen.' },
            ].map((item, idx) => (
              <div key={idx} className="border-2 border-gray-300 rounded-lg overflow-hidden hover:border-red-600 transition">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full px-6 py-4 bg-white flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="font-bold text-gray-800 text-left">{item.q}</span>
                  <ChevronDown size={20} className={`transition transform ${expandedFAQ === idx ? 'rotate-180' : ''}`} />
                </button>
                {expandedFAQ === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t-2 border-gray-300 text-gray-700">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM SECTION ===== */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-700">Leadership Team</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Dedicated individuals driving our mission</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Rutuick Jee', role: 'Founder & Chairman', icon: '👨‍💼' },
              { name: 'Muralidhar Nayak', role: 'President', icon: '👨‍💼' },
              { name: 'Ardhendu Sekhar Das', role: 'Vice-President', icon: '👨‍💼' },
              { name: 'Debadutta Das', role: 'General Secretary', icon: '👨‍💼' },
            ].map((member, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredTeam(idx)}
                onMouseLeave={() => setHoveredTeam(null)}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl text-center hover:shadow-xl transition transform hover:scale-105 cursor-pointer"
              >
                <div className="text-5xl mb-4">{member.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-gray-600 font-semibold text-sm">{member.role}</p>
                {hoveredTeam === idx && (
                  <div className="mt-4 text-xs text-gray-600 animate-fadeIn">
                    Leading with vision & dedication
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IMPACT NUMBERS ===== */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-700">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { stat: '700+', label: 'Scholars Awarded', color: 'from-red-500 to-red-600', icon: '🎓' },
              { stat: '50+', label: 'Villages Reached', color: 'from-green-500 to-green-600', icon: '🏘️' },
              { stat: '100%', label: 'Transparent', color: 'from-blue-500 to-blue-600', icon: '✓' },
              { stat: '2026', label: 'Foundation Year', color: 'from-yellow-500 to-yellow-600', icon: '📅' },
            ].map((impact, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${impact.color} text-white rounded-xl p-8 shadow-lg text-center hover:shadow-2xl transition transform hover:scale-105`}>
                <div className="text-5xl mb-4">{impact.icon}</div>
                <div className="text-4xl font-black mb-2">{impact.stat}</div>
                <p className="font-semibold text-sm opacity-90">{impact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-700">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-8 rounded-2xl">
              <Phone size={32} className="mx-auto mb-4" />
              <div className="font-bold text-lg mb-2">Phone</div>
              <a href="tel:+918763979798" className="hover:text-yellow-300">+91 8763979798</a>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-2xl">
              <Mail size={32} className="mx-auto mb-4" />
              <div className="font-bold text-lg mb-2">Email</div>
              <a href="mailto:niharikafoundation.org@gmail.com" className="hover:text-yellow-300">niharikafoundation.org@gmail.com</a>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-2xl">
              <MapPin size={32} className="mx-auto mb-4" />
              <div className="font-bold text-lg mb-2">Location</div>
              <p>Baleshwar, Odisha, India</p>
            </div>
          </div>

          <a href={whatsappLink('Hello! I want to know more about Niharika Foundation.')} className="inline-block px-8 py-4 bg-green-600 text-white rounded-full font-bold text-lg hover:bg-green-700 transition transform hover:scale-105">
            Contact via WhatsApp
          </a>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-4 font-semibold">© 2026 Niharika Foundation - Educational Charitable Trust</p>
          <p className="text-gray-400">"Together for Education • Together for a Better Future"</p>
        </div>
      </footer>

      {/* ===== REGISTRATION MODAL ===== */}
      {selectedForm && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setSelectedForm(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Medha Samman Registration</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleFormChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none font-semibold"
                required
              />
              <input
                type="text"
                name="village"
                placeholder="Village / District"
                value={formData.village}
                onChange={handleFormChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none font-semibold"
                required
              />
              <input
                type="number"
                name="marks"
                placeholder="10th Board Marks (Optional)"
                value={formData.marks}
                onChange={handleFormChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none font-semibold"
              />
              <input
                type="text"
                name="class"
                placeholder="Current Class"
                value={formData.class}
                onChange={handleFormChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none font-semibold"
                required
              />
              <input
                type="text"
                name="referral"
                placeholder="Referral Code (Optional)"
                value={formData.referral}
                onChange={handleFormChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none font-semibold"
              />
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-bold text-lg hover:shadow-lg transition"
              >
                Send to WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ===== SOCIAL PROOF - TESTIMONIALS ===== */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-700">What People Say</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Hear from scholars, volunteers, and supporters</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Shreya Panda', role: 'Medha Samman Scholar 2026', text: 'The scholarship from Niharika Foundation helped me pursue my engineering dreams. The support and mentorship made all the difference.', icon: '🎓' },
              { name: 'Amit Nayak', role: 'Volunteer Mentor', text: 'Volunteering with Niharika has been one of the most rewarding experiences. Seeing students\' growth is incredibly fulfilling.', icon: '🤝' },
              { name: 'Dipali Mahanta', role: 'CSR Partner (Company)', text: 'Partnering with Niharika Foundation for our CSR initiatives has created genuine impact. Transparent and impactful work.', icon: '💼' },
              { name: 'Ravi Kumar', role: 'Life Member', text: 'Being part of the Life Membership program gives me a sense of belonging to a purposeful community working for real change.', icon: '💪' },
              { name: 'Neha Singh', role: 'Scholarship Parent', text: 'My son received mentorship that transformed his approach to studies. He scored 97% in 12th thanks to the support.', icon: '👨‍👩‍👧' },
              { name: 'Subhash Das', role: 'Community Elder', text: 'Niharika Foundation has brought hope to many families in our village. They truly care about education and development.', icon: '👴' },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:translate-y-[-8px] p-6 border-t-4 border-red-600">
                <div className="text-5xl mb-4">{testimonial.icon}</div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="pt-6 border-t border-gray-200">
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOUNDER STORY ===== */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-700">Founder\'s Vision</h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                <span className="font-bold text-2xl text-blue-600">Rutuick Jee</span>, the visionary founder of Niharika Foundation, started this journey with a simple belief: education has the power to transform lives.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  { year: '2025', title: 'The Realization', desc: 'Noticed bright students unable to pursue education due to financial constraints in Odisha villages.' },
                  { year: '2026', title: 'Foundation Launched', desc: 'Officially registered Niharika Foundation with a mission to support 1000+ students.' },
                  { year: 'May 24, 2026', title: 'First Ceremony', desc: 'Successfully awarded scholarships to 700+ merit students in the inaugural Medha Samman 2026.' },
                  { year: 'Future', title: 'Vision 2030', desc: 'Goal to reach 5000+ students and create a sustainable model for education support.' },
                ].map((milestone, idx) => (
                  <div key={idx} className="border-l-4 border-blue-600 pl-4 py-2">
                    <div className="text-sm font-bold text-blue-600">{milestone.year}</div>
                    <div className="font-bold text-gray-800">{milestone.title}</div>
                    <div className="text-sm text-gray-600">{milestone.desc}</div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-100 border-2 border-blue-600 rounded-lg p-6">
                <p className="text-blue-900 font-semibold italic">
                  "Education is not just about passing exams; it\'s about empowering individuals to become agents of change in their communities. That\'s what Niharika stands for."
                </p>
                <p className="text-blue-800 font-bold mt-3">— Rutuick Jee, Founder</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-12 text-white text-center shadow-2xl">
              <div className="text-8xl mb-6">👨‍💼</div>
              <h3 className="text-3xl font-black mb-4">Rutuick Jee</h3>
              <p className="text-xl font-bold mb-2">Founder & Chairman</p>
              <p className="text-blue-100 mb-8">Visionary Leader | Education Advocate | Community Builder</p>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-3xl font-black">700+</div>
                  <p className="text-sm">Scholars Supported</p>
                </div>
                <div>
                  <div className="text-3xl font-black">12+</div>
                  <p className="text-sm">Districts Served</p>
                </div>
                <div>
                  <div className="text-3xl font-black">₹50L+</div>
                  <p className="text-sm">Scholarships Given</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST & CREDIBILITY ===== */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12 text-gray-800">Why Trust Niharika?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '📋', title: 'Transparent', desc: 'Full financial transparency and regular reports' },
              { icon: '✅', title: 'Verified', desc: 'Registered NGO with official documentation' },
              { icon: '🎯', title: 'Impactful', desc: '100% of donations reach beneficiaries' },
              { icon: '🤝', title: 'Accountable', desc: 'Regular impact assessments and updates' },
            ].map((point, idx) => (
              <div key={idx} className="text-center bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border-2 border-gray-200 hover:border-green-600 hover:shadow-lg transition">
                <div className="text-5xl mb-4">{point.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{point.title}</h3>
                <p className="text-gray-600 text-sm">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-4">Stay Updated</h2>
          <p className="text-xl text-red-100 mb-8">Get regular updates about our programs, success stories, and impact reports directly to your inbox.</p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-800 font-semibold focus:outline-none"
            />
            <button className="px-8 py-3 bg-white text-red-600 rounded-full font-bold hover:shadow-lg transition transform hover:scale-105">
              Subscribe
            </button>
          </div>
          <p className="text-red-100 text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/niharika-logo.png" alt="Niharika" className="h-10 w-10 object-contain" />
                <div>
                  <h3 className="text-xl font-black text-red-600">NIHARIKA</h3>
                  <p className="text-xs text-gray-400">Foundation</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering futures through quality education and community development in Odisha.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-red-600 transition">Home</a></li>
                <li><a href="#about" className="hover:text-red-600 transition">About</a></li>
                <li><a href="/impact" className="hover:text-red-600 transition">Impact</a></li>
                <li><a href="/get-involved" className="hover:text-red-600 transition">Get Involved</a></li>
                <li><a href="#contact" className="hover:text-red-600 transition">Contact</a></li>
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-bold text-lg mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#medha-samman" className="hover:text-red-600 transition">Medha Samman</a></li>
                <li><a href="/get-involved" className="hover:text-red-600 transition">Membership</a></li>
                <li><a href="/get-involved" className="hover:text-red-600 transition">Volunteering</a></li>
                <li><a href="/get-involved" className="hover:text-red-600 transition">Internships</a></li>
                <li><a href="/get-involved" className="hover:text-red-600 transition">CSR Partnership</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <div className="space-y-3 text-gray-400 text-sm">
                <p>Baleshwar, Odisha</p>
                <p>Phone: +91 8763-979-798</p>
                <p>Email: info@niharikafoundation.org</p>
                <div className="flex gap-4 mt-4">
                  <a href="https://wa.me/918763979798" className="text-green-500 hover:text-green-400 transition">WhatsApp</a>
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition">Facebook</a>
                  <a href="#" className="text-blue-300 hover:text-blue-200 transition">Instagram</a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Niharika Foundation. All rights reserved. | Registered Trust | Transparency & Impact Focused</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
