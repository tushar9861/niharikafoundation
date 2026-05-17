'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, MessageSquare, Mail, Phone, MapPin, Calendar, Clock, ChevronDown, ChevronRight } from 'lucide-react';

export default function NiharikaSite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);
  const [countdownDays, setCountdownDays] = useState(7);
  const [countdownHours, setCountdownHours] = useState(0);
  const [countdownMinutes, setCountdownMinutes] = useState(0);
  const [countdownSeconds, setCountdownSeconds] = useState(0);
  const [formData, setFormData] = useState({ name: '', village: '', marks: '', class: '', referral: '' });
  const [autoSlideIndex, setAutoSlideIndex] = useState(0);
  const [expandedTeamSection, setExpandedTeamSection] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

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

  // Auto-slide gallery
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setAutoSlideIndex(prev => (prev + 1) % 5);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, []);

  const whatsappLink = (message) => {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/918763979798?text=${encoded}`;
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e, formType) => {
    e.preventDefault();
    let message = '';
    
    if (formType === 'medha-samman') {
      message = `🎓 MEDHA SAMMAN 2026 - REGISTRATION REQUEST\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n👤 Student Name: ${formData.name}\n📍 Village: ${formData.village}\n📊 10th Board Marks: ${formData.marks || 'Not provided'}\n📚 Current Class: ${formData.class}\n🔑 Referral Code: ${formData.referral || 'None'}\n\n━━━━━━━━━━━━━━━━━━━━━━━━\nPlease confirm registration for Medha Samman 2026.`;
    }
    
    window.location.href = whatsappLink(message);
  };

  const committeeMembers = [
    { initials: 'RJ', name: 'Rutuick Jee', role: 'CHAIRMAN & FOUNDER', phone: '9338330554' },
    { initials: 'MN', name: 'Muralidhar Nayak', role: 'PRESIDENT', phone: '9337871450' },
    { initials: 'AS', name: 'Ardhendu Sekhar Das', role: 'VICE-PRESIDENT', phone: '+91' },
    { initials: 'SS', name: 'Subham Sai Mohapatra', role: 'VICE-PRESIDENT', phone: '+91' },
    { initials: 'DD', name: 'Debadutta Das', role: 'GENERAL SECRETARY', phone: '9337288220' },
    { initials: 'SM', name: 'Shyamsundar Mohanty', role: 'SECRETARY', phone: '+91' },
    { initials: 'BP', name: 'Bibhudutta Parida', role: 'ASST. SECRETARY', phone: '+91' },
    { initials: 'PD', name: 'Priyadarshini Das', role: 'CULTURAL SECRETARY', phone: '+91' },
  ];

  const gallerySlides = [
    { img: '/odisha-temple.jpg', title: 'Heritage & Culture' },
    { img: '/odisha-village.jpg', title: 'Rural Community' },
    { img: '/odisha-students.jpg', title: 'Education First' },
    { img: '/women-empowerment.jpg', title: 'Women Empowerment' },
    { img: '/health-awareness.jpg', title: 'Healthcare Access' },
  ];

  const scholarshipOpportunities = [
    { title: 'Merit Scholarship', amount: '₹25,000', desc: 'For 90%+ scorers', color: 'from-blue-500 to-blue-600' },
    { title: 'Need-Based Support', amount: '₹15,000', desc: 'For underprivileged', color: 'from-green-500 to-green-600' },
    { title: 'Girl Child Education', amount: '₹20,000', desc: 'Women empowerment', color: 'from-pink-500 to-pink-600' },
    { title: 'Skill Development', amount: '₹10,000', desc: 'Vocational training', color: 'from-purple-500 to-purple-600' },
  ];

  const faqs = [
    { q: '✓ Who is eligible for Medha Samman?', a: 'Students securing 90%+ in 10th Board Exam 2026 (CBSE, BSE, ICSE).' },
    { q: '✓ How do I register?', a: 'Click "Register Now" button, fill your details, and submit via WhatsApp with your information.' },
    { q: '✓ When is the ceremony?', a: '24-05-2026 (Sunday), 10:00 AM-9:00 PM at Gandhi Smruti Bhawan, Baleshwar.' },
    { q: '✓ Can I volunteer?', a: 'Yes! Contact us via WhatsApp with your details to join our volunteer team.' },
    { q: '✓ What is the scholarship amount?', a: 'Varies from ₹10,000-₹25,000 based on merit and financial need.' },
  ];

  // ===== NAVBAR =====
  const navbar = (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50 border-b-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/niharika-logo.png" alt="Niharika" className="h-12 w-12" />
          <div className="hidden sm:block">
            <h1 className="font-black text-red-700 text-sm md:text-lg">NIHARIKA</h1>
            <p className="text-xs text-gray-700 font-bold">Educational Charitable Trust</p>
          </div>
        </div>

        <div className="hidden md:flex gap-3 text-xs items-center">
          {['Home', 'About', 'Medha Samman', 'Programs', 'Team', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-800 hover:text-red-600 font-bold transition">
              {item}
            </a>
          ))}
          <a href={whatsappLink('I want to donate to Niharika Foundation')} className="px-4 py-2 bg-red-600 text-white rounded-full font-bold text-xs hover:bg-red-700">
            Donate
          </a>
        </div>

        <button className="md:hidden text-gray-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t-2 border-red-600 px-4 py-3 space-y-2">
          {['Home', 'About', 'Medha Samman', 'Programs', 'Team', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="block text-gray-800 hover:text-red-600 font-bold py-1">
              {item}
            </a>
          ))}
        </div>
      )}

      <a href={whatsappLink('Hello! I want to know more about Niharika Foundation')} 
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl z-40 hover:scale-110 transition-transform animate-pulse">
        <MessageSquare size={24} className="text-white" />
      </a>
    </nav>
  );

  // ===== HERO SECTION =====
  const heroSection = (
    <section id="home" className="pt-24 pb-8 bg-gradient-to-br from-red-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center py-8">
          <div className="mb-4 flex justify-center">
            <img src="/niharika-logo.png" alt="Niharika" className="h-32 w-32 drop-shadow-lg animate-bounce" style={{animationDuration: '2s'}} />
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-red-700 mb-1 leading-tight">
            NIHARIKA FOUNDATION
          </h1>
          <p className="text-lg md:text-xl text-gray-800 font-bold mb-1">
            Educational Charitable Trust & Research Center
          </p>
          <p className="text-sm md:text-base text-gray-700 mb-4 font-semibold">
            Medha Samman Committee, Baleshwar, Odisha
          </p>
          <p className="text-sm text-gray-700 font-semibold italic mb-6">
            "Honoring Excellence • Encouraging Dreams • Building Future"
          </p>

          <div className="flex gap-2 justify-center flex-wrap">
            <button onClick={() => setSelectedForm('medha-samman')} 
              className="px-5 py-2 bg-red-600 text-white rounded-full font-bold text-xs md:text-sm hover:bg-red-700 transition transform hover:scale-105 shadow-lg">
              📋 Register for Medha Samman
            </button>
            <a href={whatsappLink('I want to know more about Niharika Foundation')} 
              className="px-5 py-2 bg-green-600 text-white rounded-full font-bold text-xs md:text-sm hover:bg-green-700 transition transform hover:scale-105 shadow-lg">
              💬 Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  // ===== COMPACT COUNTDOWN SECTION =====
  const countdownSection = (
    <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-black">🎓 New Scholarship in:</h3>
            <p className="text-xs text-green-100">Next opportunity coming soon</p>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <div className="bg-white bg-opacity-90 rounded-lg p-2 text-center">
              <div className="text-xl font-black text-green-700">{String(countdownDays).padStart(2, '0')}</div>
              <div className="text-xs font-bold text-green-600">Days</div>
            </div>
            <div className="bg-white bg-opacity-90 rounded-lg p-2 text-center">
              <div className="text-xl font-black text-green-700">{String(countdownHours).padStart(2, '0')}</div>
              <div className="text-xs font-bold text-green-600">Hrs</div>
            </div>
            <div className="bg-white bg-opacity-90 rounded-lg p-2 text-center">
              <div className="text-xl font-black text-green-700">{String(countdownMinutes).padStart(2, '0')}</div>
              <div className="text-xs font-bold text-green-600">Min</div>
            </div>
            <div className="bg-white bg-opacity-90 rounded-lg p-2 text-center">
              <div className="text-xl font-black text-green-700">{String(countdownSeconds).padStart(2, '0')}</div>
              <div className="text-xs font-bold text-green-600">Sec</div>
            </div>
          </div>

          <a href={whatsappLink('Send me updates about scholarships')} 
            className="px-4 py-2 bg-white text-green-700 rounded-full font-bold text-xs hover:bg-gray-100 transition whitespace-nowrap">
            Get Notified
          </a>
        </div>
      </div>
    </section>
  );

  // ===== MEDHA SAMMAN SECTION =====
  const medhaSammanSection = (
    <section id="medha-samman" className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-2 text-red-700">Medha Samman 2026</h2>
        <p className="text-center text-gray-700 text-xs md:text-sm mb-8 font-semibold">
          Felicitating students with 90%+ in 10th Board Exam 2026
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <img src="/medha-samman-poster.jpg" alt="Medha Samman" className="rounded-xl shadow-lg w-full h-80 object-cover" />

          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-red-50 border-l-4 border-red-600 p-3 rounded-lg">
              <MapPin className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-800 text-sm">Location</h3>
                <p className="text-gray-700 text-xs">Gandhi Smruti Bhawan, Baleshwar</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-blue-50 border-l-4 border-blue-600 p-3 rounded-lg">
              <Calendar className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-800 text-sm">Date & Time</h3>
                <p className="text-gray-700 text-xs">24-05-2026 (Sunday) • 10:00 AM-9:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-green-50 border-l-4 border-green-600 p-3 rounded-lg">
              <Phone className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-800 text-sm">Contact</h3>
                <p className="text-gray-700 text-xs">9337871450 | 8249860766 | 7978681159</p>
              </div>
            </div>

            <button onClick={() => setSelectedForm('medha-samman')} 
              className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-black text-sm hover:shadow-lg transition transform hover:scale-105">
              📝 Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  // ===== FOUNDER SECTION =====
  const founderSection = (
    <section id="about" className="py-12 px-4 bg-gradient-to-r from-blue-900 via-cyan-500 to-blue-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-white text-center mb-8">Our Leadership</h2>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <img src="/rutuick-jee.jpg" alt="Rutuick Jee" className="rounded-xl shadow-2xl w-full h-80 object-cover" />

          <div className="text-white space-y-3">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-5 border border-white border-opacity-30">
              <p className="text-yellow-300 text-xs font-bold uppercase tracking-widest mb-1">Chairman & Founder</p>
              <h3 className="text-2xl font-black mb-2">Rutuick Jee</h3>
              <p className="text-xs text-gray-100 leading-relaxed">
                Visionary founder transforming grassroots Odisha through quality education, empowering thousands of underprivileged students.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3 border border-white border-opacity-30">
              <p className="text-xs font-bold text-gray-100">✓ Community-led transparency</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3 border border-white border-opacity-30">
              <p className="text-xs font-bold text-gray-100">✓ Global standards, local roots</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3 border border-white border-opacity-30">
              <p className="text-xs font-bold text-gray-100">✓ Integrity, empathy, excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // ===== OPPORTUNITIES SCROLLING SECTION =====
  const opportunitiesSection = (
    <section id="programs" className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-2 text-red-700">Scholarship Opportunities</h2>
        <p className="text-center text-gray-700 text-xs md:text-sm mb-6 font-semibold">Available for meritorious students</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {scholarshipOpportunities.map((opp, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${opp.color} text-white rounded-lg p-4 shadow-lg hover:shadow-xl transition transform hover:scale-105`}>
              <h3 className="font-black text-sm mb-1">{opp.title}</h3>
              <p className="text-lg font-black mb-2">{opp.amount}</p>
              <p className="text-xs font-bold">{opp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ===== TEAM SECTION WITH DROPDOWN =====
  const teamSection = (
    <section id="team" className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-8 text-red-700">Our Committee</h2>

        <button onClick={() => setExpandedTeamSection(!expandedTeamSection)}
          className="w-full md:w-auto mx-auto md:mx-0 flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-bold text-sm hover:bg-red-700 transition mb-6">
          {expandedTeamSection ? '▼' : '▶'} View Committee Members
        </button>

        {expandedTeamSection && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 animate-fadeIn">
            {committeeMembers.map((member, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-3 shadow-md hover:shadow-lg transition border border-gray-200">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-black text-lg">
                  {member.initials}
                </div>
                <h3 className="font-bold text-gray-800 text-xs text-center">{member.name}</h3>
                <p className="text-xs text-red-700 font-bold text-center uppercase mt-1">{member.role}</p>
                <p className="text-xs text-gray-700 text-center mt-1 font-semibold">{member.phone}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );

  // ===== GALLERY SECTION =====
  const gallerySection = (
    <section className="py-12 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-8 text-white">Our Work in Odisha</h2>

        <div className="relative bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
          <img src={gallerySlides[autoSlideIndex].img} alt={gallerySlides[autoSlideIndex].title} className="w-full h-72 object-cover" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-4">
            <h3 className="text-xl font-black text-white">{gallerySlides[autoSlideIndex].title}</h3>
          </div>

          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1">
            {gallerySlides.map((_, idx) => (
              <button key={idx} onClick={() => setAutoSlideIndex(idx)}
                className={`rounded-full transition ${idx === autoSlideIndex ? 'bg-white w-6 h-2' : 'bg-white bg-opacity-40 w-2 h-2'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // ===== FAQ SECTION =====
  const faqSection = (
    <section id="contact" className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-8 text-red-700">Frequently Asked Questions</h2>

        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <button onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full p-4 text-left font-bold text-gray-800 hover:bg-red-50 transition flex items-center justify-between">
                <span className="text-xs md:text-sm">{faq.q}</span>
                <span className={`text-red-600 transition transform text-lg ${expandedFaq === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {expandedFaq === idx && (
                <div className="px-4 pb-4 text-gray-700 text-xs border-t border-gray-200 bg-gray-50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ===== REGISTRATION MODAL =====
  if (selectedForm === 'medha-samman') {
    return (
      <>
        {navbar}
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 pt-20">
          <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-red-600 to-red-700 text-white p-4 flex items-center justify-between">
              <h3 className="text-lg font-black">📋 Medha Samman Registration</h3>
              <button onClick={() => setSelectedForm(null)} className="text-2xl font-bold hover:bg-red-500 w-8 h-8 flex items-center justify-center rounded">×</button>
            </div>

            <form className="p-5 space-y-3" onSubmit={(e) => handleFormSubmit(e, 'medha-samman')}>
              <div>
                <label className="block text-gray-800 font-bold text-xs mb-1">Student Name *</label>
                <input type="text" name="name" required value={formData.name} onChange={handleFormChange}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-sm text-gray-800"
                  placeholder="Full Name" />
              </div>

              <div>
                <label className="block text-gray-800 font-bold text-xs mb-1">Village *</label>
                <input type="text" name="village" required value={formData.village} onChange={handleFormChange}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-sm text-gray-800"
                  placeholder="Your Village Name" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-800 font-bold text-xs mb-1">10th Marks (Optional)</label>
                  <input type="number" name="marks" min="0" max="100" step="0.01" value={formData.marks} onChange={handleFormChange}
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-sm text-gray-800"
                    placeholder="e.g., 95" />
                </div>

                <div>
                  <label className="block text-gray-800 font-bold text-xs mb-1">Current Class *</label>
                  <select name="class" required value={formData.class} onChange={handleFormChange}
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-sm text-gray-800">
                    <option value="">Select Class</option>
                    <option value="10">10th</option>
                    <option value="11">11th</option>
                    <option value="12">12th</option>
                    <option value="College">College</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-800 font-bold text-xs mb-1">Referral Code (Optional)</label>
                <input type="text" name="referral" value={formData.referral} onChange={handleFormChange}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-sm text-gray-800"
                  placeholder="If referred by someone" />
              </div>

              <button type="submit" 
                className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-black text-sm hover:shadow-lg transition transform hover:scale-105">
                📤 Send via WhatsApp
              </button>

              <p className="text-xs text-gray-600 text-center">
                ✓ Your information will be sent to our admin via WhatsApp for confirmation.
              </p>
            </form>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {navbar}
      {heroSection}
      {countdownSection}
      {medhaSammanSection}
      {founderSection}
      {opportunitiesSection}
      {teamSection}
      {gallerySection}
      {faqSection}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-xs">
            <div>
              <h4 className="font-bold mb-2">Quick Links</h4>
              <ul className="space-y-1 text-gray-300">
                <li><a href="#home" className="hover:text-red-400">Home</a></li>
                <li><a href="#about" className="hover:text-red-400">About</a></li>
                <li><a href="#medha-samman" className="hover:text-red-400">Medha Samman</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Contact</h4>
              <ul className="space-y-1 text-gray-300 text-xs">
                <li>Phone: 9337871450</li>
                <li>Email: niharikafoundation.org@gmail.com</li>
                <li>Location: Baleshwar, Odisha</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Programs</h4>
              <ul className="space-y-1 text-gray-300">
                <li><a href="#programs" className="hover:text-red-400">Scholarships</a></li>
                <li><a href="#team" className="hover:text-red-400">Volunteering</a></li>
                <li><a href="#contact" className="hover:text-red-400">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Follow Us</h4>
              <div className="flex gap-2 text-gray-300">
                <a href="#" className="hover:text-red-400">🔗 Facebook</a>
                <a href="#" className="hover:text-red-400">📸 Instagram</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-4 text-center text-gray-400 text-xs">
            <p className="mb-1">© 2026 Niharika Foundation • Educational Charitable Trust & Research Center</p>
            <p>"Honoring Excellence • Encouraging Dreams • Building Future"</p>
          </div>
        </div>
      </footer>
    </>
  );
}
