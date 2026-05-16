'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Heart, Users, BookOpen, Award, Globe, Sparkles, ArrowRight, CheckCircle, 
  MessageSquare, Mail, Phone, MapPin, ChevronDown, Menu, X,
  TrendingUp, Shield, Gift, Zap, Target
} from 'lucide-react';

export default function NiharikaSite() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [showForm, setShowForm] = useState(null);
  const [formData, setFormData] = useState({});
  const [visibleSections, setVisibleSections] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, { threshold: 0.15 });

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const submitToWhatsApp = (formType, data) => {
    let message = '';
    
    switch(formType) {
      case 'contact':
        message = `📞 CONTACT INQUIRY\nName: ${data.name}\nPhone: ${data.phone}\nCity: ${data.city}\nMessage: ${data.message}`;
        break;
      case 'volunteer':
        message = `🙋 VOLUNTEER APPLICATION\nName: ${data.fullName}\nAge: ${data.age}\nOccupation: ${data.occupation}\nPhone: ${data.phone}\nWhy Volunteer: ${data.why}`;
        break;
      case 'donation':
        message = `💝 DONATION INQUIRY\nName: ${data.name}\nInterest: ${data.interest}\nType: ${data.sponsorType}\nPhone: ${data.phone}\nMessage: ${data.message}`;
        break;
      case 'scholarship':
        message = `🎓 SCHOLARSHIP APPLICATION\nStudent: ${data.studentName}\nClass: ${data.class}\nSchool: ${data.school}\nDistrict: ${data.district}\nPhone: ${data.phone}\nNeed: ${data.need}`;
        break;
      case 'partnership':
        message = `🤝 PARTNERSHIP INQUIRY\nOrganization: ${data.orgName}\nPerson: ${data.contactPerson}\nEmail: ${data.email}\nPhone: ${data.phone}\nPurpose: ${data.purpose}`;
        break;
      default:
        message = JSON.stringify(data);
    }

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/917978191554?text=${encoded}`, '_blank');
    setShowForm(null);
    setFormData({});
  };

  const FormModal = ({ type, title, fields }) => (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
          <button onClick={() => setShowForm(null)} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">✕</button>
        </div>

        <form className="space-y-5">
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block text-gray-700 font-semibold mb-2">{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  placeholder={field.placeholder}
                  value={formData[field.name] || ''}
                  onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-red-600 focus:outline-none"
                />
              ) : field.type === 'select' ? (
                <select
                  value={formData[field.name] || ''}
                  onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-red-600 focus:outline-none"
                >
                  <option value="">{field.placeholder}</option>
                  {field.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              ) : (
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ''}
                  onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-red-600 focus:outline-none"
                />
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={() => submitToWhatsApp(type, formData)}
            className="w-full px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 mt-6"
          >
            <MessageSquare className="w-5 h-5" /> Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );

  const heroImages = [
    { img: '/odisha-students.jpg', title: 'Empowering Through Education', desc: 'Quality education for every child in Odisha' },
    { img: '/odisha-community.jpg', title: 'Community First', desc: 'Building stronger villages together' },
    { img: '/odisha-temple.jpg', title: 'Rooted in Culture', desc: 'Honoring Odisha\'s rich heritage' },
  ];

  // NAVBAR
  const navbar = (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrollY > 10 ? 'bg-white shadow-2xl' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer">
          <img src="/niharika-logo.png" alt="Niharika" className="w-12 h-12 object-contain" />
          <div className="flex flex-col">
            <span className="text-sm font-black text-red-700">NIHARIKA</span>
            <span className="text-xs text-gray-600 font-semibold">Foundation</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Home', 'About', 'Programs', 'Impact', 'Gallery', 'Get Involved'].map(item => (
            <button key={item} className="text-sm font-bold text-gray-700 hover:text-red-600 transition">{item}</button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button onClick={() => setShowForm('donation')} className="hidden sm:block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg">
            Donate
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-700">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t-2 border-red-200 py-4 px-4 space-y-3">
          {['Home', 'About', 'Programs', 'Impact', 'Gallery', 'Get Involved'].map(item => (
            <button key={item} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-red-50 rounded-lg font-semibold">
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );

  // HERO SECTION with Slideshow
  const heroSection = (
    <div className="relative h-screen overflow-hidden pt-20">
      {heroImages.map((slide, idx) => (
        <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${idx === heroIndex ? 'opacity-100' : 'opacity-0'}`}>
          <img src={slide.img} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-transparent to-red-900 opacity-40"></div>
        </div>
      ))}

      <div className="absolute top-10 right-10 opacity-5 w-96 h-96">
        <img src="/niharika-logo.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-20 left-5 opacity-5 w-80 h-80">
        <img src="/niharika-logo.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="w-48 h-48 md:w-64 md:h-64 mb-8 animate-bounce" style={{ animationDuration: '3s' }}>
          <img src="/niharika-logo.png" alt="Niharika" className="w-full h-full object-contain drop-shadow-2xl" />
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-lg">
          Niharika Foundation
        </h1>
        <p className="text-2xl md:text-3xl font-bold text-yellow-200 mb-3 drop-shadow-lg">
          {heroImages[heroIndex].title}
        </p>
        <p className="text-lg text-white mb-12 max-w-2xl drop-shadow-lg font-semibold">
          {heroImages[heroIndex].desc}
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button onClick={() => setShowForm('contact')} className="px-8 py-4 bg-gradient-to-r from-yellow-300 to-yellow-400 text-red-900 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105 flex items-center gap-2">
            Explore Our Work <ArrowRight className="w-5 h-5" />
          </button>
          <button onClick={() => setShowForm('donation')} className="px-8 py-4 bg-white text-red-900 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105">
            Support Us Today
          </button>
        </div>

        <div className="absolute bottom-8 flex gap-2">
          {heroImages.map((_, idx) => (
            <button key={idx} onClick={() => setHeroIndex(idx)} className={`h-2 transition-all ${idx === heroIndex ? 'bg-white w-8' : 'bg-white bg-opacity-50 w-2'}`} />
          ))}
        </div>
      </div>

      {/* Floating CTA Ribbon */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 py-4 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-around gap-4 flex-wrap text-sm md:text-base">
          <button onClick={() => setShowForm('donation')} className="text-white font-bold hover:text-yellow-200 transition">💝 Donate Education Kits</button>
          <button onClick={() => setShowForm('scholarship')} className="text-white font-bold hover:text-yellow-200 transition">🎓 Sponsor a Child</button>
          <button onClick={() => setShowForm('volunteer')} className="text-white font-bold hover:text-yellow-200 transition">🙋 Volunteer Today</button>
        </div>
      </div>
    </div>
  );

  // ABOUT SECTION
  const aboutSection = (
    <section ref={(el) => (sectionRefs.current['about'] = el)} id="about" className={`py-24 px-4 md:px-8 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden transition-all duration-1000 ${visibleSections['about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute top-10 right-10 opacity-5 w-96 h-96">
        <img src="/niharika-logo.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-700 to-orange-600">
            Our Mission
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mb-8"></div>
        </div>

        <div className="bg-gradient-to-br from-red-50 via-yellow-50 to-orange-50 rounded-3xl p-12 border-l-4 border-red-600 mb-16">
          <p className="text-gray-800 text-lg leading-relaxed italic font-medium">
            "In Odisha, thousands of brilliant minds remain untouched by quality education. Niharika Foundation exists to change that reality. We believe every child deserves a chance to dream, learn, and transform their future. Through education, we don't just change lives—we transform communities and build a stronger nation."
          </p>
          <p className="text-right mt-6 text-gray-700 font-bold">— Niharika Foundation Team</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Target, label: '5000+', desc: 'Students Empowered', color: 'from-red-500 to-red-600' },
            { icon: Globe, label: '50+', desc: 'Villages Reached', color: 'from-green-500 to-green-600' },
            { icon: Heart, label: '₹50L+', desc: 'Invested in Education', color: 'from-yellow-500 to-yellow-600' },
          ].map((stat, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${stat.color} rounded-3xl p-8 text-white text-center transform hover:scale-105 transition-all shadow-xl hover:shadow-2xl`}>
              <stat.icon className="w-16 h-16 mx-auto mb-4" />
              <div className="text-4xl font-black mb-2">{stat.label}</div>
              <div className="font-semibold text-lg">{stat.desc}</div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Where Your Donation Goes</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { percent: '60%', label: 'Student Scholarships & Support' },
              { percent: '20%', label: 'Infrastructure & Learning Resources' },
              { percent: '12%', label: 'Staff & Program Management' },
              { percent: '8%', label: 'Community Outreach Programs' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl font-black text-red-600 mb-2">{item.percent}</div>
                <p className="text-gray-700 font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // PROGRAMS SECTION
  const programsSection = (
    <section ref={(el) => (sectionRefs.current['programs'] = el)} id="programs" className={`py-24 px-4 md:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden transition-all duration-1000 ${visibleSections['programs'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-red-600">
            Our Programs
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-green-600 to-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: BookOpen, title: 'Scholarship Program', desc: 'Complete financial support for deserving students', color: 'from-blue-500 to-blue-600', emoji: '🎓' },
            { icon: Users, title: 'Mentorship Initiative', desc: 'Expert guidance & career counseling', color: 'from-purple-500 to-purple-600', emoji: '👨‍🏫' },
            { icon: Zap, title: 'Skill Development', desc: 'Technical and soft skills training', color: 'from-yellow-500 to-orange-600', emoji: '⚡' },
            { icon: Award, title: 'Excellence Awards', desc: 'Recognition for high achievers', color: 'from-pink-500 to-rose-600', emoji: '🏆' },
            { icon: Globe, title: 'Global Exposure', desc: 'International collaborations', color: 'from-teal-500 to-teal-600', emoji: '🌍' },
            { icon: Heart, title: 'Community Support', desc: 'Healthcare and family services', color: 'from-red-500 to-red-600', emoji: '❤️' },
          ].map((prog, idx) => (
            <div key={idx} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 border-t-4 border-gray-200 hover:border-t-4 cursor-pointer" style={{ borderTopColor: ['#3b82f6', '#a855f7', '#f59e0b', '#ec4899', '#14b8a6', '#ef4444'][idx] }} onClick={() => setShowForm('contact')}>
              <div className="text-4xl mb-4">{prog.emoji}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{prog.title}</h3>
              <p className="text-gray-600 mb-6">{prog.desc}</p>
              <div className="flex items-center gap-2 text-gray-700 font-semibold group-hover:text-red-600 transition">
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // IMPACT TIMELINE
  const timelineSection = (
    <section ref={(el) => (sectionRefs.current['timeline'] = el)} id="timeline" className={`py-24 px-4 md:px-8 bg-white relative overflow-hidden transition-all duration-1000 ${visibleSections['timeline'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-600">
          Our Journey
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-yellow-600 mx-auto mb-16"></div>

        <div className="space-y-12">
          {[
            { year: '2015', title: 'Foundation Established', desc: 'Niharika Foundation started with a vision to transform lives through education in rural Odisha', icon: '🌱' },
            { year: '2017', title: 'First 500 Students', desc: 'Reached 500 underprivileged students across 15 villages in Odisha', icon: '📚' },
            { year: '2019', title: 'Scholarship Milestone', desc: 'Distributed ₹10L in scholarships to deserving students', icon: '🎓' },
            { year: '2021', title: 'Community Expansion', desc: 'Expanded to 50 villages with 5000+ students supported', icon: '🌍' },
            { year: '2024', title: 'Global Recognition', desc: 'Recognized as Top NGO in Education sector for Odisha impact', icon: '🏆' },
          ].map((milestone, idx) => (
            <div key={idx} className="flex gap-6 items-start animate-fadeInUp" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-4">{milestone.icon}</div>
                <div className="w-1 h-24 bg-gradient-to-b from-red-600 to-transparent"></div>
              </div>
              <div className="pt-2">
                <div className="text-xl font-bold text-red-600 mb-1">{milestone.year}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                <p className="text-gray-600 text-lg">{milestone.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // SUCCESS STORIES
  const storiesSection = (
    <section ref={(el) => (sectionRefs.current['stories'] = el)} id="stories" className={`py-24 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden transition-all duration-1000 ${visibleSections['stories'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Success Stories
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-16"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { emoji: '👩‍⚕️', name: 'Priya Kumar', role: 'AIIMS Delhi Medical Student', story: 'From a small village to India\'s premier medical college. The scholarship gave her a dream.' },
            { emoji: '👨‍💻', name: 'Rahul Singh', role: 'Software Developer at TCS', story: 'Skill training turned passion into profession. Now earning ₹6LPA and mentoring others.' },
            { emoji: '👩‍🎓', name: 'Anjali Patel', role: 'Social Entrepreneur', story: 'Inspired to give back. Now runs her own NGO supporting 200+ children in Odisha.' },
          ].map((story, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-6xl mb-4">{story.emoji}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{story.name}</h3>
              <p className="text-red-600 font-semibold mb-4">{story.role}</p>
              <p className="text-gray-700 text-lg leading-relaxed italic">"{story.story}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // GALLERY
  const gallerySection = (
    <section ref={(el) => (sectionRefs.current['gallery'] = el)} id="gallery" className={`py-24 px-4 md:px-8 bg-gray-900 relative overflow-hidden transition-all duration-1000 ${visibleSections['gallery'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 opacity-10">
        <img src="/niharika-logo.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-6 text-white">
          Our Work in Odisha
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-yellow-600 mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { img: '/odisha-temple.jpg', title: 'Cultural Heritage', desc: 'Preserving Odisha traditions' },
            { img: '/odisha-village.jpg', title: 'Rural Communities', desc: 'Strengthening villages' },
            { img: '/odisha-students.jpg', title: 'Student Success', desc: 'Education transformation' },
            { img: '/odisha-community.jpg', title: 'Women Empowerment', desc: 'Inclusive growth' },
            { img: '/odisha-culture.jpg', title: 'Coastal Reach', desc: 'Expanding impact' },
            { img: '/niharika-logo.png', title: 'Our Vision', desc: 'Building futures' },
          ].map((item, idx) => (
            <div key={idx} className="relative rounded-3xl overflow-hidden h-80 group cursor-pointer">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-end p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // DONATION MOTIVATION
  const donationSection = (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
          Your Generosity Creates Impact
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { amount: '₹500', impact: 'Educate 1 child for a month', icon: '📚' },
            { amount: '₹2,000', impact: 'Full school supplies for a year', icon: '✏️' },
            { amount: '₹10,000', impact: 'Complete scholarship support', icon: '🎓' },
            { amount: '₹50,000', impact: 'Skill training for 5 students', icon: '⚡' },
          ].map((donation, idx) => (
            <button key={idx} onClick={() => setShowForm('donation')} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 hover:bg-yellow-50">
              <div className="text-4xl mb-4">{donation.icon}</div>
              <div className="text-3xl font-black text-red-600 mb-2">{donation.amount}</div>
              <p className="text-gray-700 font-semibold">{donation.impact}</p>
            </button>
          ))}
        </div>

        <button onClick={() => setShowForm('donation')} className="mt-12 px-12 py-5 bg-white text-red-600 rounded-full font-bold text-2xl hover:shadow-2xl transition-all transform hover:scale-105">
          💝 Make a Donation Now
        </button>
      </div>
    </section>
  );

  // VOLUNTEER & BECOME HOPE
  const volunteerSection = (
    <section className="py-24 px-4 md:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img src="/odisha-community.jpg" alt="Volunteers" className="rounded-3xl shadow-2xl h-96 w-full object-cover" />
          </div>
          <div>
            <h2 className="text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-700">
              Become a Volunteer
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Join our community of 200+ dedicated volunteers transforming lives in Odisha. Whether you have expertise to share, time to offer, or passion for education—there's a place for you.
            </p>
            <button onClick={() => setShowForm('volunteer')} className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105">
              Register as Volunteer
            </button>
          </div>
        </div>

        {/* Become Hope CTA */}
        <div className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 rounded-3xl p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src="/niharika-logo.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10">
            <h2 className="text-5xl font-black mb-6">Become Hope</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Your choice today can determine a child's tomorrow. Every contribution, no matter how small, is a step towards changing Odisha's educational landscape.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button onClick={() => setShowForm('donation')} className="px-8 py-4 bg-white text-red-600 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105">
                Donate Now
              </button>
              <button onClick={() => setShowForm('volunteer')} className="px-8 py-4 bg-yellow-300 text-red-900 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105">
                Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // TRUST & CREDIBILITY
  const trustSection = (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-700">
          Why Trust Niharika Foundation
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: 'Registered Charity', desc: 'Licensed non-profit with full transparency', badge: '✓' },
            { icon: TrendingUp, title: '95% Impact', desc: '95% of donations go directly to programs', badge: '✓' },
            { icon: Award, title: 'Awards & Recognition', desc: 'Recognized by national NGO councils', badge: '✓' },
          ].map((trust, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-2xl font-black">
                  {trust.badge}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{trust.title}</h3>
              <p className="text-gray-600 text-lg">{trust.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // CONTACT & FAQ
  const contactSection = (
    <section ref={(el) => (sectionRefs.current['contact'] = el)} id="contact" className={`py-24 px-4 md:px-8 bg-white relative overflow-hidden transition-all duration-1000 ${visibleSections['contact'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-700">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: MapPin, title: 'Address', content: 'Odisha, India', color: 'from-red-500 to-red-600' },
            { icon: Phone, title: 'Phone', content: '+91 79781 91554', color: 'from-green-500 to-green-600' },
            { icon: Mail, title: 'Email', content: 'info@niharika.org', color: 'from-blue-500 to-blue-600' },
          ].map((contact, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all text-center border-t-4 border-gray-200">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${contact.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <contact.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{contact.title}</h3>
              <p className="text-gray-600 text-lg font-semibold">{contact.content}</p>
            </div>
          ))}
        </div>

        {/* Quick Forms */}
        <div className="grid md:grid-cols-5 gap-6 mb-16">
          {[
            { type: 'contact', label: 'Contact Us', emoji: '📞' },
            { type: 'volunteer', label: 'Volunteer', emoji: '🙋' },
            { type: 'donation', label: 'Donate', emoji: '💝' },
            { type: 'scholarship', label: 'Scholarship', emoji: '🎓' },
            { type: 'partnership', label: 'Partnership', emoji: '🤝' },
          ].map((form) => (
            <button key={form.type} onClick={() => setShowForm(form.type)} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all transform hover:scale-105 border-2 border-gray-200">
              <div className="text-4xl mb-3">{form.emoji}</div>
              <p className="font-bold text-gray-800">{form.label}</p>
            </button>
          ))}
        </div>

        {/* FAQ */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {[
              { q: 'How do I donate?', a: 'Click the Donate button or WhatsApp us. We accept online transfers, checks, and direct bank deposits.' },
              { q: 'Can I volunteer part-time?', a: 'Yes! We have flexible volunteering options—online and offline. Choose what works for you.' },
              { q: 'Is Niharika Foundation registered?', a: 'Yes, we are a registered charitable trust with full transparency in our operations.' },
              { q: 'How are scholarships awarded?', a: 'Based on merit, financial need, and community recommendations. Apply via our scholarship form.' },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-800 text-lg mb-3">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // FOOTER
  const footer = (
    <footer className="bg-gray-900 text-white py-16 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img src="/niharika-logo.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <img src="/niharika-logo.png" alt="Niharika" className="w-8 h-8" />
              Niharika
            </h4>
            <p className="text-gray-400">Transforming Odisha through education</p>
          </div>
          <div>
            <h5 className="font-bold mb-4">Programs</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Scholarships</a></li>
              <li><a href="#" className="hover:text-white transition">Mentorship</a></li>
              <li><a href="#" className="hover:text-white transition">Skills</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Get Involved</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><button onClick={() => setShowForm('volunteer')} className="hover:text-white transition">Volunteer</button></li>
              <li><button onClick={() => setShowForm('donation')} className="hover:text-white transition">Donate</button></li>
              <li><button onClick={() => setShowForm('partnership')} className="hover:text-white transition">Partner</button></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Follow Us</h5>
            <p className="text-gray-400 text-sm">Connect with us on social media for updates and impact stories</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            © 2024 Niharika Foundation - Educational Charitable Trust & Research Center | Empowering Odisha's Youth
          </p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.8; } }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
        .animate-fadeInUp { animation: fadeInUp 0.7s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.5s ease-out; }
        .animate-pulse { animation: pulse 2s ease-in-out infinite; }
      `}</style>

      {navbar}
      {heroSection}
      {aboutSection}
      {programsSection}
      {timelineSection}
      {storiesSection}
      {gallerySection}
      {donationSection}
      {volunteerSection}
      {trustSection}
      {contactSection}
      {footer}

      {showForm === 'contact' && <FormModal type="contact" title="Contact Us" fields={[
        { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Enter your name' },
        { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone' },
        { name: 'city', label: 'City', type: 'text', placeholder: 'Your city' },
        { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell us how we can help' },
      ]} />}

      {showForm === 'volunteer' && <FormModal type="volunteer" title="Volunteer Registration" fields={[
        { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
        { name: 'age', label: 'Age', type: 'number', placeholder: 'Your age' },
        { name: 'occupation', label: 'Occupation', type: 'text', placeholder: 'Your profession' },
        { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Your phone number' },
        { name: 'why', label: 'Why volunteer?', type: 'textarea', placeholder: 'Tell us your motivation' },
      ]} />}

      {showForm === 'donation' && <FormModal type="donation" title="Donation Inquiry" fields={[
        { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Enter your name' },
        { name: 'interest', label: 'Donation Interest', type: 'select', options: ['Education', 'Healthcare', 'Infrastructure', 'Women Empowerment'] },
        { name: 'sponsorType', label: 'Sponsorship Type', type: 'select', options: ['Sponsor a Child', 'Sponsor School', 'General Donation', 'Education Kit'] },
        { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Your phone number' },
        { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Additional information' },
      ]} />}

      {showForm === 'scholarship' && <FormModal type="scholarship" title="Scholarship Application" fields={[
        { name: 'studentName', label: 'Student Name', type: 'text', placeholder: 'Full name' },
        { name: 'class', label: 'Class/Year', type: 'text', placeholder: 'Current class or year' },
        { name: 'school', label: 'School/College', type: 'text', placeholder: 'Name of institution' },
        { name: 'district', label: 'District', type: 'text', placeholder: 'Your district' },
        { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Contact number' },
        { name: 'need', label: 'Scholarship Need', type: 'textarea', placeholder: 'Why you need scholarship' },
      ]} />}

      {showForm === 'partnership' && <FormModal type="partnership" title="Partnership Inquiry" fields={[
        { name: 'orgName', label: 'Organization Name', type: 'text', placeholder: 'Your organization' },
        { name: 'contactPerson', label: 'Contact Person', type: 'text', placeholder: 'Your name' },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'Your email' },
        { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Your phone' },
        { name: 'purpose', label: 'Collaboration Purpose', type: 'textarea', placeholder: 'How can we collaborate?' },
      ]} />}
    </div>
  );
}
