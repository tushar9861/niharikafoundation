'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, MessageSquare, Mail, Phone, MapPin, Calendar, Clock, ArrowRight, CheckCircle } from 'lucide-react';

export default function NiharikaSite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);
  const [countdownDays, setCountdownDays] = useState(7);
  const [countdownHours, setCountdownHours] = useState(0);
  const [countdownMinutes, setCountdownMinutes] = useState(0);
  const [countdownSeconds, setCountdownSeconds] = useState(0);
  const [formData, setFormData] = useState({ name: '', village: '', marks: '', class: '', referral: '' });
  const [autoSlideIndex, setAutoSlideIndex] = useState(0);
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
      message = `🎓 MEDHA SAMMAN REGISTRATION\n\n👤 Name: ${formData.name}\n📍 Village: ${formData.village}\n📊 10th Marks: ${formData.marks || 'Not provided'}\n📚 Current Class: ${formData.class}\n🔑 Referral Code: ${formData.referral || 'None'}\n\nPlease confirm registration.`;
    }
    
    window.location.href = whatsappLink(message);
  };

  // Committee Members
  const committeeMembers = [
    { initials: 'RJ', name: 'Rutuick Jee', role: 'CHAIRMAN & FOUNDER', phone: '9338330554' },
    { initials: 'MN', name: 'Muralidhar Nayak', role: 'PRESIDENT', phone: '9337871450' },
    { initials: 'AS', name: 'Ardhendu Sekhar Das', role: 'VICE-PRESIDENT', phone: '-' },
    { initials: 'SS', name: 'Subham Sai Mohapatra', role: 'VICE-PRESIDENT', phone: '-' },
    { initials: 'DD', name: 'Debadutta Das', role: 'GENERAL SECRETARY', phone: '9337288220' },
    { initials: 'SM', name: 'Shyamsundar Mohanty', role: 'SECRETARY', phone: '-' },
    { initials: 'BP', name: 'Bibhudutta Parida', role: 'ASST. SECRETARY', phone: '-' },
    { initials: 'PD', name: 'Priyadarshini Das', role: 'CULTURAL SECRETARY', phone: '-' },
  ];

  const gallerySlides = [
    { img: '/odisha-temple.jpg', title: 'Heritage' },
    { img: '/odisha-village.jpg', title: 'Community' },
    { img: '/odisha-students.jpg', title: 'Education' },
    { img: '/women-empowerment.jpg', title: 'Women' },
    { img: '/health-awareness.jpg', title: 'Healthcare' },
  ];

  const faqs = [
    { q: 'Who is eligible for Medha Samman?', a: 'Students securing 90%+ in 10th Board Exam 2026.' },
    { q: 'How to register?', a: 'Fill the form or contact via WhatsApp with your details.' },
    { q: 'When is the ceremony?', a: '24-05-2026 (Sunday), 10:00 AM-9:00 PM at Gandhi Smruti Bhawan, Baleshwar.' },
    { q: 'Scholarship amount?', a: 'Varies based on merit and financial need. Contact for details.' },
    { q: 'Can I volunteer?', a: 'Yes! Send your details via WhatsApp or contact form.' },
  ];

  // ===== NAVBAR =====
  const navbar = (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 border-b-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/niharika-logo.png" alt="Niharika" className="h-12 w-12" />
          <div className="hidden sm:block">
            <h1 className="font-black text-red-600 text-sm md:text-lg">NIHARIKA</h1>
            <p className="text-xs text-gray-600">Educational Charitable Trust</p>
          </div>
        </div>

        <div className="hidden md:flex gap-4 text-sm items-center">
          {['Home', 'About', 'Medha Samman', 'Programs', 'Team', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-red-600 font-bold transition">
              {item}
            </a>
          ))}
          <a href={whatsappLink('I want to donate')} className="px-4 py-2 bg-red-600 text-white rounded-full font-bold text-xs hover:bg-red-700">
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
            <a key={item} href={`#${item.toLowerCase()}`} className="block text-gray-700 hover:text-red-600 font-bold py-1">
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
    <section id="home" className="pt-20 pb-12 bg-gradient-to-br from-red-50 via-white to-blue-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center py-12">
          <div className="mb-6 flex justify-center">
            <img src="/niharika-logo.png" alt="Niharika" className="h-40 w-40 drop-shadow-lg animate-bounce" style={{animationDuration: '2s'}} />
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-red-600 mb-2 leading-tight">
            NIHARIKA FOUNDATION
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 font-bold mb-1">
            Educational Charitable Trust & Research Center
          </p>
          <p className="text-lg text-gray-600 mb-4 font-semibold">
            Medha Samman Committee, Baleshwar, Odisha
          </p>
          <p className="text-base text-gray-700 font-semibold italic mb-8">
            "Honoring Excellence. Encouraging Dreams. Building Future."
          </p>

          <div className="flex gap-3 justify-center flex-wrap">
            <button onClick={() => setSelectedForm('medha-samman')} 
              className="px-6 py-3 bg-red-600 text-white rounded-full font-bold text-sm hover:bg-red-700 transition transform hover:scale-105 shadow-lg">
              📋 Medha Samman Registration
            </button>
            <a href={whatsappLink('I want to know more')} 
              className="px-6 py-3 bg-green-600 text-white rounded-full font-bold text-sm hover:bg-green-700 transition transform hover:scale-105 shadow-lg">
              💬 Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  // ===== COUNTDOWN SECTION =====
  const countdownSection = (
    <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-2">🎓 New Scholarship Announcement</h2>
        <p className="text-center text-lg mb-8 font-semibold">Next scholarship scheme in:</p>

        <div className="grid grid-cols-4 gap-3 max-w-2xl mx-auto mb-6">
          <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center backdrop-blur-md border border-white border-opacity-30">
            <div className="text-4xl font-black">{String(countdownDays).padStart(2, '0')}</div>
            <div className="text-xs uppercase tracking-widest mt-1 font-bold">Days</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center backdrop-blur-md border border-white border-opacity-30">
            <div className="text-4xl font-black">{String(countdownHours).padStart(2, '0')}</div>
            <div className="text-xs uppercase tracking-widest mt-1 font-bold">Hours</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center backdrop-blur-md border border-white border-opacity-30">
            <div className="text-4xl font-black">{String(countdownMinutes).padStart(2, '0')}</div>
            <div className="text-xs uppercase tracking-widest mt-1 font-bold">Minutes</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center backdrop-blur-md border border-white border-opacity-30">
            <div className="text-4xl font-black">{String(countdownSeconds).padStart(2, '0')}</div>
            <div className="text-xs uppercase tracking-widest mt-1 font-bold">Seconds</div>
          </div>
        </div>

        <div className="text-center">
          <a href={whatsappLink('Send me updates about scholarships')} 
            className="inline-block px-6 py-2 bg-white text-green-700 rounded-full font-bold text-sm hover:bg-gray-100 transition">
            Get Notified
          </a>
        </div>
      </div>
    </section>
  );

  // ===== MEDHA SAMMAN SECTION =====
  const medhaSammanSection = (
    <section id="medha-samman" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-2 text-red-600">Medha Samman 2026</h2>
        <p className="text-center text-gray-600 text-sm mb-12 font-semibold">
          Felicitation for students securing 90%+ in 10th Board Exam 2026
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src="/medha-samman-poster.jpg" alt="Medha Samman" className="rounded-2xl shadow-lg w-full" />

          <div className="space-y-4">
            <div className="flex items-start gap-3 bg-red-50 p-4 rounded-xl">
              <MapPin className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-800">Location</h3>
                <p className="text-gray-600 text-sm">Gandhi Smruti Bhawan, Baleshwar</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-red-50 p-4 rounded-xl">
              <Calendar className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-800">Date</h3>
                <p className="text-gray-600 text-sm">24-05-2026 (Sunday)</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-red-50 p-4 rounded-xl">
              <Clock className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-800">Time</h3>
                <p className="text-gray-600 text-sm">10:00 AM to 9:00 PM (3 Sessions)</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-red-50 p-4 rounded-xl">
              <Phone className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-800">Contact</h3>
                <p className="text-gray-600 text-sm">9337871450 | 8249860766 | 7978681159</p>
              </div>
            </div>

            <button onClick={() => setSelectedForm('medha-samman')} 
              className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-black text-sm hover:shadow-lg transition transform hover:scale-105">
              📝 Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  // ===== FOUNDER SECTION =====
  const founderSection = (
    <section id="about" className="py-16 px-4 bg-gradient-to-r from-blue-900 via-cyan-400 to-blue-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-white text-center mb-12">Our Leadership</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src="/rutuick-jee.jpg" alt="Rutuick Jee" className="rounded-2xl shadow-2xl w-full" />

          <div className="text-white space-y-4">
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20">
              <p className="text-red-300 text-sm font-bold uppercase tracking-widest mb-1">Chairman & Founder</p>
              <h3 className="text-3xl font-black mb-2">Rutuick Jee</h3>
              <p className="text-sm text-gray-100 leading-relaxed">
                Founder of Niharika Foundation, dedicated to transforming lives through quality education in grassroots Odisha communities.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-4 border border-white border-opacity-20">
              <p className="text-sm font-bold flex items-center gap-2"><CheckCircle size={16} /> Community-led, transparency-first approach</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-4 border border-white border-opacity-20">
              <p className="text-sm font-bold flex items-center gap-2"><CheckCircle size={16} /> Global NGO standards with local Odisha roots</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // ===== TEAM SECTION =====
  const teamSection = (
    <section id="team" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-12 text-red-600">Our Committee</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {committeeMembers.map((member, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition text-center group cursor-pointer">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-black text-lg group-hover:scale-110 transition">
                {member.initials}
              </div>
              <h3 className="font-bold text-gray-800 text-sm">{member.name}</h3>
              <p className="text-xs text-red-600 font-bold uppercase mt-1">{member.role}</p>
              <p className="text-xs text-gray-600 mt-2">{member.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ===== GALLERY SECTION =====
  const gallerySection = (
    <section id="programs" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-12 text-red-600">Our Work in Odisha</h2>

        <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
          <img src={gallerySlides[autoSlideIndex].img} alt={gallerySlides[autoSlideIndex].title} className="w-full h-80 object-cover" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-6">
            <div>
              <h3 className="text-2xl font-black text-white">{gallerySlides[autoSlideIndex].title}</h3>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {gallerySlides.map((_, idx) => (
              <button key={idx} onClick={() => setAutoSlideIndex(idx)}
                className={`w-2 h-2 rounded-full transition ${idx === autoSlideIndex ? 'bg-white w-6' : 'bg-white bg-opacity-50'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // ===== FAQ SECTION =====
  const faqSection = (
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-12 text-red-600">Frequently Asked Questions</h2>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full p-4 text-left font-bold text-gray-800 hover:bg-red-50 transition flex items-center justify-between">
                {faq.q}
                <span className={`text-red-600 transition transform ${expandedFaq === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {expandedFaq === idx && (
                <div className="px-4 pb-4 text-gray-600 text-sm border-t-2 border-red-100">
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 pt-24">
          <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-red-600 to-red-700 text-white p-4 flex items-center justify-between">
              <h3 className="text-xl font-black">📋 Medha Samman Registration</h3>
              <button onClick={() => setSelectedForm(null)} className="text-2xl font-bold">×</button>
            </div>

            <form className="p-6 space-y-4" onSubmit={(e) => handleFormSubmit(e, 'medha-samman')}>
              <div>
                <label className="block text-gray-800 font-bold text-sm mb-1">Student Name *</label>
                <input type="text" name="name" required value={formData.name} onChange={handleFormChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-sm"
                  placeholder="Full Name" />
              </div>

              <div>
                <label className="block text-gray-800 font-bold text-sm mb-1">Village *</label>
                <input type="text" name="village" required value={formData.village} onChange={handleFormChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-sm"
                  placeholder="Your Village" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-800 font-bold text-sm mb-1">10th Marks (Optional)</label>
                  <input type="number" name="marks" min="0" max="100" step="0.01" value={formData.marks} onChange={handleFormChange}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-sm"
                    placeholder="e.g., 95" />
                </div>

                <div>
                  <label className="block text-gray-800 font-bold text-sm mb-1">Current Class *</label>
                  <select name="class" required value={formData.class} onChange={handleFormChange}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-sm">
                    <option value="">Select Class</option>
                    <option value="10th Board">10th Board</option>
                    <option value="11th">11th</option>
                    <option value="12th">12th</option>
                    <option value="College">College</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-800 font-bold text-sm mb-1">Referral Code (Optional)</label>
                <input type="text" name="referral" value={formData.referral} onChange={handleFormChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-sm"
                  placeholder="Who referred you?" />
              </div>

              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3">
                <p className="text-xs text-gray-700"><strong>Note:</strong> Details sent via WhatsApp. We'll confirm shortly.</p>
              </div>

              <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-black text-sm hover:shadow-lg transition">
                💬 Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }

  // ===== FOOTER =====
  const footer = (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <p className="text-sm font-bold">© 2026 Niharika Foundation - Educational Charitable Trust</p>
        <p className="text-xs text-gray-400">Medha Samman Committee, Baleshwar, Odisha</p>
        <div className="flex gap-4 justify-center text-xs font-bold">
          <a href={whatsappLink('Hello')} className="hover:text-green-400">WhatsApp</a>
          <span>•</span>
          <a href="mailto:niharikafoundation.org@gmail.com" className="hover:text-blue-400">Email</a>
          <span>•</span>
          <a href="tel:+919337871450" className="hover:text-yellow-400">Call Us</a>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="w-full overflow-x-hidden bg-white">
      {navbar}
      {heroSection}
      {countdownSection}
      {medhaSammanSection}
      {founderSection}
      {teamSection}
      {gallerySection}
      {faqSection}
      {footer}
    </div>
  );
}
