'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Heart, Users, BookOpen, Award, Target, Globe, Sparkles, ArrowRight, CheckCircle, MessageSquare, Mail, Phone, MapPin, Calendar, Clock } from 'lucide-react';

export default function NiharikaSite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);
  const [countdownDays, setCountdownDays] = useState(7);
  const [countdownHours, setCountdownHours] = useState(0);
  const [countdownMinutes, setCountdownMinutes] = useState(0);
  const [countdownSeconds, setCountdownSeconds] = useState(0);
  const [formData, setFormData] = useState({ name: '', village: '', marks: '', class: '', referral: '' });
  const [scrollY, setScrollY] = useState(0);
  const [autoSlideIndex, setAutoSlideIndex] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Countdown Timer - 7 day scholarship cycle
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

  // Auto-slide gallery every 5 seconds
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setAutoSlideIndex(prev => (prev + 1) % 5);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, []);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = (message) => {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/919337871450?text=${encoded}`;
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e, formType) => {
    e.preventDefault();
    let message = '';
    
    if (formType === 'medha-samman') {
      message = `Medha Samman Registration:\nName: ${formData.name}\nVillage: ${formData.village}\n10th Marks: ${formData.marks || 'Not provided'}\nClass: ${formData.class}\nReferral Code: ${formData.referral}`;
    }
    
    window.location.href = whatsappLink(message);
  };

  // Committee Members with Real Details
  const committeeMembers = [
    { initials: 'RJ', name: 'Rutuick Jee', role: 'CHAIRMAN & FOUNDER', phone: '9338330554', color: 'from-red-600 to-orange-600' },
    { initials: 'MN', name: 'Muralidhar Nayak', role: 'PRESIDENT', phone: '9337871450', color: 'from-blue-600 to-cyan-600' },
    { initials: 'AS', name: 'Ardhendu Sekhar Das', role: 'VICE-PRESIDENT', phone: '', color: 'from-green-600 to-emerald-600' },
    { initials: 'SS', name: 'Subham Sai Mohapatra', role: 'VICE-PRESIDENT', phone: '', color: 'from-purple-600 to-pink-600' },
    { initials: 'DD', name: 'Debadutta Das', role: 'GENERAL SECRETARY', phone: '9337288220', color: 'from-yellow-600 to-orange-600' },
    { initials: 'SM', name: 'Shyamsundar Mohanty', role: 'SECRETARY', phone: '', color: 'from-indigo-600 to-blue-600' },
    { initials: 'BP', name: 'Bibhudutta Parida', role: 'ASST. SECRETARY', phone: '', color: 'from-cyan-600 to-blue-600' },
    { initials: 'PD', name: 'Priyadarshini Das', role: 'CULTURAL SECRETARY', phone: '', color: 'from-rose-600 to-pink-600' },
  ];

  // Gallery slides with auto-transition
  const gallerySlides = [
    { img: '/odisha-temple.jpg', title: 'Heritage', desc: 'Cultural preservation' },
    { img: '/odisha-village.jpg', title: 'Community', desc: 'Village development' },
    { img: '/odisha-students.jpg', title: 'Education', desc: 'Student empowerment' },
    { img: '/women-empowerment.jpg', title: 'Women', desc: 'Skills & rights' },
    { img: '/health-awareness.jpg', title: 'Healthcare', desc: 'Medical awareness' },
  ];

  // FAQ Accordion
  const faqs = [
    { q: 'Who is eligible for Medha Samman?', a: 'Students who secured 90% or above in 10th Board Exam 2026 (CBSE, BSE Odisha, ICSE).' },
    { q: 'How do I register for scholarships?', a: 'Fill the registration form on our website or contact us via WhatsApp. Provide your name, village, marks, and referral code.' },
    { q: 'What is the Medha Samman ceremony date?', a: 'The ceremony is scheduled for 24-05-2026 (Sunday) from 10:00 AM to 9:00 PM at Gandhi Smruti Bhawan, Baleshwar.' },
    { q: 'How much scholarship will I receive?', a: 'Scholarship amounts vary based on merit and financial need. Contact us for detailed information.' },
    { q: 'Can I volunteer with Niharika Foundation?', a: 'Yes! We welcome volunteers. Send us your details via WhatsApp or contact form.' },
  ];

  // ===== NAVBAR =====
  const navbar = (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50 border-b-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/niharika-logo.png" alt="Niharika" className="h-14 w-14 drop-shadow-lg" />
          <div>
            <h1 className="font-black text-red-600 text-xl">NIHARIKA FOUNDATION</h1>
            <p className="text-xs text-gray-600 font-semibold">Educational Charitable Trust • Odisha</p>
          </div>
        </div>

        <div className="hidden md:flex gap-6 items-center">
          {['Home', 'About', 'Medha Samman', 'Programs', 'Team', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-red-600 font-bold transition duration-200"
            >
              {item}
            </a>
          ))}
          <a
            href={whatsappLink('I want to donate')}
            className="px-6 py-2 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition"
          >
            Donate
          </a>
        </div>

        <button
          className="md:hidden text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t-2 border-red-600 px-4 py-4 space-y-3">
          {['Home', 'About', 'Medha Samman', 'Programs', 'Team', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-gray-700 hover:text-red-600 font-bold"
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink('Hello! I want to know more about Niharika Foundation')}
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl z-40 hover:scale-110 transition-transform animate-bounce"
      >
        <MessageSquare size={28} className="text-white" />
      </a>
    </nav>
  );

  // ===== HERO SECTION =====
  const heroSection = (
    <section
      id="home"
      className="pt-24 min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50 flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute top-32 left-10 opacity-5 w-96 h-96">
        <img src="/niharika-logo.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <div className="mb-8 inline-block animate-bounce" style={{ animationDuration: '3s' }}>
          <img src="/niharika-logo.png" alt="Niharika" className="h-48 w-48 drop-shadow-2xl" />
        </div>

        <h1 className="text-6xl md:text-7xl font-black text-red-600 mb-4 leading-tight">
          NIHARIKA FOUNDATION
        </h1>
        <p className="text-2xl md:text-3xl text-gray-800 font-bold mb-2">
          Educational Charitable Trust & Research Center
        </p>
        <p className="text-lg text-gray-600 mb-8 font-semibold">
          Medha Samman Committee, Baleshwar, Odisha
        </p>
        <p className="text-md text-gray-700 font-semibold mb-12 italic">
          "Honoring Excellence. Encouraging Dreams. Building Future."
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-12">
          <a
            href="#medha-samman"
            className="px-8 py-4 bg-red-600 text-white rounded-full font-bold text-lg hover:bg-red-700 transition transform hover:scale-105 flex items-center gap-2 shadow-lg"
          >
            <Calendar className="w-5 h-5" /> Medha Samman 2026
          </a>
          <a
            href={whatsappLink('I want to know more')}
            className="px-8 py-4 bg-green-600 text-white rounded-full font-bold text-lg hover:bg-green-700 transition transform hover:scale-105 flex items-center gap-2 shadow-lg"
          >
            <MessageSquare className="w-5 h-5" /> Contact Us
          </a>
        </div>
      </div>
    </section>
  );

  // ===== COUNTDOWN SECTION =====
  const countdownSection = (
    <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-4">New Scholarship Announcement</h2>
        <p className="text-center text-lg mb-12 font-semibold">Next scholarship scheme in:</p>

        <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
          <div className="bg-white bg-opacity-20 rounded-2xl p-6 text-center backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-30 transition">
            <div className="text-5xl font-black">{String(countdownDays).padStart(2, '0')}</div>
            <div className="text-sm uppercase tracking-widest mt-2 font-bold">Days</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-2xl p-6 text-center backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-30 transition">
            <div className="text-5xl font-black">{String(countdownHours).padStart(2, '0')}</div>
            <div className="text-sm uppercase tracking-widest mt-2 font-bold">Hours</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-2xl p-6 text-center backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-30 transition">
            <div className="text-5xl font-black">{String(countdownMinutes).padStart(2, '0')}</div>
            <div className="text-sm uppercase tracking-widest mt-2 font-bold">Minutes</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-2xl p-6 text-center backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-30 transition">
            <div className="text-5xl font-black">{String(countdownSeconds).padStart(2, '0')}</div>
            <div className="text-sm uppercase tracking-widest mt-2 font-bold">Seconds</div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold">Be the first to know about new opportunities!</p>
          <a
            href={whatsappLink('Send me updates about new scholarships')}
            className="inline-block mt-4 px-8 py-3 bg-white text-green-700 rounded-full font-bold hover:bg-gray-100 transition"
          >
            Get Notified
          </a>
        </div>
      </div>
    </section>
  );

  // ===== MEDHA SAMMAN SECTION =====
  const medhaSammanSection = (
    <section id="medha-samman" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-4 text-red-600">Medha Samman 2026</h2>
        <p className="text-center text-gray-600 text-lg mb-16">
          Felicitation for students securing 90% & above in 10th Board Exam 2026
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img src="/medha-samman-poster.jpg" alt="Medha Samman 2026" className="rounded-3xl shadow-2xl w-full hover:shadow-3xl transition" />
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <MapPin className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-gray-800">Location</h3>
                <p className="text-gray-600 text-lg">Gandhi Smruti Bhawan, Baleshwar</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <Calendar className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-gray-800">Date</h3>
                <p className="text-gray-600 text-lg">24-05-2026 (Sunday)</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <Clock className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-gray-800">Time</h3>
                <p className="text-gray-600 text-lg">10:00 AM to 9:00 PM (3 Sessions)</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <Phone className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-gray-800">Contact</h3>
                <p className="text-gray-600 text-lg">+91 9337871450, 8249860766, 7978681159</p>
              </div>
            </div>

            <button
              onClick={() => setSelectedForm('medha-samman')}
              className="w-full px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl font-black text-lg hover:shadow-2xl transition transform hover:scale-105"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  // ===== MEDHA SAMMAN REGISTRATION MODAL =====
  if (selectedForm === 'medha-samman') {
    return (
      <>
        {navbar}
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 pt-24">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-red-600 to-red-700 text-white p-6 flex items-center justify-between rounded-t-3xl">
              <h3 className="text-2xl font-black">Medha Samman Registration</h3>
              <button onClick={() => setSelectedForm(null)} className="text-3xl font-bold hover:opacity-80">×</button>
            </div>

            <form className="p-8 space-y-6" onSubmit={(e) => handleFormSubmit(e, 'medha-samman')}>
              <div>
                <label className="block text-gray-800 font-bold mb-2">Student Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-600 focus:outline-none font-medium"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-bold mb-2">Village *</label>
                <input
                  type="text"
                  name="village"
                  required
                  value={formData.village}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-600 focus:outline-none font-medium"
                  placeholder="Your Village"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-800 font-bold mb-2">10th Board Marks (Optional)</label>
                  <input
                    type="number"
                    name="marks"
                    min="0"
                    max="100"
                    step="0.01"
                    value={formData.marks}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-600 focus:outline-none font-medium"
                    placeholder="e.g., 95.5"
                  />
                  <p className="text-xs text-gray-500 mt-1">Percentage or score</p>
                </div>

                <div>
                  <label className="block text-gray-800 font-bold mb-2">Current Class *</label>
                  <select
                    name="class"
                    required
                    value={formData.class}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-600 focus:outline-none font-medium"
                  >
                    <option value="">Select Class</option>
                    <option value="10th Board">10th Board Exam</option>
                    <option value="11th">11th Grade</option>
                    <option value="12th">12th Grade</option>
                    <option value="College">College</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-800 font-bold mb-2">Referral Code (If any)</label>
                <input
                  type="text"
                  name="referral"
                  value={formData.referral}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-600 focus:outline-none font-medium"
                  placeholder="e.g., FRIEND2026"
                />
                <p className="text-xs text-gray-500 mt-1">Who referred you to us?</p>
              </div>

              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                <p className="text-sm text-gray-700 font-semibold">
                  <strong>Note:</strong> Your details will be sent via WhatsApp to our registration team. We'll contact you for confirmation.
                </p>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-black text-lg hover:shadow-lg transition flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" /> Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }

  // ===== FOUNDER SECTION =====
  const founderSection = (
    <section id="about" className="py-20 px-4 bg-gradient-to-r from-blue-900 via-cyan-400 to-blue-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-white text-center mb-12">Meet Our Founder</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="/rutuick-jee.jpg" alt="Rutuick Jee" className="rounded-3xl shadow-2xl w-full hover:shadow-3xl transition" />
            <div className="absolute bottom-0 left-0 bg-white bg-opacity-95 px-6 py-4 rounded-tr-3xl">
              <p className="text-red-600 font-black uppercase text-sm">Chairman & Founder</p>
              <p className="text-2xl font-black text-gray-800">Rutuick Jee</p>
              <p className="text-gray-600 text-sm font-semibold">Niharika Foundation</p>
            </div>
          </div>

          <div className="text-white">
            <h3 className="text-4xl font-black mb-6">Driving Change in Odisha</h3>
            <p className="text-lg leading-relaxed mb-6 font-semibold">
              Niharika Foundation works at the grassroots of Baleshwar district and across rural Odisha – supporting under-resourced students, empowering women through skills, organising healthcare camps, and felicitating young academic achievers through our flagship Niharika Medha Samman.
            </p>
            <p className="text-lg leading-relaxed font-semibold">
              Our work is community-led, transparency-first, and rooted in the cultural soul of Odisha – yet meets global NGO standards of accountability and impact.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white bg-opacity-20 backdrop-blur rounded-2xl p-6 border border-white border-opacity-30 hover:bg-opacity-30 transition">
                <h4 className="font-black text-xl mb-2">Our Mission</h4>
                <p className="text-sm font-semibold">Provide quality education, support research, and empower communities</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur rounded-2xl p-6 border border-white border-opacity-30 hover:bg-opacity-30 transition">
                <h4 className="font-black text-xl mb-2">Our Vision</h4>
                <p className="text-sm font-semibold">World where every individual has equal access to education</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // ===== TEAM SECTION =====
  const teamSection = (
    <section id="team" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-4 text-red-600">Leadership Team</h2>
        <p className="text-center text-gray-600 text-lg mb-16">Dedicated professionals driving change</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {committeeMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:scale-105 border-2 border-gray-100 hover:border-red-300"
            >
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-4 text-white font-black text-3xl shadow-lg`}>
                {member.initials}
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-1 text-center">{member.name}</h3>
              <p className="text-red-600 font-black text-xs mb-3 text-center uppercase">{member.role}</p>
              {member.phone && (
                <p className="text-gray-600 text-sm font-semibold text-center">+91 {member.phone}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ===== GALLERY AUTO-SLIDE SECTION =====
  const gallerySection = (
    <section id="programs" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-4 text-red-600">Our Work in Odisha</h2>
        <p className="text-center text-gray-600 text-lg mb-16">Documenting impact across communities</p>

        <div className="relative">
          {/* Auto-sliding main image */}
          <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-8">
            <img
              src={gallerySlides[autoSlideIndex].img}
              alt={gallerySlides[autoSlideIndex].title}
              className="w-full h-full object-cover transition-opacity duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 text-white p-8">
              <h3 className="text-4xl font-black mb-2">{gallerySlides[autoSlideIndex].title}</h3>
              <p className="text-lg font-semibold">{gallerySlides[autoSlideIndex].desc}</p>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-3 mb-12">
            {gallerySlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setAutoSlideIndex(idx)}
                className={`w-3 h-3 rounded-full transition ${autoSlideIndex === idx ? 'bg-red-600 w-8' : 'bg-gray-400 hover:bg-gray-500'}`}
              />
            ))}
          </div>

          {/* Thumbnail grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {gallerySlides.map((slide, idx) => (
              <button
                key={idx}
                onClick={() => setAutoSlideIndex(idx)}
                className={`relative h-32 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105 border-2 ${autoSlideIndex === idx ? 'border-red-600' : 'border-gray-200'}`}
              >
                <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-0 transition"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // ===== FAQ ACCORDION SECTION =====
  const faqSection = (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-4 text-red-600">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 text-lg mb-16">Get answers to common questions</p>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-red-600 transition">
              <button
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full px-6 py-4 bg-gray-50 hover:bg-red-50 flex items-center justify-between transition font-bold text-gray-800"
              >
                <span className="text-left text-lg">{faq.q}</span>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 transition-transform ${expandedFaq === idx ? 'rotate-180' : ''}`}
                />
              </button>

              {expandedFaq === idx && (
                <div className="px-6 py-4 bg-white border-t-2 border-gray-200 text-gray-700 font-semibold animate-pulse">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ===== CONTACT SECTION =====
  const contactSection = (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-4 text-red-600">Get In Touch</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition text-center">
            <Phone className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="font-bold text-lg text-gray-800 mb-4">Phone</h3>
            <div className="space-y-2 text-gray-600 font-semibold text-sm">
              <p>+91 9337871450</p>
              <p>+91 8249860766</p>
              <p>+91 7978681159</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition text-center">
            <Mail className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="font-bold text-lg text-gray-800 mb-4">Email</h3>
            <p className="text-gray-600 font-semibold text-sm">niharikafoundation.org@gmail.com</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition text-center">
            <MapPin className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="font-bold text-lg text-gray-800 mb-4">Location</h3>
            <p className="text-gray-600 font-semibold text-sm">Balesore, Odisha, India</p>
          </div>
        </div>
      </div>
    </section>
  );

  // ===== FOOTER =====
  const footer = (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-lg mb-4">About</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-white transition">Our Story</a></li>
              <li><a href="#team" className="hover:text-white transition">Team</a></li>
              <li><a href="#programs" className="hover:text-white transition">Programs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Get Involved</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href={whatsappLink('I want to volunteer')} className="hover:text-white transition">Volunteer</a></li>
              <li><a href={whatsappLink('I want to donate')} className="hover:text-white transition">Donate</a></li>
              <li><a href={whatsappLink('I want to partner')} className="hover:text-white transition">Partner</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition">YouTube</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <p className="text-gray-400 text-sm mb-2">+91 9337871450</p>
            <p className="text-gray-400 text-sm mb-2">niharikafoundation.org@gmail.com</p>
            <p className="text-gray-400 text-sm">Balesore, Odisha</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Niharika Foundation. All rights reserved.</p>
          <p className="mt-2 text-sm">"Together for Education • Together for a Better Future"</p>
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
      {contactSection}
      {footer}
    </div>
  );
}
