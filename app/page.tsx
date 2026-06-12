'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Mail, Phone, MapPin, Calendar, Clock, ChevronDown, Award, Heart, Users, BookOpen, TrendingUp, Star, Target, Globe } from 'lucide-react';

export default function NiharikaSite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);
  const [countdownDays, setCountdownDays] = useState(7);
  const [countdownHours, setCountdownHours] = useState(0);
  const [countdownMinutes, setCountdownMinutes] = useState(0);
  const [countdownSeconds, setCountdownSeconds] = useState(0);
  const [formData, setFormData] = useState({ name: '', village: '', marks: '', class: '', referral: '' });
  const [homeSlideIndex, setHomeSlideIndex] = useState(0);
  const [ceremonyGalleryIndex, setCeremonyGalleryIndex] = useState(0);
  const [scholarshipGalleryIndex, setScholarshipGalleryIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);

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

      {/* ===== HERO WITH AUTO-SLIDESHOW ===== */}
      <section id="home" className="relative h-screen bg-gray-900 flex items-center justify-center overflow-hidden pt-20">
        {/* Auto-slideshow */}
        <div className="absolute inset-0 w-full h-full">
          {homeSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${idx === homeSlideIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-3xl px-4">
          <div className="mb-12 flex justify-center">
            <div className="w-40 h-40 rounded-full border-8 border-yellow-400 shadow-2xl overflow-hidden flex items-center justify-center bg-white"
              style={{
                boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 0 40px rgba(255,193,7,0.6), inset 0 -4px 8px rgba(0,0,0,0.3)'
              }}
            >
              <img src="/niharika-logo.png" alt="Niharika" className="w-36 h-36 object-contain animate-pulse" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4 drop-shadow-lg">NIHARIKA FOUNDATION</h1>
          <p className="text-2xl md:text-3xl font-bold text-yellow-300 mb-6 drop-shadow-lg">Educational Charitable Trust • Odisha</p>
          <p className="text-xl mb-8 drop-shadow-lg">Honoring Excellence • Encouraging Dreams • Building Future</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={() => setSelectedForm('registration')} className="px-8 py-4 bg-yellow-400 text-red-900 rounded-full font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105">
              Register Now
            </button>
            <a href="#medha-samman" className="px-8 py-4 bg-white text-red-900 rounded-full font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105">
              Explore More
            </a>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 z-20 flex gap-2 justify-center w-full">
          {homeSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setHomeSlideIndex(idx)}
              className={`w-3 h-3 rounded-full transition ${idx === homeSlideIndex ? 'bg-yellow-400 w-8' : 'bg-white/50'}`}
            />
          ))}
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
          <h2 className="text-4xl font-black text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-700">About Niharika Foundation</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Founded on <span className="font-bold text-red-600">24th May, 2026</span> in Baleshwar, Odisha
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">Provide quality education, support research, and empower individuals and communities to achieve their full potential.</p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">A world where every individual has access to education, equal opportunities, and the power to create positive change.</p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-red-600 text-white p-6 rounded-xl text-center">
                  <div className="text-3xl font-black">700+</div>
                  <div className="text-sm font-bold">Scholars 2026</div>
                </div>
                <div className="bg-green-600 text-white p-6 rounded-xl text-center">
                  <div className="text-3xl font-black">50+</div>
                  <div className="text-sm font-bold">Villages</div>
                </div>
                <div className="bg-blue-600 text-white p-6 rounded-xl text-center">
                  <div className="text-3xl font-black">100%</div>
                  <div className="text-sm font-bold">Transparent</div>
                </div>
              </div>
            </div>
            <img src="/ceremony-gallery/dsc09178.jpg" alt="Community" className="rounded-2xl shadow-2xl h-96 object-cover" />
          </div>
        </div>
      </section>

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
    </div>
  );
}
