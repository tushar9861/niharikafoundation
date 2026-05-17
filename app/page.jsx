'use client';

import React, { useState, useEffect } from 'react';

const NiharikaSite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countdown, setCountdown] = useState({ days: 7, hours: 0, minutes: 0, seconds: 0 });
  const [activeTab, setActiveTab] = useState('home');
  const [gallerySlide, setGallerySlide] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [formType, setFormType] = useState(null);
  const [formData, setFormData] = useState({});
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [newsIdx, setNewsIdx] = useState(0);

  // Countdown Timer
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const next = new Date(now);
      next.setDate(next.getDate() + 7);
      next.setHours(0, 0, 0, 0);
      const diff = next - now;
      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 60000) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        });
      }
    };
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  // Auto-slide gallery
  useEffect(() => {
    const slideTimer = setInterval(() => setGallerySlide(prev => (prev + 1) % 5), 4000);
    return () => clearInterval(slideTimer);
  }, []);

  // Auto-slide testimonials
  useEffect(() => {
    const testTimer = setInterval(() => setTestimonialIdx(prev => (prev + 1) % 3), 5000);
    return () => clearInterval(testTimer);
  }, []);

  // Auto-rotate news
  useEffect(() => {
    const newsTimer = setInterval(() => setNewsIdx(prev => (prev + 1) % 4), 6000);
    return () => clearInterval(newsTimer);
  }, []);

  const sendToWhatsApp = (formType, data) => {
    let message = '';
    const phone = '7978191554';
    
    if (formType === 'contact') {
      message = `*Contact Inquiry*\nName: ${data.name}\nPhone: ${data.phone}\nCity: ${data.city}\nMessage: ${data.message}`;
    } else if (formType === 'volunteer') {
      message = `*Volunteer Registration*\nName: ${data.name}\nAge: ${data.age}\nOccupation: ${data.occupation}\nPhone: ${data.phone}\nWhy: ${data.why}`;
    } else if (formType === 'donation') {
      message = `*Donation Inquiry*\nName: ${data.name}\nType: ${data.type}\nPhone: ${data.phone}\nMessage: ${data.message}`;
    } else if (formType === 'scholarship') {
      message = `*Scholarship Inquiry*\nStudent: ${data.student}\nClass: ${data.class}\nSchool: ${data.school}\nDistrict: ${data.district}\nPhone: ${data.phone}`;
    } else if (formType === 'csr') {
      message = `*CSR/Partnership Inquiry*\nOrg: ${data.org}\nContact: ${data.contact}\nPhone: ${data.phone}\nEmail: ${data.email}\nPurpose: ${data.purpose}`;
    }
    
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleFormSubmit = (e, type) => {
    e.preventDefault();
    sendToWhatsApp(type, formData);
    setFormData({});
    setFormType(null);
  };

  const programs = [
    { title: 'Scholarship Program', desc: 'Annual scholarships for deserving students', impact: '5000+ Students' },
    { title: 'Rural Education', desc: 'Quality education in rural communities', impact: '50+ Villages' },
    { title: 'Medha Samman 2026', desc: 'Premium felicitation for toppers', impact: '₹50L+ Awards' },
    { title: 'Women Empowerment', desc: 'Skills and support for girls', impact: '2000+ Women' },
    { title: 'Healthcare Awareness', desc: 'Health camps and awareness drives', impact: '10,000+ Lives' },
    { title: 'Skill Development', desc: 'Technical and soft skills training', impact: '3000+ Trained' }
  ];

  const teamMembers = [
    { name: 'Rutuick Jee', title: 'Chairman & Founder', phone: '9338330554' },
    { name: 'Muralidhar Nayak', title: 'President', phone: '9337871450' },
    { name: 'Ardhendu Sekhar Das', title: 'Vice-President', phone: 'Contact' },
    { name: 'Subham Sai Mohapatra', title: 'Vice-President', phone: 'Contact' },
    { name: 'Debadutta Das', title: 'General Secretary', phone: '9337288220' },
    { name: 'Shyamsundar Mohanty', title: 'Secretary', phone: 'Contact' },
    { name: 'Bibhudutta Parida', title: 'Asst. Secretary', phone: 'Contact' },
    { name: 'Priyadarshini Das', title: 'Cultural Secretary', phone: 'Contact' }
  ];

  const faqs = [
    { q: 'How do I apply for scholarship?', a: 'Visit our Scholarship Enquiry form or contact us via WhatsApp with your details.' },
    { q: 'What is Medha Samman?', a: 'Medha Samman is our prestigious award program for students scoring 90%+ in 10th Board exams.' },
    { q: 'How can I volunteer?', a: 'Use the Volunteer Registration form to express your interest. We\'ll connect with you shortly.' },
    { q: 'Where are you located?', a: 'Balasore/Baleshwar, Odisha. We work across rural and urban areas.' },
    { q: 'Is donation tax deductible?', a: 'Yes, we are an 80G registered charitable trust.' }
  ];

  const stories = [
    { name: 'Priya Kumar', role: 'Medical Student', text: 'Niharika\'s scholarship enabled me to pursue my dream of becoming a doctor.' },
    { name: 'Rahul Singh', role: 'IT Professional', text: 'The skill training transformed my career and gave me confidence.' },
    { name: 'Anjali Patel', role: 'Women Entrepreneur', text: 'From village student to business owner - Niharika believed in me.' }
  ];

  const news = [
    'Medha Samman 2026 Registration Open - Top 500 Students Eligible',
    'New Scholarship Scheme Launched - 1000+ Positions Available',
    'Healthcare Camp in 15 Districts - Free Medical Checkups',
    'Women Empowerment Program Expands - 500+ Seats Available'
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50 h-16 flex items-center px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/niharika-logo.png" alt="Niharika" className="h-10 w-10" />
            <span className="text-red-600 font-bold text-lg">NIHARIKA</span>
          </div>
          
          <div className="hidden md:flex gap-6 text-sm font-semibold">
            <a href="#home" className="text-gray-700 hover:text-red-600">Home</a>
            <a href="#about" className="text-gray-700 hover:text-red-600">About</a>
            <a href="#programs" className="text-gray-700 hover:text-red-600">Programs</a>
            <a href="#medha" className="text-gray-700 hover:text-red-600">Medha Samman</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600">Contact</a>
          </div>

          <button onClick={() => setFormType('donation')} className="hidden md:block bg-red-600 text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition">
            Donate Now
          </button>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-700 text-2xl">
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-t flex flex-col gap-2 p-4 md:hidden">
            <a href="#home" className="text-gray-700 font-semibold">Home</a>
            <a href="#about" className="text-gray-700 font-semibold">About</a>
            <a href="#programs" className="text-gray-700 font-semibold">Programs</a>
            <a href="#medha" className="text-gray-700 font-semibold">Medha Samman</a>
            <a href="#contact" className="text-gray-700 font-semibold">Contact</a>
            <button onClick={() => { setFormType('donation'); setMobileMenuOpen(false); }} className="bg-red-600 text-white px-4 py-2 rounded font-bold w-full">Donate</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-8 bg-gradient-to-r from-red-600 to-red-700 text-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                Empowering Education & Human Potential Across Odisha
              </h1>
              <p className="text-lg md:text-xl mb-8 font-medium leading-relaxed">
                Niharika Foundation works toward educational empowerment, scholarships, humanitarian welfare, and sustainable social impact.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button onClick={() => setFormType('scholarship')} className="bg-yellow-400 text-red-600 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition">
                  Apply Scholarship
                </button>
                <button onClick={() => setFormType('volunteer')} className="bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
                  Become Volunteer
                </button>
              </div>

              {/* Counters */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <div className="text-4xl font-black">5000+</div>
                  <div className="text-sm font-semibold">Students Served</div>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <div className="text-4xl font-black">50+</div>
                  <div className="text-sm font-semibold">Villages Reached</div>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <div className="text-4xl font-black">₹50L+</div>
                  <div className="text-sm font-semibold">Scholarships</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden md:block relative">
              <img src="/rutuick-jee.jpg" alt="Founder" className="rounded-2xl shadow-2xl object-cover h-96 w-full" />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <div className="text-red-600 font-bold text-sm mb-1">CHAIRMAN & FOUNDER</div>
                <div className="text-gray-800 font-bold text-lg">Rutuick Jee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Ticker */}
      <div className="bg-red-900 text-white overflow-hidden py-3">
        <div className="flex items-center gap-4 px-4 md:px-8">
          <span className="font-bold text-sm whitespace-nowrap">BREAKING:</span>
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...news, ...news].map((item, idx) => (
              <span key={idx} className="text-sm font-semibold">{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Countdown Section */}
      <section className="bg-green-600 text-white py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold">Next Scholarship Announcement In:</h3>
          </div>
          <div className="flex justify-center gap-2 md:gap-4 flex-wrap">
            <div className="bg-green-700 rounded-lg px-4 py-3 min-w-20 text-center">
              <div className="text-3xl font-black">{countdown.days}</div>
              <div className="text-xs font-semibold">DAYS</div>
            </div>
            <div className="bg-green-700 rounded-lg px-4 py-3 min-w-20 text-center">
              <div className="text-3xl font-black">{countdown.hours}</div>
              <div className="text-xs font-semibold">HRS</div>
            </div>
            <div className="bg-green-700 rounded-lg px-4 py-3 min-w-20 text-center">
              <div className="text-3xl font-black">{countdown.minutes}</div>
              <div className="text-xs font-semibold">MINS</div>
            </div>
            <div className="bg-green-700 rounded-lg px-4 py-3 min-w-20 text-center">
              <div className="text-3xl font-black">{countdown.seconds}</div>
              <div className="text-xs font-semibold">SECS</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-gray-800 mb-4 text-center">About Niharika Foundation</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Educational Charitable Trust & Research Center working in Balasore, Odisha</p>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                To provide quality education, support research, and empower individuals and communities to achieve their full potential.
              </p>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="text-green-600 font-bold">✓</div>
                  <div className="text-gray-700">Education Support</div>
                </div>
                <div className="flex gap-3">
                  <div className="text-green-600 font-bold">✓</div>
                  <div className="text-gray-700">Scholarship Programs</div>
                </div>
                <div className="flex gap-3">
                  <div className="text-green-600 font-bold">✓</div>
                  <div className="text-gray-700">Rural Development</div>
                </div>
                <div className="flex gap-3">
                  <div className="text-green-600 font-bold">✓</div>
                  <div className="text-gray-700">Women Empowerment</div>
                </div>
              </div>
            </div>
            <img src="/odisha-students.jpg" alt="Students" className="rounded-xl shadow-lg h-80 object-cover w-full" />
          </div>

          {/* Founder Section */}
          <div className="bg-blue-600 text-white rounded-xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img src="/rutuick-jee.jpg" alt="Rutuick Jee" className="rounded-lg h-80 object-cover w-full" />
              <div>
                <div className="text-yellow-400 font-bold mb-2">FOUNDER MESSAGE</div>
                <h3 className="text-3xl font-black mb-4">Rutuick Jee</h3>
                <p className="mb-6 leading-relaxed text-lg">
                  Education is the foundation of a better society. Through Niharika Foundation, we are committed to ensuring every child, regardless of economic background, has access to quality education and the opportunity to dream big.
                </p>
                <p className="leading-relaxed">
                  Our work in Odisha represents our belief in local impact and global aspirations. Together, we are building futures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-gray-800 mb-4 text-center">Our Programs & Initiatives</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Comprehensive educational solutions for Odisha's communities</p>

          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((prog, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-red-500 transition">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{prog.title}</h3>
                <p className="text-gray-600 mb-4">{prog.desc}</p>
                <div className="text-red-600 font-bold text-sm">{prog.impact}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medha Samman Section */}
      <section id="medha" className="py-16 px-4 md:px-8 bg-gradient-to-r from-yellow-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-gray-800 mb-2 text-center">Niharika Medha Samman 2026</h2>
          <p className="text-center text-gray-600 mb-8 font-semibold">Felicitation of 10th Board Toppers - Date: 24-05-2026 | Location: Gandhi Smruti Bhawan, Baleshwar</p>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <img src="/medha-samman-poster.jpg" alt="Medha Samman" className="rounded-xl shadow-lg h-96 object-cover w-full" />
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Celebrating Excellence & Dreams</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Medha Samman is our flagship program recognizing students who scored 90% and above in 10th Board Examinations. This prestigious ceremony celebrates academic excellence and awards scholarships worth ₹50+ lakhs.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex gap-3 items-start">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <div className="font-bold text-gray-800">90%+ Students Eligible</div>
                    <div className="text-sm text-gray-600">CBSE, BSE Odisha, ICSE boards</div>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <div className="font-bold text-gray-800">Premium Awards</div>
                    <div className="text-sm text-gray-600">Certificates, medals, scholarships</div>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-2xl">📅</span>
                  <div>
                    <div className="font-bold text-gray-800">May 24, 2026</div>
                    <div className="text-sm text-gray-600">10:00 AM - 9:00 PM | 3 Sessions</div>
                  </div>
                </div>
              </div>
              <button onClick={() => setFormType('scholarship')} className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 w-full transition">
                Register for Medha Samman
              </button>
            </div>
          </div>

          {/* Scholarship Cards */}
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { amount: '₹500', desc: 'Educational Books' },
              { amount: '₹2000', desc: 'Monthly Scholarship' },
              { amount: '₹5000', desc: 'Annual Scholarship' },
              { amount: '₹10000+', desc: 'Full Support' }
            ].map((sch, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition">
                <div className="text-3xl font-black text-red-600 mb-2">{sch.amount}</div>
                <div className="text-gray-700 font-semibold">{sch.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-gray-800 mb-12 text-center">Impact Stories</h2>
          
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-8">
              <p className="text-2xl text-gray-700 mb-6 italic font-medium">
                "{stories[testimonialIdx].text}"
              </p>
              <div className="text-xl font-bold text-gray-800 mb-2">{stories[testimonialIdx].name}</div>
              <div className="text-red-600 font-semibold">{stories[testimonialIdx].role}</div>
            </div>
            
            <div className="flex justify-center gap-2">
              {stories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setTestimonialIdx(idx)}
                  className={`h-3 w-3 rounded-full transition ${idx === testimonialIdx ? 'bg-red-600 w-8' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-gray-800 mb-12 text-center">Gallery & Memories</h2>
          
          <div className="relative mb-8">
            <img src={['/odisha-temple.jpg', '/odisha-village.jpg', '/odisha-students.jpg', '/scholarship-program.jpg', '/health-awareness.jpg'][gallerySlide]} alt="Gallery" className="rounded-xl shadow-lg h-96 w-full object-cover" />
            <div className="absolute bottom-4 right-4 flex gap-2">
              {[0, 1, 2, 3, 4].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setGallerySlide(idx)}
                  className={`h-3 w-3 rounded-full transition ${idx === gallerySlide ? 'bg-white w-8' : 'bg-white bg-opacity-50'}`}
                />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {['Odisha Temple', 'Rural Villages', 'Students Learning', 'Scholarship Ceremony', 'Health Camps'].map((label, idx) => (
              <div key={idx} className="bg-gray-200 rounded-lg h-32 flex items-center justify-center font-bold text-gray-700 cursor-pointer hover:bg-gray-300 transition">
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-gray-800 mb-12 text-center">Our Team</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 mx-auto">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-bold text-gray-800 text-center mb-1">{member.name}</h3>
                <p className="text-red-600 font-semibold text-center text-sm mb-3">{member.title}</p>
                <p className="text-gray-600 text-center text-xs">{member.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-800 mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left font-bold text-gray-800 hover:bg-gray-50 transition flex justify-between items-center"
                >
                  {faq.q}
                  <span className={`transition transform ${expandedFaq === idx ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 py-4 bg-gray-50 text-gray-700 border-t-2 border-gray-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-gray-800 mb-12 text-center">Get In Touch</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">9337871450, 9338330554</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600 text-sm">niharikafoundation.org@gmail.com</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="font-bold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-600 text-sm">Balasore, Odisha, India</p>
            </div>
          </div>

          {/* Forms Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-md border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Us</h3>
              <form onSubmit={(e) => handleFormSubmit(e, 'contact')} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-gray-800"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-gray-800"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-gray-800"
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                />
                <textarea
                  placeholder="Message"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-gray-800"
                  rows="4"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
                <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition">
                  📲 Send via WhatsApp
                </button>
              </form>
            </div>

            {/* Scholarship Form */}
            <div className="bg-white rounded-lg p-8 shadow-md border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Scholarship Inquiry</h3>
              <form onSubmit={(e) => handleFormSubmit(e, 'scholarship')} className="space-y-4">
                <input
                  type="text"
                  placeholder="Student Name"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-gray-800"
                  onChange={(e) => setFormData({...formData, student: e.target.value})}
                  required
                />
                <input
                  type="text"
                  placeholder="Class"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-gray-800"
                  onChange={(e) => setFormData({...formData, class: e.target.value})}
                  required
                />
                <input
                  type="text"
                  placeholder="School/College"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-gray-800"
                  onChange={(e) => setFormData({...formData, school: e.target.value})}
                  required
                />
                <input
                  type="text"
                  placeholder="District"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-gray-800"
                  onChange={(e) => setFormData({...formData, district: e.target.value})}
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-gray-800"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
                <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition">
                  📲 Apply Now
                </button>
              </form>
            </div>

            {/* Volunteer Form */}
            <div className="bg-white rounded-lg p-8 shadow-md border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Volunteer Registration</h3>
              <form onSubmit={(e) => handleFormSubmit(e, 'volunteer')} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-gray-800"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <input
                  type="number"
                  placeholder="Age"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-gray-800"
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="Occupation"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-gray-800"
                  onChange={(e) => setFormData({...formData, occupation: e.target.value})}
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-gray-800"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
                <textarea
                  placeholder="Why do you want to volunteer?"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-gray-800"
                  rows="3"
                  onChange={(e) => setFormData({...formData, why: e.target.value})}
                />
                <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition">
                  📲 Register Now
                </button>
              </form>
            </div>

            {/* Donation Form */}
            <div className="bg-white rounded-lg p-8 shadow-md border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Support Us</h3>
              <form onSubmit={(e) => handleFormSubmit(e, 'donation')} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-gray-800"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <select
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-gray-800"
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                  defaultValue=""
                >
                  <option value="">Select Sponsorship Type</option>
                  <option value="Student Scholarship">Student Scholarship</option>
                  <option value="Education Program">Education Program</option>
                  <option value="Healthcare">Healthcare Awareness</option>
                  <option value="General Donation">General Donation</option>
                </select>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-gray-800"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
                <textarea
                  placeholder="Additional Message"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-gray-800"
                  rows="3"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
                <button type="submit" className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition">
                  ❤️ Donate Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => window.open('https://wa.me/7978191554', '_blank')}
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center text-2xl animate-bounce z-40"
        title="Contact on WhatsApp"
      >
        💬
      </button>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Niharika Foundation</h4>
              <p className="text-gray-400 text-sm">Educational Charitable Trust & Research Center</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a href="#home" className="hover:text-white">Home</a><br/>
                <a href="#about" className="hover:text-white">About</a><br/>
                <a href="#programs" className="hover:text-white">Programs</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="text-sm text-gray-400">
                <div>📞 9337871450</div>
                <div>📧 niharikafoundation.org@gmail.com</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>📱 Facebook</div>
                <div>📸 Instagram</div>
                <div>🎬 YouTube</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Niharika Foundation. All rights reserved.</p>
            <p>Educational Charitable Trust & Research Center | Balasore, Odisha</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default NiharikaSite;
