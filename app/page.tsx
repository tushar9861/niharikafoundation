'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, Heart, Users, BookOpen, Menu, X, ChevronUp,
  Award, Target, Globe, Sparkles, ArrowRight, CheckCircle, MessageSquare,
  Mail, Phone, MapPin
} from 'lucide-react';

export default function NiharikaSite() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const navigationItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Programs', id: 'programs' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Get Involved', id: 'volunteer' },
    { label: 'Contact', id: 'contact' }
  ];

  const programs = [
    {
      title: "Scholarship Program",
      icon: BookOpen,
      description: "Annual scholarships covering tuition, books, and living expenses",
      impact: "5000+ students",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      title: "Mentorship Initiative",
      icon: Users,
      description: "One-on-one guidance from industry experts and alumni",
      impact: "1200+ mentored",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      title: "Skill Development",
      icon: Sparkles,
      description: "Technical and soft skills training in digital literacy and coding",
      impact: "2000+ trained",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50"
    },
    {
      title: "Excellence Awards",
      icon: Award,
      description: "Recognition and prizes for academic and extracurricular achievements",
      impact: "500+ awarded",
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50"
    },
    {
      title: "Global Exposure",
      icon: Globe,
      description: "International exchange programs and virtual collaborations",
      impact: "300+ abroad",
      color: "from-teal-500 to-green-500",
      bgColor: "from-teal-50 to-green-50"
    },
    {
      title: "Community Support",
      icon: Heart,
      description: "Healthcare, nutrition, and family support services",
      impact: "50+ villages",
      color: "from-red-500 to-orange-500",
      bgColor: "from-red-50 to-orange-50"
    }
  ];

  const testimonials = [
    {
      name: "Priya Kumar",
      role: "Medical Student, AIIMS",
      text: "The scholarship changed my life completely. I can now focus on my studies without financial stress.",
      emoji: "👩‍⚕️"
    },
    {
      name: "Rahul Singh",
      role: "Software Developer, TCS",
      text: "The skill training program gave me the tools to land my dream job. Their mentorship guided every step.",
      emoji: "👨‍💻"
    },
    {
      name: "Anjali Patel",
      role: "Social Entrepreneur",
      text: "Niharika Foundation believed in me. Today, I run my own NGO helping 200+ underprivileged children.",
      emoji: "👩‍🎓"
    }
  ];

  const stats = [
    { icon: Users, label: 'Students Served', value: '5000+', color: 'from-red-500 to-red-600' },
    { icon: Globe, label: 'Villages Reached', value: '50+', color: 'from-green-500 to-green-600' },
    { icon: Award, label: 'Scholarships', value: '₹50L+', color: 'from-yellow-500 to-yellow-600' },
    { icon: Target, label: 'Success Rate', value: '95%', color: 'from-purple-500 to-purple-600' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const whatsappLink = (message) => {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/919876543210?text=${encoded}`;
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // NAVBAR
  const navbar = (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-2xl' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
          <img src="/niharika-logo.png" alt="Niharika" className="w-12 h-12 object-contain" />
          <div className="flex flex-col">
            <span className="text-sm font-black text-red-700">NIHARIKA</span>
            <span className="text-xs text-gray-600 font-semibold">Foundation</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-bold transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-red-600 border-b-3 border-red-600 pb-1'
                  : 'text-gray-700 hover:text-red-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <a
            href={whatsappLink('Hello! I want to know more about Niharika Foundation')}
            className="hidden sm:block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
          >
            Donate
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-red-600"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t-2 border-red-200 py-4 px-4 space-y-3 animate-slideDown">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg font-semibold transition-all ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white'
                  : 'text-gray-700 hover:bg-red-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );

  // HERO SECTION
  const heroSection = (
    <section id="home" className="min-h-screen bg-gradient-to-br from-red-900 via-red-600 to-orange-500 flex items-center justify-center overflow-hidden pt-20 relative">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-300 opacity-5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl animate-pulse"></div>
      
      {/* Logo Watermarks */}
      <div className="absolute top-20 right-10 opacity-5 w-80 h-80">
        <img src="/niharika-logo.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-20 left-5 opacity-5 w-72 h-72">
        <img src="/niharika-logo.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="relative z-10 text-center px-4 md:px-8 max-w-5xl">
        {/* Large Animated Logo */}
        <div className="mb-8 flex justify-center">
          <div className="w-56 h-56 md:w-72 md:h-72 relative animate-bounce" style={{ animationDuration: '3s' }}>
            <img 
              src="/niharika-logo.png" 
              alt="Niharika Foundation Logo" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-4 text-white drop-shadow-lg">
          Niharika Foundation
        </h1>
        <p className="text-2xl md:text-3xl font-bold text-yellow-200 mb-4 drop-shadow-lg">
          Educational Charitable Trust & Research Center
        </p>
        <p className="text-lg md:text-xl text-white mb-12 font-semibold drop-shadow-lg max-w-3xl mx-auto">
          Transforming Lives Through Quality Education in Odisha's Rural Communities
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#programs"
            className="px-8 py-4 bg-gradient-to-r from-yellow-300 to-yellow-400 text-red-900 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105 flex items-center gap-2"
          >
            Explore Programs <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={whatsappLink('Hello! I want to know more about Niharika Foundation')}
            className="px-8 py-4 bg-white text-red-900 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <MessageSquare className="w-5 h-5" /> Contact Now
          </a>
        </div>
      </div>
    </section>
  );

  // ABOUT SECTION
  const aboutSection = (
    <section id="about" className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Logo Watermarks */}
      <div className="absolute top-10 right-10 opacity-5 w-64 h-64">
        <img src="/niharika-logo.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-20 left-5 opacity-5 w-64 h-64">
        <img src="/niharika-logo.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl font-black text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600">
          About Niharika Foundation
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto font-semibold">
          Empowering Odisha's Youth through Education, Opportunity & Community Support
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-yellow-400 to-green-500 rounded-3xl opacity-10 blur-3xl"></div>
            <img 
              src="/odisha-students.jpg" 
              alt="Students Learning in Odisha" 
              className="relative rounded-3xl shadow-2xl h-80 w-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 font-semibold">
              Niharika Foundation is dedicated to transforming lives through accessible, quality education. Founded with a mission to bridge the educational gap in rural Odisha, we believe education is the cornerstone of sustainable development.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8 font-semibold">
              Our team works tirelessly to provide scholarships, mentorship, and skill development programs to thousands of underprivileged students across Odisha and beyond.
            </p>
            
            <div className="space-y-4">
              {[
                "5000+ Students Supported with Scholarships",
                "50+ Villages Reached with Education Programs",
                "100+ Community Leaders Trained for Impact"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className={`w-6 h-6 flex-shrink-0 ${['text-red-600', 'text-green-600', 'text-yellow-600'][idx]}`} />
                  <span className="text-gray-700 font-semibold text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className={`bg-gradient-to-br ${stat.color} rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105`}
            >
              <stat.icon className="w-12 h-12 mb-4" />
              <div className="text-4xl font-black mb-2">{stat.value}</div>
              <div className="font-bold text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // PROGRAMS SECTION
  const programsSection = (
    <section id="programs" className="py-20 px-4 md:px-8 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Logo Watermark */}
      <div className="absolute top-20 right-10 opacity-5 w-72 h-72">
        <img src="/niharika-logo.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl font-black text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-green-600">
          Our Programs & Initiatives
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto font-semibold">
          Comprehensive educational solutions designed for Odisha's underserved communities
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => {
            const Icon = program.icon;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative bg-gradient-to-br ${program.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform ${hoveredCard === idx ? 'scale-105 -translate-y-4' : ''} border-2 border-white overflow-hidden`}
              >
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 ${hoveredCard === idx ? 'opacity-5' : ''} rounded-3xl transition-all duration-300`}></div>
                
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 shadow-lg transform transition-all ${hoveredCard === idx ? 'scale-110 rotate-12' : ''}`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {program.title}
                </h3>
                
                <p className="text-gray-600 text-base leading-relaxed mb-6 font-semibold">
                  {program.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-700 bg-white bg-opacity-60 px-4 py-2 rounded-full">
                    {program.impact}
                  </span>
                  <div className="text-gray-700 group hover:translate-x-2 transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );

  // TESTIMONIALS SECTION
  const testimonialSection = (
    <section id="testimonials" className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Logo Watermark */}
      <div className="absolute bottom-20 right-5 opacity-5 w-72 h-72">
        <img src="/niharika-logo.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl font-black text-center mb-4 text-white">
          Impact Stories
        </h2>
        <p className="text-center text-gray-300 text-lg mb-16 max-w-3xl mx-auto font-semibold">
          Real stories of transformation from our scholars and alumni
        </p>

        <div className="overflow-hidden bg-gradient-to-r from-green-50 via-yellow-50 to-red-50 rounded-3xl p-12 shadow-2xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="w-full flex-shrink-0 px-4">
                <div className="text-center">
                  <div className="text-8xl mb-8">{testimonial.emoji}</div>
                  <p className="text-2xl text-gray-800 mb-8 italic font-semibold leading-relaxed max-w-2xl mx-auto">
                    "{testimonial.text}"
                  </p>
                  <p className="text-2xl font-bold text-gray-800 mb-2">
                    {testimonial.name}
                  </p>
                  <p className="text-lg text-gray-600 font-bold">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-4 h-4 rounded-full transition-all ${
                currentSlide === idx 
                  ? 'bg-red-600 w-12' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );

  // GALLERY SECTION
  const gallerySection = (
    <section id="gallery" className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Logo Watermark */}
      <div className="absolute top-10 left-10 opacity-5 w-80 h-80">
        <img src="/niharika-logo.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl font-black text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-green-600">
          Odisha: Our Heartland
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto font-semibold">
          Documenting our journey through Odisha's vibrant communities and rich cultural heritage
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { img: '/odisha-temple.jpg', title: 'Cultural Heritage', desc: 'Preserving Odisha\'s traditions' },
            { img: '/odisha-village.jpg', title: 'Rural Communities', desc: 'Development initiatives' },
            { img: '/odisha-students.jpg', title: 'Student Success', desc: 'Education at its best' },
            { img: '/odisha-community.jpg', title: 'Community Work', desc: 'Together we grow stronger' },
            { img: '/odisha-culture.jpg', title: 'Coastal Odisha', desc: 'Sustainable future ahead' },
            { img: '/niharika-logo.png', title: 'Our Mission', desc: 'Empowering through education' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl overflow-hidden h-80 group cursor-pointer shadow-lg hover:shadow-2xl transition-all"
            >
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-end p-6 text-white">
                <div>
                  <h3 className="text-2xl font-bold mb-2 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-200 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100 font-semibold">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // VOLUNTEER & DONATE SECTION
  const volunteerSection = (
    <section id="volunteer" className="py-20 px-4 md:px-8 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 relative overflow-hidden">
      {/* Logo Watermarks */}
      <div className="absolute top-10 left-10 opacity-10 w-80 h-80">
        <img src="/niharika-logo.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-0 right-0 opacity-10 w-96 h-96">
        <img src="/niharika-logo.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl font-black text-center mb-4 text-white">
          Make a Difference Today
        </h2>
        <p className="text-center text-white text-lg mb-16 max-w-3xl mx-auto font-bold">
          Join us in transforming lives through education and community support in Odisha
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Volunteer Card */}
          <div className="bg-white bg-opacity-95 backdrop-blur rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-6 mx-auto shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Become a Volunteer
            </h3>
            <p className="text-gray-700 text-center mb-8 leading-relaxed font-semibold">
              Your time and expertise can change a child's life. Join our team of dedicated volunteers and make an impact in Odisha's communities.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="font-semibold">Flexible volunteering opportunities</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="font-semibold">Online and offline programs available</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="font-semibold">Certificate of appreciation provided</span>
              </div>
            </div>
            <a
              href={whatsappLink('I would like to volunteer with Niharika Foundation')}
              className="block w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold text-center hover:shadow-lg transition-all transform hover:scale-105"
            >
              Start Volunteering
            </a>
          </div>

          {/* Donate Card */}
          <div className="bg-white bg-opacity-95 backdrop-blur rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-6 mx-auto shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Support Our Mission
            </h3>
            <p className="text-gray-700 text-center mb-8 leading-relaxed font-semibold">
              Every rupee you donate goes directly to helping underprivileged students access quality education and life-changing opportunities.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="font-semibold">100% transparent spending</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="font-semibold">Registered charitable trust</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="font-semibold">Tax-deductible donations</span>
              </div>
            </div>
            <a
              href={whatsappLink('I would like to donate to Niharika Foundation')}
              className="block w-full px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full font-bold text-center hover:shadow-lg transition-all transform hover:scale-105"
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  // CONTACT SECTION
  const contactSection = (
    <section id="contact" className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Logo Watermark */}
      <div className="absolute top-20 right-10 opacity-5 w-72 h-72">
        <img src="/niharika-logo.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl font-black text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-green-600">
          Get In Touch With Us
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto font-semibold">
          Have questions? We&apos;d love to hear from you. Reach out to us today!
        </p>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: MapPin, title: 'Address', content: 'Odisha, India', color: 'from-red-500 to-red-600' },
            { icon: Phone, title: 'Phone', content: '+91 98765 43210', color: 'from-green-500 to-green-600' },
            { icon: Mail, title: 'Email', content: 'info@niharika.org', color: 'from-blue-500 to-blue-600' },
          ].map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${contact.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {contact.title}
                </h3>
                <p className="text-gray-600 text-lg font-bold">
                  {contact.content}
                </p>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-red-50 via-yellow-50 to-green-50 rounded-3xl p-12 shadow-xl border-2 border-white">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-bold mb-3">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Enter your full name"
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-300 focus:border-red-600 focus:outline-none bg-white text-gray-800 font-semibold"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-3">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-300 focus:border-red-600 focus:outline-none bg-white text-gray-800 font-semibold"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-3">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Tell us how we can help you..."
                  rows={5}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-300 focus:border-red-600 focus:outline-none bg-white text-gray-800 font-semibold resize-none"
                ></textarea>
              </div>
              <a
                href={whatsappLink(
                  `Hello! I'm ${formData.name || 'a visitor'} (${formData.email || 'no email provided'}). ${formData.message || 'I would like to inquire about Niharika Foundation.'}`
                )}
                className="block w-full px-6 py-4 bg-gradient-to-r from-green-600 via-green-500 to-green-600 text-white rounded-full font-bold text-lg text-center hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" /> Send via WhatsApp
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );

  // FOOTER
  const footer = (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Logo Watermark */}
      <div className="absolute top-10 right-10 opacity-5 w-64 h-64">
        <img src="/niharika-logo.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <img src="/niharika-logo.png" alt="" className="w-8 h-8 object-contain" />
              Niharika
            </h4>
            <p className="text-gray-400 font-semibold">Transforming lives through education and opportunity</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Programs</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#programs" className="hover:text-white transition font-semibold">Scholarships</a></li>
              <li><a href="#programs" className="hover:text-white transition font-semibold">Mentorship</a></li>
              <li><a href="#programs" className="hover:text-white transition font-semibold">Skills Training</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">About</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition font-semibold">Our Mission</a></li>
              <li><a href="#gallery" className="hover:text-white transition font-semibold">Our Work</a></li>
              <li><a href="#testimonials" className="hover:text-white transition font-semibold">Impact Stories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Get Involved</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#volunteer" className="hover:text-white transition font-semibold">Volunteer</a></li>
              <li><a href="#volunteer" className="hover:text-white transition font-semibold">Donate</a></li>
              <li><a href="#contact" className="hover:text-white transition font-semibold">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 mb-2 font-semibold">
            &copy; 2024 Niharika Foundation - Educational Charitable Trust & Research Center
          </p>
          <p className="text-center text-gray-500 text-sm font-semibold">
            Building a brighter future through education and opportunity in Odisha
          </p>
        </div>
      </div>
    </footer>
  );

  // Floating WhatsApp Button
  const whatsappButton = (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-3xl animate-pulse hover:animate-none transition-all duration-300 z-50 transform hover:scale-110"
    >
      <MessageSquare className="w-8 h-8" />
    </a>
  );

  // Scroll to Top Button
  const scrollTopButton = showScrollTop && (
    <button
      onClick={scrollToTop}
      className="fixed bottom-32 right-8 w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 transform hover:scale-110"
    >
      <ChevronUp size={24} />
    </button>
  );

  return (
    <div className="w-full overflow-x-hidden bg-white text-gray-900">
      {navbar}
      {heroSection}
      {aboutSection}
      {programsSection}
      {testimonialSection}
      {gallerySection}
      {volunteerSection}
      {contactSection}
      {footer}
      {whatsappButton}
      {scrollTopButton}
    </div>
  );
}
