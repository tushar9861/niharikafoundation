'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Mail, Phone, MapPin, Calendar, Clock, ChevronDown, ChevronRight, Award, Heart, Users, BookOpen, TrendingUp, Star } from 'lucide-react';

export default function NiharikaSite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);
  const [countdownDays, setCountdownDays] = useState(7);
  const [countdownHours, setCountdownHours] = useState(0);
  const [countdownMinutes, setCountdownMinutes] = useState(0);
  const [countdownSeconds, setCountdownSeconds] = useState(0);
  const [formData, setFormData] = useState({ name: '', village: '', marks: '', class: '', referral: '' });
  const [autoSlideIndex, setAutoSlideIndex] = useState(0);
  const [expandedTeamIdx, setExpandedTeamIdx] = useState(null);
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const message = `📋 MEDHA SAMMAN 2026 - REGISTRATION\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n👤 Student Name: ${formData.name}\n📍 Village/District: ${formData.village}\n📊 10th Board Marks: ${formData.marks || 'Not provided'}\n📚 Current Class: ${formData.class}\n🔑 Referral Code: ${formData.referral || 'None'}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n✅ Please confirm this registration for Medha Samman 2026 Ceremony.`;
    window.location.href = whatsappLink(message);
    setSelectedForm(null);
  };

  const committeeMembers = [
    { initials: 'RJ', name: 'Rutuick Jee', role: 'Chairman & Founder', phone: '9338330554', desc: 'Visionary Leader' },
    { initials: 'MN', name: 'Muralidhar Nayak', role: 'President', phone: '9337871450', desc: 'Strategy & Vision' },
    { initials: 'AS', name: 'Ardhendu Sekhar Das', role: 'Vice-President', phone: '9337871450', desc: 'Community Relations' },
    { initials: 'SS', name: 'Subham Sai Mohapatra', role: 'Vice-President', phone: '9337871450', desc: 'Operations' },
    { initials: 'DD', name: 'Debadutta Das', role: 'General Secretary', phone: '9337288220', desc: 'Administration' },
    { initials: 'SM', name: 'Shyamsundar Mohanty', role: 'Secretary', phone: '9337288220', desc: 'Documentation' },
    { initials: 'BP', name: 'Bibhudutta Parida', role: 'Asst. Secretary', phone: '9337288220', desc: 'Support' },
    { initials: 'PD', name: 'Priyadarshini Das', role: 'Cultural Secretary', phone: '9337288220', desc: 'Events' },
  ];

  const gallerySlides = [
    { img: '/odisha-temple.jpg', title: 'Heritage & Culture' },
    { img: '/odisha-village.jpg', title: 'Rural Community' },
    { img: '/odisha-students.jpg', title: 'Education First' },
    { img: '/women-empowerment.jpg', title: 'Women Empowerment' },
    { img: '/health-awareness.jpg', title: 'Healthcare Access' },
  ];

  const faqs = [
    { q: 'Who is eligible for Medha Samman?', a: 'Students securing 90%+ marks in 10th Board Exam 2026 (CBSE, BSE Odisha, ICSE) are eligible for recognition and scholarships.' },
    { q: 'How do I register for the ceremony?', a: 'Click "Register Now" button, fill your details (name, village, marks, class, referral), and submit via WhatsApp. Our team will confirm your registration.' },
    { q: 'When and where is the Medha Samman 2026 ceremony?', a: 'Date: 24-05-2026 (Sunday) | Time: 10:00 AM-9:00 PM | Venue: Gandhi Smruti Bhawan, Baleshwar, Odisha' },
    { q: 'What is the scholarship amount?', a: 'Merit scholarships range from ₹10,000-₹25,000 based on marks and financial need. Need-based support also available.' },
    { q: 'Can I volunteer with Niharika?', a: 'Yes! We welcome volunteers from all backgrounds. Contact us via WhatsApp with your details and interest area.' },
  ];

  const scholarships = [
    { title: 'Merit Excellence Award', amount: '₹25,000', icon: '🏆', color: 'from-yellow-400 to-yellow-600' },
    { title: 'Need-Based Support', amount: '₹15,000', icon: '🤝', color: 'from-blue-400 to-blue-600' },
    { title: 'Girl Child Education', amount: '₹20,000', icon: '👧', color: 'from-pink-400 to-pink-600' },
    { title: 'Skill Development', amount: '₹10,000', icon: '💡', color: 'from-green-400 to-green-600' },
  ];

  const impactStats = [
    { label: 'Students Empowered', value: '5000+', icon: '👨‍🎓' },
    { label: 'Scholarships Distributed', value: '₹50L+', icon: '💰' },
    { label: 'Villages Reached', value: '50+', icon: '🏘️' },
    { label: 'Lives Changed', value: '100%', icon: '❤️' },
  ];

  // ===== NAVBAR =====
  const navbar = (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50 border-b-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/niharika-logo.png" alt="Niharika" className="h-12 w-12" />
          <div className="hidden sm:block">
            <h1 className="font-black text-red-700 text-sm md:text-lg">NIHARIKA</h1>
            <p className="text-xs text-gray-800 font-bold">Educational Charitable Trust</p>
          </div>
        </div>

        <div className="hidden md:flex gap-4 text-xs items-center">
          {['Home', 'About', 'Medha Samman', 'Programs', 'Impact', 'Team', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-800 hover:text-red-600 font-bold transition">
              {item}
            </a>
          ))}
          <button onClick={() => setSelectedForm('medha-samman')} className="px-4 py-2 bg-red-600 text-white rounded-full font-bold text-xs hover:bg-red-700">
            Register
          </button>
        </div>

        <button className="md:hidden text-gray-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t-2 border-red-600 px-4 py-3 space-y-2">
          {['Home', 'About', 'Medha Samman', 'Programs', 'Impact', 'Team', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block text-gray-800 hover:text-red-600 font-bold py-2">
              {item}
            </a>
          ))}
          <button onClick={() => { setSelectedForm('medha-samman'); setMobileMenuOpen(false); }} className="w-full px-4 py-2 bg-red-600 text-white rounded font-bold text-xs">
            Register
          </button>
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
    <section id="home" className="pt-20 pb-8 bg-gradient-to-br from-red-50 via-white to-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center py-12">
          <div className="mb-6 flex justify-center animate-bounce" style={{animationDuration: '2.5s'}}>
            <img src="/niharika-logo.png" alt="Niharika" className="h-40 w-40 drop-shadow-xl" />
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-red-700 mb-2 leading-tight">
            NIHARIKA FOUNDATION
          </h1>
          <p className="text-lg md:text-xl text-gray-800 font-bold mb-1">
            Educational Charitable Trust & Research Center
          </p>
          <p className="text-sm md:text-base text-gray-700 mb-6 font-semibold">
            Medha Samman Committee, Baleshwar, Odisha
          </p>
          <p className="text-sm text-gray-700 font-bold italic mb-8 text-red-600">
            "Honoring Excellence • Encouraging Dreams • Building Future"
          </p>

          <div className="flex gap-3 justify-center flex-wrap mb-8">
            <button onClick={() => setSelectedForm('medha-samman')} 
              className="px-6 py-3 bg-red-600 text-white rounded-lg font-bold text-sm hover:bg-red-700 transition transform hover:scale-105 shadow-lg">
              📋 Register for Medha Samman
            </button>
            <a href={whatsappLink('I want to know more about Niharika Foundation')} 
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-bold text-sm hover:bg-green-700 transition transform hover:scale-105 shadow-lg">
              💬 Contact Us
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {impactStats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 shadow-md border-t-4 border-red-600">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <p className="text-xl font-black text-red-600">{stat.value}</p>
                <p className="text-xs font-bold text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // ===== COMPACT COUNTDOWN SECTION =====
  const countdownSection = (
    <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-black">🎓 Next Scholarship in:</h3>
            <p className="text-xs text-green-100">Limited slots available</p>
          </div>

          <div className="grid grid-cols-4 gap-1.5">
            <div className="bg-white rounded p-2 text-center">
              <div className="text-lg font-black text-green-700">{String(countdownDays).padStart(2, '0')}</div>
              <div className="text-xs font-bold text-green-600">Days</div>
            </div>
            <div className="bg-white rounded p-2 text-center">
              <div className="text-lg font-black text-green-700">{String(countdownHours).padStart(2, '0')}</div>
              <div className="text-xs font-bold text-green-600">Hrs</div>
            </div>
            <div className="bg-white rounded p-2 text-center">
              <div className="text-lg font-black text-green-700">{String(countdownMinutes).padStart(2, '0')}</div>
              <div className="text-xs font-bold text-green-600">Min</div>
            </div>
            <div className="bg-white rounded p-2 text-center">
              <div className="text-lg font-black text-green-700">{String(countdownSeconds).padStart(2, '0')}</div>
              <div className="text-xs font-bold text-green-600">Sec</div>
            </div>
          </div>

          <button onClick={() => setSelectedForm('medha-samman')} 
            className="px-4 py-2 bg-white text-green-700 rounded-full font-bold text-xs hover:bg-gray-100 transition whitespace-nowrap">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );

  // ===== WHY NIHARIKA SECTION =====
  const storySection = (
    <section id="about" className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-red-700 mb-2 text-center">Why Niharika Exists</h2>
        <p className="text-center text-gray-700 text-sm mb-10 font-semibold">Building dreams through quality education</p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded">
              <h3 className="font-black text-gray-800 text-sm mb-2">Our Mission</h3>
              <p className="text-xs text-gray-700 leading-relaxed">To provide quality education and scholarship support to underprivileged students across Odisha, ensuring every child has a chance to excel.</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded">
              <h3 className="font-black text-gray-800 text-sm mb-2">Our Vision</h3>
              <p className="text-xs text-gray-700 leading-relaxed">A world where every individual has access to education, equal opportunities, and the power to create positive change.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded">
              <h3 className="font-black text-gray-800 text-sm mb-2">Our Values</h3>
              <p className="text-xs text-gray-700 leading-relaxed">Integrity, Empathy, Excellence, Inclusion - Community-led transparency rooted in Odisha's cultural soul.</p>
            </div>
          </div>

          <img src="/rutuick-jee.jpg" alt="Rutuick Jee" className="rounded-xl shadow-xl h-96 object-cover" />
        </div>
      </div>
    </section>
  );

  // ===== MEDHA SAMMAN PREMIUM SECTION =====
  const medhaSammanSection = (
    <section id="medha-samman" className="py-12 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-1 text-red-700">Medha Samman 2026</h2>
        <p className="text-center text-gray-700 text-sm mb-10 font-bold">Excellence Recognition & Scholarship Ceremony</p>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          <img src="/medha-samman-poster.jpg" alt="Medha Samman" className="rounded-xl shadow-lg w-full h-80 object-cover" />

          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-white border-l-4 border-red-600 p-4 rounded shadow-md">
              <MapPin className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-800 text-sm">Location</h3>
                <p className="text-xs text-gray-700">Gandhi Smruti Bhawan, Baleshwar</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white border-l-4 border-blue-600 p-4 rounded shadow-md">
              <Calendar className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-800 text-sm">Date & Time</h3>
                <p className="text-xs text-gray-700">24-05-2026 (Sunday) • 10:00 AM-9:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white border-l-4 border-green-600 p-4 rounded shadow-md">
              <Phone className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-800 text-sm">Contact</h3>
                <p className="text-xs text-gray-700">9337871450 | 8249860766 | 7978681159</p>
              </div>
            </div>

            <button onClick={() => setSelectedForm('medha-samman')} 
              className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-black text-sm hover:shadow-lg transition transform hover:scale-105">
              📝 Register & Celebrate Excellence
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {scholarships.map((sch, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${sch.color} text-white rounded-lg p-4 shadow-lg hover:shadow-xl transition transform hover:scale-105`}>
              <div className="text-2xl mb-2">{sch.icon}</div>
              <h3 className="font-black text-sm mb-2">{sch.title}</h3>
              <p className="text-lg font-black">{sch.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ===== GALLERY SECTION =====
  const gallerySection = (
    <section className="py-12 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-8 text-white">Documentary Gallery: Our Work in Odisha</h2>

        <div className="relative bg-gray-800 rounded-xl overflow-hidden shadow-2xl mb-6">
          <img src={gallerySlides[autoSlideIndex].img} alt={gallerySlides[autoSlideIndex].title} className="w-full h-80 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-6">
            <h3 className="text-2xl font-black text-white">{gallerySlides[autoSlideIndex].title}</h3>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {gallerySlides.map((_, idx) => (
              <button key={idx} onClick={() => setAutoSlideIndex(idx)}
                className={`rounded-full transition ${idx === autoSlideIndex ? 'bg-white w-8 h-2' : 'bg-white bg-opacity-40 w-2 h-2'}`} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Educational Drives', 'Volunteer Moments', 'Scholarship Distribution'].map((title, idx) => (
            <div key={idx} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <p className="text-white font-bold text-sm">📸 {title}</p>
              <p className="text-gray-400 text-xs mt-2">Real moments of impact and transformation across Odisha communities</p>
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
        <h2 className="text-3xl font-black text-center mb-2 text-red-700">Our Committee Members</h2>
        <p className="text-center text-gray-700 text-sm mb-8 font-semibold">Dedicated leaders driving the mission forward</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {committeeMembers.map((member, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md border-t-4 border-red-600 hover:shadow-lg transition cursor-pointer"
              onClick={() => setExpandedTeamIdx(expandedTeamIdx === idx ? null : idx)}>
              <div className="p-4 text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-black text-lg">
                  {member.initials}
                </div>
                <h3 className="font-bold text-gray-800 text-xs">{member.name}</h3>
                <p className="text-xs text-red-700 font-bold uppercase mt-1">{member.role}</p>
                {expandedTeamIdx === idx && (
                  <div className="mt-2 pt-2 border-t border-gray-200">
                    <p className="text-xs text-gray-700 font-semibold">{member.desc}</p>
                    <p className="text-xs text-gray-600 mt-1">{member.phone}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ===== FAQ SECTION =====
  const faqSection = (
    <section id="contact" className="py-12 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-2 text-red-700">Frequently Asked Questions</h2>
        <p className="text-center text-gray-700 text-sm mb-8 font-semibold">Everything you need to know</p>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden border border-gray-300 shadow-sm hover:shadow-md transition">
              <button onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full p-4 text-left font-bold text-gray-800 hover:bg-red-50 transition flex items-center justify-between">
                <span className="text-sm">{faq.q}</span>
                <span className={`text-red-600 transition transform text-lg ${expandedFaq === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {expandedFaq === idx && (
                <div className="px-4 pb-4 text-gray-700 text-xs border-t border-gray-200 bg-gray-50 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ===== FOOTER =====
  const footer = (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div>
            <h3 className="font-black text-red-400 mb-3">About</h3>
            <ul className="space-y-1 text-xs text-gray-400">
              <li><a href="#about" className="hover:text-white transition">Our Mission</a></li>
              <li><a href="#about" className="hover:text-white transition">Our Values</a></li>
              <li><a href="#medha-samman" className="hover:text-white transition">Medha Samman</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-black text-red-400 mb-3">Programs</h3>
            <ul className="space-y-1 text-xs text-gray-400">
              <li><a href="#medha-samman" className="hover:text-white transition">Scholarships</a></li>
              <li><a href="#" className="hover:text-white transition">Skill Training</a></li>
              <li><a href="#" className="hover:text-white transition">Health Programs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-black text-red-400 mb-3">Contact</h3>
            <ul className="space-y-1 text-xs text-gray-400">
              <li>Phone: 9337871450</li>
              <li>Email: info@niharika.org</li>
              <li>Location: Baleshwar, Odisha</li>
            </ul>
          </div>
          <div>
            <h3 className="font-black text-red-400 mb-3">Quick Actions</h3>
            <ul className="space-y-1 text-xs">
              <li><button onClick={() => setSelectedForm('medha-samman')} className="text-yellow-400 hover:text-yellow-300">Register Now</button></li>
              <li><a href={whatsappLink('I want to volunteer')} className="text-green-400 hover:text-green-300">Volunteer</a></li>
              <li><a href={whatsappLink('I want to donate')} className="text-red-400 hover:text-red-300">Donate</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          <p className="mb-2">© 2026 Niharika Foundation • Educational Charitable Trust & Research Center</p>
          <p>Registered NGO • Medha Samman Committee, Baleshwar, Odisha</p>
          <p className="text-gray-600 italic mt-2">"Together for Education • Together for a Better Future"</p>
        </div>
      </div>
    </footer>
  );

  // ===== REGISTRATION MODAL =====
  const registrationModal = selectedForm === 'medha-samman' && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-96 overflow-y-auto">
        <div className="sticky top-0 bg-red-600 text-white p-4 flex items-center justify-between">
          <h2 className="font-black text-lg">Medha Samman 2026 Registration</h2>
          <button onClick={() => setSelectedForm(null)} className="text-white hover:bg-red-700 p-1 rounded">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleFormSubmit} className="p-5 space-y-3">
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1">Full Name *</label>
            <input type="text" name="name" value={formData.name} onChange={handleFormChange} required
              className="w-full px-3 py-2 border-2 border-gray-300 rounded text-sm text-gray-800 focus:border-red-600 focus:outline-none"
              placeholder="Enter your name" />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1">Village/District *</label>
            <input type="text" name="village" value={formData.village} onChange={handleFormChange} required
              className="w-full px-3 py-2 border-2 border-gray-300 rounded text-sm text-gray-800 focus:border-red-600 focus:outline-none"
              placeholder="Enter your village" />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1">10th Board Marks (Optional)</label>
            <input type="number" name="marks" value={formData.marks} onChange={handleFormChange}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded text-sm text-gray-800 focus:border-red-600 focus:outline-none"
              placeholder="e.g., 95" />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1">Current Class *</label>
            <select name="class" value={formData.class} onChange={handleFormChange} required
              className="w-full px-3 py-2 border-2 border-gray-300 rounded text-sm text-gray-800 focus:border-red-600 focus:outline-none">
              <option value="">Select Class</option>
              <option value="10">Class 10</option>
              <option value="11">Class 11</option>
              <option value="12">Class 12</option>
              <option value="Graduation">Graduation</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1">Referral Code (Optional)</label>
            <input type="text" name="referral" value={formData.referral} onChange={handleFormChange}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded text-sm text-gray-800 focus:border-red-600 focus:outline-none"
              placeholder="If referred by someone" />
          </div>

          <button type="submit" className="w-full px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-black text-sm hover:shadow-lg transition">
            ✓ Send via WhatsApp
          </button>

          <p className="text-xs text-gray-600 text-center mt-2">
            Your data will be sent securely via WhatsApp. No backend server used.
          </p>
        </form>
      </div>
    </div>
  );

  return (
    <div className="w-full overflow-x-hidden bg-white">
      {navbar}
      {heroSection}
      {countdownSection}
      {storySection}
      {medhaSammanSection}
      {gallerySection}
      {teamSection}
      {faqSection}
      {footer}
      {registrationModal}
    </div>
  );
}
