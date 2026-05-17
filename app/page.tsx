'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Mail, Phone, MapPin, Calendar, Clock, ChevronDown, Award, Heart, Users, BookOpen, TrendingUp, Star, Download, Target, Globe, Zap } from 'lucide-react';

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
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [donationEligibility, setDonationEligibility] = useState(null);
  const [eligibilityResult, setEligibilityResult] = useState(null);
  const [activeNewsIdx, setActiveNewsIdx] = useState(0);
  const [activeMemoryIdx, setActiveMemoryIdx] = useState(0);

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

  // Rotating quotes
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

  const quotes = [
    { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
    { text: "The future of a nation is created in its classrooms.", author: "Pandit Jawaharlal Nehru" },
    { text: "Every child deserves a chance to dream, learn, and soar.", author: "Niharika Foundation" },
    { text: "Quality education is the foundation of prosperous society.", author: "Dr. Radhakrishnan" },
  ];

  const gallerySlides = [
    { img: '/odisha-temple.jpg', title: 'Heritage & Culture' },
    { img: '/odisha-village.jpg', title: 'Rural Community' },
    { img: '/odisha-students.jpg', title: 'Education First' },
    { img: '/women-empowerment.jpg', title: 'Women Empowerment' },
    { img: '/health-awareness.jpg', title: 'Healthcare Access' },
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

  const studentStories = [
    { name: 'Priya Sharma', class: '12th', dream: 'Doctor', story: 'With scholarship support, I can now focus on medical entrance exams' },
    { name: 'Rajesh Kumar', class: '10th', dream: 'Engineer', story: 'Niharika Foundation gave me the confidence to pursue my dreams' },
    { name: 'Anjali Patel', class: '11th', dream: 'Entrepreneur', story: 'Skill training opened doors I never thought possible' },
    { name: 'Rohan Singh', class: '10th', dream: 'Teacher', story: 'I want to give back to my community through education' },
  ];

  const parentTestimonials = [
    { name: 'Mrs. Geeta Mahapatra', text: 'This foundation changed my daughter\'s life. We are forever grateful.' },
    { name: 'Mr. Ram Das', text: 'Quality education support with dignity - that\'s Niharika for you.' },
    { name: 'Mrs. Sunita Nayak', text: 'Our son got scholarship when we needed it most. Blessed!' },
  ];

  const volunteerExperiences = [
    { name: 'Teaching Volunteer', desc: 'Mentor students in core subjects', badge: '🎓 Education Warrior' },
    { name: 'Outreach Volunteer', desc: 'Conduct awareness programs', badge: '🌍 Community Hero' },
    { name: 'Event Volunteer', desc: 'Organize scholarship ceremonies', badge: '🎉 Event Master' },
  ];

  const donationImpacts = [
    { amount: '₹500', impact: '📚 Books for 1 child' },
    { amount: '₹2,000', impact: '✏️ School supplies kit' },
    { amount: '₹5,000', impact: '🎓 Scholarship support' },
    { amount: '₹10,000', impact: '📖 Full semester support' },
  ];

  const faqs = [
    { q: 'Who is eligible for Medha Samman?', a: 'Students securing 90%+ marks in 10th Board Exam 2026 (CBSE, BSE Odisha, ICSE) are eligible.' },
    { q: 'How do I register?', a: 'Click Register, fill details (name, village, marks, class, referral), submit via WhatsApp. Our team confirms.' },
    { q: 'When is the ceremony?', a: '24-05-2026 (Sunday) | 10:00 AM-9:00 PM | Gandhi Smruti Bhawan, Baleshwar, Odisha' },
    { q: 'What scholarship amount?', a: 'Merit scholarships: ₹10,000-₹25,000 based on marks and financial need.' },
    { q: 'Can I volunteer?', a: 'Yes! Contact us via WhatsApp with your details and interest area.' },
    { q: 'How transparent is the NGO?', a: '80G registered, 100% transparent spending, annual reports available.' },
  ];

  const educationalNews = [
    { title: 'New Scholarship Batch 2026 Open', date: 'May 17, 2026', desc: 'Registration now open for merit scholars' },
    { title: 'Women Empowerment Drive', date: 'May 15, 2026', desc: 'Skills training for 200+ rural girls' },
    { title: 'Volunteer Week Celebration', date: 'May 12, 2026', desc: 'Join our community outreach program' },
    { title: 'Educational Webinar Series', date: 'May 10, 2026', desc: 'Expert guidance on career paths' },
  ];

  const memories = [
    { year: '2015', event: 'Foundation Establishment', desc: 'Rutuick Jee founded Niharika with vision' },
    { year: '2018', event: 'First 100 Scholarships', desc: 'Empowering first batch of students' },
    { year: '2021', event: 'Medha Samman Started', desc: 'Annual recognition ceremony begins' },
    { year: '2024', event: '5000+ Students Supported', desc: 'Reaching across 50 villages' },
    { year: '2026', event: 'Medha Samman Excellence', desc: 'Premium scholarship initiative' },
  ];

  const schools = [
    'Government Baleshwar School',
    'Delhi Public School Odisha',
    'St. Xavier\'s Academy Baleshwar',
    'Kendriya Vidyalaya Baleshwar',
  ];

  const mediaCoverage = [
    { title: 'Odisha Education Minister Praises Niharika', source: 'Odisha Times' },
    { title: 'NGO transforms 50 villages', source: 'The Hindu' },
    { title: 'Scholarship Impact Study 2025', source: 'Times of India' },
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
          {['Home', 'About', 'Medha Samman', 'Programs', 'Impact', 'Team', 'Donate'].map((item) => (
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
          {['Home', 'About', 'Medha Samman', 'Programs', 'Impact', 'Team'].map((item) => (
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
        <div className="text-center py-10">
          <div className="mb-4 flex justify-center animate-bounce" style={{animationDuration: '2.5s'}}>
            <img src="/niharika-logo.png" alt="Niharika" className="h-32 w-32 drop-shadow-xl" />
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-red-700 mb-1 leading-tight">
            NIHARIKA FOUNDATION
          </h1>
          <p className="text-base md:text-lg text-gray-800 font-bold mb-1">
            Educational Charitable Trust & Research Center
          </p>
          <p className="text-xs md:text-sm text-gray-700 mb-3 font-semibold">
            Medha Samman Committee, Baleshwar, Odisha
          </p>
          <p className="text-xs text-gray-800 font-bold italic mb-6 text-red-600">
            "Honoring Excellence • Encouraging Dreams • Building Future"
          </p>

          <div className="flex gap-2 justify-center flex-wrap mb-6">
            <button onClick={() => setSelectedForm('medha-samman')} 
              className="px-5 py-2 bg-red-600 text-white rounded-lg font-bold text-xs hover:bg-red-700 transition transform hover:scale-105 shadow-lg">
              📋 Register
            </button>
            <a href={whatsappLink('I want to know more about Niharika Foundation')} 
              className="px-5 py-2 bg-green-600 text-white rounded-lg font-bold text-xs hover:bg-green-700 transition transform hover:scale-105 shadow-lg">
              💬 Contact
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {impactStats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-lg p-3 shadow-md border-t-4 border-red-600">
                <div className="text-xl mb-1">{stat.icon}</div>
                <p className="text-lg font-black text-red-600">{stat.value}</p>
                <p className="text-xs font-bold text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // ===== COMPACT COUNTDOWN =====
  const countdownSection = (
    <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <div>
            <h3 className="text-sm font-black">🎓 Next Scholarship in:</h3>
            <p className="text-xs text-green-100">Limited slots available</p>
          </div>

          <div className="grid grid-cols-4 gap-1">
            <div className="bg-white rounded p-1.5 text-center min-w-12">
              <div className="text-base font-black text-green-700">{String(countdownDays).padStart(2, '0')}</div>
              <div className="text-xs font-bold text-green-600">D</div>
            </div>
            <div className="bg-white rounded p-1.5 text-center min-w-12">
              <div className="text-base font-black text-green-700">{String(countdownHours).padStart(2, '0')}</div>
              <div className="text-xs font-bold text-green-600">H</div>
            </div>
            <div className="bg-white rounded p-1.5 text-center min-w-12">
              <div className="text-base font-black text-green-700">{String(countdownMinutes).padStart(2, '0')}</div>
              <div className="text-xs font-bold text-green-600">M</div>
            </div>
            <div className="bg-white rounded p-1.5 text-center min-w-12">
              <div className="text-base font-black text-green-700">{String(countdownSeconds).padStart(2, '0')}</div>
              <div className="text-xs font-bold text-green-600">S</div>
            </div>
          </div>

          <button onClick={() => setSelectedForm('medha-samman')} 
            className="px-3 py-1.5 bg-white text-green-700 rounded-full font-bold text-xs hover:bg-gray-100 transition whitespace-nowrap">
            Register
          </button>
        </div>
      </div>
    </section>
  );

  // ===== MOTIVATIONAL QUOTES =====
  const quotesSection = (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-sm italic font-semibold mb-1">"{quotes[quoteIndex].text}"</p>
          <p className="text-xs text-blue-100">— {quotes[quoteIndex].author}</p>
        </div>
      </div>
    </section>
  );

  // ===== FLOATING COMMUNITY SUPPORT BAR =====
  const communityBar = (
    <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-2 px-4 text-xs">
      <div className="max-w-6xl mx-auto flex justify-around text-center">
        <div><span className="font-black text-lg">🎓</span> <div className="text-xs">500+ Active Volunteers</div></div>
        <div><span className="font-black text-lg">💰</span> <div className="text-xs">30+ Scholarships Open</div></div>
        <div><span className="font-black text-lg">🎉</span> <div className="text-xs">Next Event: 24 May</div></div>
        <div><span className="font-black text-lg">❤️</span> <div className="text-xs">₹50L+ Distributed</div></div>
      </div>
    </section>
  );

  // ===== WHY NIHARIKA SECTION =====
  const storySection = (
    <section id="about" className="py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-red-700 mb-1 text-center">Why Niharika Exists</h2>
        <p className="text-center text-gray-700 text-xs mb-8 font-semibold">Building dreams through quality education in Odisha</p>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-3">
            <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
              <h3 className="font-black text-gray-800 text-sm mb-1">🎯 Our Mission</h3>
              <p className="text-xs text-gray-700 leading-relaxed">Provide quality education and scholarship support to underprivileged students across Odisha.</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <h3 className="font-black text-gray-800 text-sm mb-1">🌟 Our Vision</h3>
              <p className="text-xs text-gray-700 leading-relaxed">A world where every individual has access to education and power to create positive change.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
              <h3 className="font-black text-gray-800 text-sm mb-1">💎 Our Values</h3>
              <p className="text-xs text-gray-700 leading-relaxed">Integrity, Empathy, Excellence, Inclusion - Community-led & transparent.</p>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
              <h3 className="font-black text-gray-800 text-sm mb-1">🚀 Our Focus</h3>
              <p className="text-xs text-gray-700 leading-relaxed">Education • Scholarships • Women Empowerment • Healthcare • Skills • Youth Support</p>
            </div>
          </div>

          <img src="/rutuick-jee.jpg" alt="Rutuick Jee" className="rounded-xl shadow-lg h-80 w-full object-cover" />
        </div>
      </div>
    </section>
  );

  // ===== MEDHA SAMMAN SECTION =====
  const medhaSammanSection = (
    <section id="medha-samman" className="py-10 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-1 text-red-700">✨ Medha Samman 2026</h2>
        <p className="text-center text-gray-700 text-xs mb-8 font-bold">Excellence Recognition & Scholarship Ceremony</p>

        <div className="grid md:grid-cols-2 gap-6 items-center mb-8">
          <img src="/medha-samman-poster.jpg" alt="Medha Samman" className="rounded-xl shadow-lg w-full h-72 object-cover" />

          <div className="space-y-2.5">
            <div className="flex items-start gap-2 bg-white border-l-4 border-red-600 p-3 rounded shadow-md">
              <MapPin className="w-4 h-4 text-red-700 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-800 text-xs">📍 Location</h3>
                <p className="text-xs text-gray-700">Gandhi Smruti Bhawan, Baleshwar</p>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-white border-l-4 border-blue-600 p-3 rounded shadow-md">
              <Calendar className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-800 text-xs">📅 Date & Time</h3>
                <p className="text-xs text-gray-700">24-05-2026 (Sun) • 10 AM-9 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-white border-l-4 border-green-600 p-3 rounded shadow-md">
              <Phone className="w-4 h-4 text-green-700 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-800 text-xs">📞 Contact</h3>
                <p className="text-xs text-gray-700">9337871450 | 8249860766</p>
              </div>
            </div>

            <button onClick={() => setSelectedForm('medha-samman')} 
              className="w-full px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-black text-xs hover:shadow-lg transition transform hover:scale-105">
              📝 Register & Celebrate
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-3">
          {scholarships.map((sch, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${sch.color} text-white rounded-lg p-3 shadow-lg hover:shadow-xl transition transform hover:scale-105`}>
              <div className="text-xl mb-1">{sch.icon}</div>
              <h3 className="font-black text-xs mb-1">{sch.title}</h3>
              <p className="text-base font-black">{sch.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ===== INTERACTIVE MEDAL SHOWCASE =====
  const medalSection = (
    <section className="py-10 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-8 text-red-700">🏅 Medha Samman Achievement Medals</h2>
        <div className="flex justify-center mb-8">
          <div className="text-center">
            <div className="text-8xl animate-spin" style={{animationDuration: '3s', animationDirection: 'reverse'}}>🥇</div>
            <p className="text-sm font-bold text-gray-800 mt-3">Premium Recognition</p>
            <p className="text-xs text-gray-700">Awarded to Top Performers</p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md border-2 border-amber-400 text-center">
          <p className="text-sm text-gray-800 font-semibold">Certificate + Medal + Scholarship up to ₹25,000</p>
          <p className="text-xs text-gray-700 mt-2">Celebrating Academic Excellence in 10th Board Exam 2026</p>
        </div>
      </div>
    </section>
  );

  // ===== STUDENT DREAMS SECTION =====
  const studentDreamsSection = (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-8 text-red-700">💭 Future Dreams of Our Students</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {studentStories.map((student, idx) => (
            <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-600 p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <p className="font-black text-gray-800 text-sm">{student.name} - Class {student.class}</p>
              <p className="text-xs text-gray-700 mt-1"><span className="font-bold">Dream:</span> {student.dream}</p>
              <p className="text-xs text-gray-700 mt-2 italic">"{student.story}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ===== PARENT TESTIMONIALS =====
  const parentSection = (
    <section className="py-10 px-4 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-8 text-red-700">❤️ Message From Parents</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {parentTestimonials.map((parent, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 shadow-md border-t-4 border-pink-600 hover:shadow-lg transition">
              <p className="text-xs font-bold text-gray-800 mb-2">{parent.name}</p>
              <p className="text-xs text-gray-700 italic">"{parent.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ===== VOLUNTEER EXPERIENCE =====
  const volunteerSection = (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-2 text-red-700">🤝 Volunteer Experience</h2>
        <p className="text-center text-gray-700 text-xs mb-8 font-semibold">Join our community of dedicated volunteers</p>
        <div className="grid md:grid-cols-3 gap-4">
          {volunteerExperiences.map((exp, idx) => (
            <div key={idx} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 shadow-md border-l-4 border-green-600 hover:shadow-lg transition">
              <p className="text-sm font-black text-gray-800 mb-2">{exp.name}</p>
              <p className="text-xs text-gray-700 mb-3">{exp.desc}</p>
              <div className="text-center text-2xl">{exp.badge.split(' ')[0]}</div>
              <p className="text-xs font-bold text-gray-800 text-center mt-2">{exp.badge.split(' ')[1]}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <a href={whatsappLink('I want to volunteer with Niharika Foundation')} className="px-6 py-2 bg-green-600 text-white rounded-lg font-bold text-sm hover:bg-green-700">
            Join as Volunteer
          </a>
        </div>
      </div>
    </section>
  );

  // ===== DONATION IMPACT CALCULATOR =====
  const donationSection = (
    <section className="py-10 px-4 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-8 text-red-700">💝 Your Donation Impact</h2>
        <div className="grid md:grid-cols-4 gap-3">
          {donationImpacts.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 shadow-md border-t-4 border-red-600 text-center hover:shadow-lg transition">
              <p className="text-xl font-black text-red-600 mb-2">{item.amount}</p>
              <p className="text-xs text-gray-800 font-semibold">{item.impact}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <a href={whatsappLink('I want to donate to Niharika Foundation')} className="px-6 py-2 bg-red-600 text-white rounded-lg font-bold text-sm hover:bg-red-700">
            Donate Now
          </a>
        </div>
      </div>
    </section>
  );

  // ===== WHERE DONATION GOES =====
  const donationBreakdown = (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-8 text-red-700">📊 Where Your Donation Goes</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            {[
              { icon: '📚', name: 'Educational Support', percent: '45%' },
              { icon: '👧', name: 'Girl Child Programs', percent: '20%' },
              { icon: '💼', name: 'Skill Development', percent: '15%' },
              { icon: '❤️', name: 'Healthcare & Care', percent: '10%' },
              { icon: '📋', name: 'Admin & Operations', percent: '10%' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                <div className="text-xl">{item.icon}</div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-gray-800">{item.name}</p>
                  <div className="bg-gray-200 rounded-full h-2 mt-1">
                    <div className="bg-red-600 h-full rounded-full" style={{width: item.percent}}></div>
                  </div>
                </div>
                <p className="text-xs font-black text-red-600">{item.percent}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-lg p-6 flex flex-col justify-center">
            <h3 className="text-sm font-black text-gray-800 mb-3">Transparency Commitment</h3>
            <ul className="space-y-2">
              <li className="text-xs text-gray-800">✅ 80G Registered NGO</li>
              <li className="text-xs text-gray-800">✅ 100% Transparent Spending</li>
              <li className="text-xs text-gray-800">✅ Annual Reports Available</li>
              <li className="text-xs text-gray-800">✅ Third-party Audited</li>
              <li className="text-xs text-gray-800">✅ Community Accountability</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  // ===== SCHOLARSHIP ELIGIBILITY CHECKER =====
  const eligibilitySection = (
    <section className="py-10 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-8 text-red-700">🎓 Scholarship Eligibility Checker</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg p-6 shadow-lg">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-2">Class</label>
              <select value={donationEligibility?.class || ''} onChange={(e) => setDonationEligibility({...donationEligibility, class: e.target.value})}
                className="w-full p-2 border-2 border-gray-300 rounded text-xs focus:border-red-600">
                <option>Select Class</option>
                <option>10th</option>
                <option>11th</option>
                <option>12th</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-2">10th Board Marks (%)</label>
              <input type="number" placeholder="Enter marks" value={donationEligibility?.marks || ''} onChange={(e) => setDonationEligibility({...donationEligibility, marks: e.target.value})}
                className="w-full p-2 border-2 border-gray-300 rounded text-xs focus:border-red-600" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-2">District (Odisha)</label>
              <select value={donationEligibility?.district || ''} onChange={(e) => setDonationEligibility({...donationEligibility, district: e.target.value})}
                className="w-full p-2 border-2 border-gray-300 rounded text-xs focus:border-red-600">
                <option>Select District</option>
                <option>Baleshwar</option>
                <option>Bhadrak</option>
                <option>Cuttack</option>
                <option>Odisha (Other)</option>
              </select>
            </div>
            <button onClick={() => {
              const marks = parseInt(donationEligibility?.marks) || 0;
              if (marks >= 90) {
                setEligibilityResult('✅ Congratulations! You are eligible for Merit Excellence Award (₹25,000)');
              } else if (marks >= 85) {
                setEligibilityResult('✅ You may qualify for Need-Based Support (₹15,000)');
              } else if (marks >= 80) {
                setEligibilityResult('⚠️ You may be considered based on additional criteria');
              } else {
                setEligibilityResult('❌ You need 80%+ to be considered for scholarships');
              }
            }} className="w-full py-2 bg-red-600 text-white rounded-lg font-bold text-xs hover:bg-red-700 transition">
              Check Eligibility
            </button>
            {eligibilityResult && (
              <div className={`p-4 rounded-lg text-sm font-semibold ${eligibilityResult.includes('✅') ? 'bg-green-100 text-green-800' : eligibilityResult.includes('⚠️') ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                {eligibilityResult}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );

  // ===== GALLERY SECTION =====
  const gallerySection = (
    <section className="py-10 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-6 text-white">📸 Documentary Gallery: Our Work in Odisha</h2>

        <div className="relative bg-gray-800 rounded-xl overflow-hidden shadow-2xl mb-4">
          <img src={gallerySlides[autoSlideIndex].img} alt={gallerySlides[autoSlideIndex].title} className="w-full h-64 md:h-80 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-4">
            <h3 className="text-2xl font-black text-white">{gallerySlides[autoSlideIndex].title}</h3>
          </div>

          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5">
            {gallerySlides.map((_, idx) => (
              <button key={idx} onClick={() => setAutoSlideIndex(idx)}
                className={`rounded-full transition ${idx === autoSlideIndex ? 'bg-white w-6 h-2' : 'bg-white bg-opacity-40 w-2 h-2'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // ===== TEAM SECTION =====
  const teamSection = (
    <section id="team" className="py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-1 text-red-700">👥 Our Committee</h2>
        <p className="text-center text-gray-700 text-xs mb-6 font-semibold">Dedicated leaders driving the mission</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {committeeMembers.map((member, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md border-t-4 border-red-600 hover:shadow-lg transition cursor-pointer"
              onClick={() => setExpandedTeamIdx(expandedTeamIdx === idx ? null : idx)}>
              <div className="p-3 text-center">
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-black text-sm">
                  {member.initials}
                </div>
                <h3 className="font-bold text-gray-800 text-xs">{member.name}</h3>
                <p className="text-xs text-red-700 font-bold uppercase mt-1">{member.role}</p>
                {expandedTeamIdx === idx && (
                  <div className="mt-2 pt-2 border-t border-gray-200">
                    <p className="text-xs text-gray-700 font-semibold mb-2">{member.desc}</p>
                    <a href={`tel:${member.phone}`} className="text-xs text-green-600 font-bold hover:underline">{member.phone}</a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ===== OUR JOURNEY TIMELINE =====
  const journeySection = (
    <section className="py-10 px-4 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-8 text-red-700">🚀 Our Journey</h2>
        <div className="space-y-3">
          {memories.map((mem, idx) => (
            <div key={idx} className="flex gap-4 items-center">
              <div className="flex-shrink-0 w-20 bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-lg p-3 text-center font-black text-sm">
                {mem.year}
              </div>
              <div className="flex-1 bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-600 hover:shadow-lg transition">
                <p className="font-black text-gray-800 text-sm">{mem.event}</p>
                <p className="text-xs text-gray-700 mt-1">{mem.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ===== DIGITAL MEMORIES SECTION =====
  const memoriesGallerySection = (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-8 text-red-700">📷 Digital Memories Archive</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'Awards & Recognition', icon: '🏆' },
            { title: 'Event Ceremonies', icon: '🎉' },
            { title: 'Volunteer Moments', icon: '🤝' },
            { title: 'Community Outreach', icon: '🌍' },
          ].map((item, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-3">{item.icon}</div>
              <p className="font-bold text-gray-800 text-sm">{item.title}</p>
              <p className="text-xs text-gray-700 mt-2">Legacy moments from our educational journey</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ===== SCHOOL PARTNERSHIP SHOWCASE =====
  const partnershipsSection = (
    <section className="py-10 px-4 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-8 text-red-700">🏫 Partner Schools & Institutions</h2>
        <div className="grid md:grid-cols-4 gap-3">
          {schools.map((school, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 shadow-md border-t-4 border-blue-600 text-center hover:shadow-lg transition">
              <p className="font-bold text-gray-800 text-xs">{school}</p>
              <p className="text-xs text-gray-700 mt-2">Educational Partner</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ===== MEDIA COVERAGE =====
  const mediaSection = (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-8 text-red-700">📰 Media Recognition</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {mediaCoverage.map((media, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-4 shadow-md border-l-4 border-red-600 hover:shadow-lg transition">
              <p className="font-bold text-gray-800 text-xs">{media.title}</p>
              <p className="text-xs text-gray-700 mt-2">Source: {media.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ===== EDUCATIONAL NEWS =====
  const newsSection = (
    <section className="py-10 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-8 text-red-700">📢 Latest Updates & News</h2>
        <div className="space-y-3">
          {educationalNews.map((news, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 shadow-md border-l-4 border-orange-600 hover:shadow-lg transition">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-gray-800 text-sm">{news.title}</p>
                  <p className="text-xs text-gray-700 mt-1">{news.desc}</p>
                </div>
                <p className="text-xs text-gray-700 font-semibold whitespace-nowrap ml-4">{news.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ===== WHY DONATE SECTION =====
  const whyDonateSection = (
    <section className="py-10 px-4 bg-gradient-to-br from-red-50 to-rose-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-8 text-red-700">❓ Why Donate to Niharika?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-red-600 hover:shadow-lg transition">
            <h3 className="font-bold text-gray-800 text-sm mb-2">🎓 Educational Impact</h3>
            <p className="text-xs text-gray-700">Every rupee directly supports student scholarships, books, and quality education in Odisha.</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-red-600 hover:shadow-lg transition">
            <h3 className="font-bold text-gray-800 text-sm mb-2">👩‍👧 Community Trust</h3>
            <p className="text-xs text-gray-700">5000+ empowered students, 50 villages reached, 100% transparent operations.</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-red-600 hover:shadow-lg transition">
            <h3 className="font-bold text-gray-800 text-sm mb-2">📋 Transparency</h3>
            <p className="text-xs text-gray-700">80G registered NGO with annual audits, third-party verification, and community accountability.</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-red-600 hover:shadow-lg transition">
            <h3 className="font-bold text-gray-800 text-sm mb-2">🚀 Real Futures</h3>
            <p className="text-xs text-gray-700">Your donation builds careers, empowers women, supports healthcare, and creates lasting change.</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <a href={whatsappLink('I want to donate to Niharika Foundation')} className="px-6 py-2 bg-red-600 text-white rounded-lg font-bold text-sm hover:bg-red-700">
            Start Donating Today
          </a>
        </div>
      </div>
    </section>
  );

  // ===== FAQ SECTION =====
  const faqSection = (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-8 text-red-700">❓ Frequently Asked Questions</h2>
        <div className="space-y-3 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border-2 border-gray-300 rounded-lg shadow-md hover:shadow-lg transition">
              <button onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50 transition">
                <p className="font-bold text-gray-800 text-sm text-left">{faq.q}</p>
                <ChevronDown className={`w-4 h-4 text-red-600 transition transform ${expandedFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {expandedFaq === idx && (
                <div className="px-4 pb-3 border-t-2 border-gray-200">
                  <p className="text-xs text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ===== SPONSOR A DREAM SECTION =====
  const sponsorSection = (
    <section className="py-10 px-4 bg-gradient-to-br from-pink-50 to-red-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-8 text-red-700">💎 Sponsor a Dream</h2>
        <p className="text-center text-gray-700 text-sm mb-6 font-semibold">Support a student's educational journey with targeted sponsorship</p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: 'Merit Scholar', cost: '₹5,000/month', desc: 'Support top performer\'s tuition', color: 'from-yellow-400 to-yellow-600' },
            { title: 'Girl Achiever', cost: '₹4,000/month', desc: 'Empower girl child education', color: 'from-pink-400 to-pink-600' },
            { title: 'Skill Master', cost: '₹3,000/month', desc: 'Fund vocational training', color: 'from-purple-400 to-purple-600' },
          ].map((sponsor, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${sponsor.color} text-white rounded-lg p-4 shadow-lg hover:shadow-xl transition transform hover:scale-105`}>
              <p className="font-black text-sm mb-2">{sponsor.title}</p>
              <p className="text-lg font-black mb-2">{sponsor.cost}</p>
              <p className="text-xs mb-3">{sponsor.desc}</p>
              <a href={whatsappLink(`I want to sponsor a student - ${sponsor.title}`)} className="text-xs font-bold bg-white bg-opacity-20 px-3 py-1.5 rounded-full hover:bg-opacity-30 inline-block">
                Sponsor Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ===== NGO VALUES SECTION =====
  const valuesSection = (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-8 text-red-700">💎 Our Core Values</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: '🤝', name: 'Integrity', desc: 'Every rupee, every effort, accounted for with transparency' },
            { icon: '❤️', name: 'Empathy', desc: 'We listen first. Solutions come from community itself' },
            { icon: '⭐', name: 'Excellence', desc: 'Quality of impact over quantity of activities' },
            { icon: '🌍', name: 'Inclusion', desc: 'No child too remote to reach. Every voice matters' },
          ].map((value, idx) => (
            <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 shadow-md border-l-4 border-blue-600 hover:shadow-lg transition">
              <p className="text-2xl mb-2">{value.icon}</p>
              <p className="font-bold text-gray-800 text-sm mb-2">{value.name}</p>
              <p className="text-xs text-gray-700">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ===== FOOTER =====
  const footer = (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          <div>
            <h3 className="font-black text-sm mb-3">About</h3>
            <ul className="space-y-1 text-xs">
              <li><a href="#about" className="hover:text-red-400">Our Mission</a></li>
              <li><a href="#team" className="hover:text-red-400">Team</a></li>
              <li><a href="#" className="hover:text-red-400">Transparency</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-black text-sm mb-3">Programs</h3>
            <ul className="space-y-1 text-xs">
              <li><a href="#medha-samman" className="hover:text-red-400">Medha Samman</a></li>
              <li><a href="#" className="hover:text-red-400">Scholarships</a></li>
              <li><a href="#" className="hover:text-red-400">Skills Training</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-black text-sm mb-3">Get Involved</h3>
            <ul className="space-y-1 text-xs">
              <li><a href={whatsappLink('I want to donate')} className="hover:text-red-400">Donate</a></li>
              <li><a href={whatsappLink('I want to volunteer')} className="hover:text-red-400">Volunteer</a></li>
              <li><a href={whatsappLink('I want to partner')} className="hover:text-red-400">Partner</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-black text-sm mb-3">Contact</h3>
            <div className="text-xs space-y-1">
              <p>📍 Baleshwar, Odisha</p>
              <p>📧 niharikafoundation.org@gmail.com</p>
              <p>📞 9337871450</p>
              <p>💬 WhatsApp: 8763979798</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-xs">
          <p className="mb-2 font-semibold">Together for Education • Together for a Better Future</p>
          <p className="text-gray-400">© 2026 Niharika Foundation. 80G Registered NGO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  // ===== REGISTRATION MODAL =====
  const registrationModal = selectedForm && (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
        <h2 className="text-2xl font-black text-red-700 mb-4">📋 Register for Medha Samman</h2>
        <form onSubmit={handleFormSubmit} className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1">Student Name *</label>
            <input type="text" name="name" value={formData.name} onChange={handleFormChange} required
              placeholder="Full name" className="w-full p-2 border-2 border-gray-300 rounded text-xs focus:border-red-600 focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1">Village/District *</label>
            <input type="text" name="village" value={formData.village} onChange={handleFormChange} required
              placeholder="Your village" className="w-full p-2 border-2 border-gray-300 rounded text-xs focus:border-red-600 focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1">10th Board Marks (Optional)</label>
            <input type="number" name="marks" value={formData.marks} onChange={handleFormChange} placeholder="e.g., 95"
              className="w-full p-2 border-2 border-gray-300 rounded text-xs focus:border-red-600 focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1">Current Class *</label>
            <select name="class" value={formData.class} onChange={handleFormChange} required
              className="w-full p-2 border-2 border-gray-300 rounded text-xs focus:border-red-600 focus:outline-none">
              <option>Select Class</option>
              <option>10th</option>
              <option>11th</option>
              <option>12th</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1">Referral Code (Optional)</label>
            <input type="text" name="referral" value={formData.referral} onChange={handleFormChange} placeholder="If recommended"
              className="w-full p-2 border-2 border-gray-300 rounded text-xs focus:border-red-600 focus:outline-none" />
          </div>
          <button type="submit" className="w-full py-2.5 bg-green-600 text-white rounded-lg font-bold text-sm hover:bg-green-700 transition">
            📤 Send via WhatsApp
          </button>
          <button type="button" onClick={() => setSelectedForm(null)} className="w-full py-2.5 bg-gray-300 text-gray-800 rounded-lg font-bold text-sm hover:bg-gray-400 transition">
            Close
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-white">
      {navbar}
      {heroSection}
      {countdownSection}
      {quotesSection}
      {communityBar}
      {storySection}
      {medhaSammanSection}
      {medalSection}
      {studentDreamsSection}
      {parentSection}
      {volunteerSection}
      {donationSection}
      {donationBreakdown}
      {eligibilitySection}
      {gallerySection}
      {journeySection}
      {memoriesGallerySection}
      {partnershipsSection}
      {mediaSection}
      {newsSection}
      {whyDonateSection}
      {faqSection}
      {sponsorSection}
      {valuesSection}
      {teamSection}
      {footer}
      {registrationModal}
    </div>
  );
}
