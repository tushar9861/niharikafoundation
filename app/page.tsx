'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Heart, Users, BookOpen, Leaf, Menu, X, ChevronUp, Play } from 'lucide-react';

export default function NiahrikaFoundation() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visibleCounters, setVisibleCounters] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedProgram, setExpandedProgram] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showImageModal, setShowImageModal] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Auto-rotating testimonials
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Scholarship Recipient",
      text: "Niharika Foundation changed my life. Their support helped me complete my education and become a teacher.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "Rajesh Kumar",
      role: "Volunteer",
      text: "Being part of this foundation's mission to empower rural communities has been the most rewarding experience of my life.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Anjali Patra",
      role: "Village Leader",
      text: "The healthcare and education initiatives have transformed our entire village. We're grateful for their commitment.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    }
  ];

  const programs = [
    {
      title: "Education Support",
      icon: "📚",
      description: "Providing quality education access to underprivileged children in rural Odisha",
      impact: "2,500+ students helped",
      details: "We provide scholarships, school supplies, and learning resources to help bright children overcome financial barriers to education.",
      color: "from-blue-50 to-blue-100"
    },
    {
      title: "Scholarships",
      icon: "🎓",
      description: "Merit-based scholarships for deserving rural students",
      impact: "500+ scholarships awarded",
      details: "Our scholarship program supports students from Class 6 to graduation, covering tuition, books, and educational materials.",
      color: "from-purple-50 to-purple-100"
    },
    {
      title: "Women Empowerment",
      icon: "👩‍🦰",
      description: "Skill training and economic independence for rural women",
      impact: "800+ women trained",
      details: "We offer vocational training in tailoring, agriculture, handicrafts, and digital skills to enhance economic independence.",
      color: "from-pink-50 to-pink-100"
    },
    {
      title: "Healthcare Awareness",
      icon: "⚕️",
      description: "Medical camps and health education in remote villages",
      impact: "5,000+ lives touched",
      details: "Free health camps, immunization drives, and awareness sessions on hygiene, nutrition, and preventive healthcare.",
      color: "from-green-50 to-green-100"
    },
    {
      title: "Rural Development",
      icon: "🌾",
      description: "Infrastructure and livelihood projects in villages",
      impact: "50+ villages reached",
      details: "We work on water systems, sanitation, agricultural improvements, and community infrastructure development.",
      color: "from-yellow-50 to-yellow-100"
    },
    {
      title: "Youth Empowerment",
      icon: "🚀",
      description: "Mentorship and skill development for rural youth",
      impact: "1,200+ youth mentored",
      details: "Career guidance, digital literacy, entrepreneurship training, and leadership development programs.",
      color: "from-indigo-50 to-indigo-100"
    }
  ];

  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1427504494993-b7c1a0be0e97?w=500&h=400&fit=crop", title: "Students in classroom" },
    { url: "https://images.unsplash.com/photo-1497633762265-25c007658fed?w=500&h=400&fit=crop", title: "Healthcare camp" },
    { url: "https://images.unsplash.com/photo-1506657404912-a2e2e302b8f3?w=500&h=400&fit=crop", title: "Community gathering" },
    { url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=400&fit=crop", title: "Women training" },
    { url: "https://images.unsplash.com/photo-1516534775068-bb57e39c2ac9?w=500&h=400&fit=crop", title: "Volunteer activity" },
    { url: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=500&h=400&fit=crop", title: "Educational event" },
    { url: "https://images.unsplash.com/photo-1509027923877-38f666d74ecc?w=500&h=400&fit=crop", title: "Rural outreach" },
    { url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop", title: "Youth program" }
  ];

  const faqItems = [
    {
      question: "How can I donate to Niharika Foundation?",
      answer: "You can donate directly through our website via WhatsApp, or contact us for bank transfer details. Every donation goes directly to our programs."
    },
    {
      question: "Can I volunteer with the foundation?",
      answer: "Yes! We welcome volunteers from all backgrounds. Contact us to learn about current opportunities in your area."
    },
    {
      question: "How are scholarships awarded?",
      answer: "Scholarships are awarded based on merit, financial need, and community recommendations. We assess each candidate individually."
    },
    {
      question: "What is the impact of my donation?",
      answer: "Every donation is tracked. ₹500 educates a child for a month, ₹5,000 provides a full scholarship year."
    },
    {
      question: "Where does the foundation work?",
      answer: "We primarily work in Balasore and surrounding districts of Odisha, with outreach programs in 50+ villages."
    }
  ];

  const navigationItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Programs', id: 'programs' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Volunteer', id: 'volunteer' },
    { label: 'Contact', id: 'contact' }
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Intersection Observer for counters
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setVisibleCounters(prev => ({ ...prev, [id]: true }));
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-counter]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleDonateClick = () => {
    const message = "Hello! I'd like to make a donation to Niharika Foundation. Please provide donation details and payment options.";
    const whatsappUrl = `https://wa.me/917978191554?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleVolunteerClick = () => {
    const message = "Hello! I'm interested in volunteering with Niharika Foundation. Please tell me about available opportunities.";
    const whatsappUrl = `https://wa.me/917978191554?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const city = formData.get('city');
    const purpose = formData.get('purpose');
    const message = formData.get('message');

    const whatsappMessage = `Contact Form Submission:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nCity: ${city}\nPurpose: ${purpose}\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/917978191554?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    e.target.reset();
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

  // Counter animation component
  const Counter = ({ target, id }) => {
    const [count, setCount] = useState(0);
    const isVisible = visibleCounters[id];

    useEffect(() => {
      if (!isVisible) return;
      
      let current = 0;
      const increment = Math.ceil(target / 60);
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, 30);
      
      return () => clearInterval(timer);
    }, [isVisible, target, id]);

    return <span>{count.toLocaleString()}</span>;
  };

  return (
    <div className="w-full bg-white text-gray-900 font-sans overflow-x-hidden">
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917978191554"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg animate-pulse hover:animate-none transition-all duration-300 z-50"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.898 1.488c-2.978 1.759-4.633 5.2-3.711 8.23.521 1.749 1.502 3.348 2.894 4.543 1.465 1.317 3.277 2.247 5.323 2.433.996.069 2.032-.131 3.007-.455l.215-.075c3.913-1.231 6.949-4.605 7.529-8.79.292-2.056.23-4.192-.168-6.251-.44-2.266-1.331-4.401-2.677-6.232-1.346-1.831-3.11-3.295-5.046-4.237C14.637 1.027 12.322.51 10.051 1.051ZM1.884.511a.961.961 0 00-.857 1.44l2.167 3.655A9.902 9.902 0 000 10.016C0 16.062 5.386 21.053 12 21.053s12-4.991 12-11.037S18.614-1.021 12-1.021c-2.6 0-5.117.602-7.327 1.746L1.884.511z"/>
        </svg>
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-8 w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 z-50"
        >
          <ChevronUp size={20} />
        </button>
      )}

      {/* Sticky Navbar */}
      <nav className={`sticky top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-red-600">NIHARIKA</span>
              <span className="text-xs text-gray-600">FOUNDATION</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-red-600 border-b-2 border-red-600 pb-1'
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Donate Button & Mobile Menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleDonateClick}
              className="hidden sm:block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
            >
              Donate
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-red-600"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 space-y-3 animate-slideDown">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'bg-red-50 text-red-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleDonateClick}
              className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
            >
              Donate
            </button>
          </div>
        )}
      </nav>

      {/* HOME SECTION */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50 flex flex-col justify-center pt-10 sm:pt-20">
        {/* Hero Slideshow */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden mb-8 sm:mb-12">
          <img
            src={galleryImages[0].url}
            alt="Hero"
            className="w-full h-full object-cover animate-fadeIn"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 text-white px-4 sm:px-8 pb-4 sm:pb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3">Niharika Foundation</h1>
            <p className="text-sm sm:text-base md:text-lg max-w-2xl">Empowering Lives, Building Futures in Rural Odisha</p>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Creating Positive Change in Our Communities
              </h2>
              <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
                Founded by Rutuick Jee and dedicated team members, Niharika Foundation works tirelessly to provide education, healthcare, and empowerment to underserved communities across Odisha.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={handleDonateClick}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Donate Now
                </button>
                <button
                  onClick={handleVolunteerClick}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Join Volunteer
                </button>
              </div>
            </div>
            <div className="relative h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden shadow-2xl">
              <img
                src={galleryImages[1].url}
                alt="Our Work"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-xl text-center hover:shadow-lg transition-shadow" data-counter id="stat1">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                <Counter target={2500} id="stat1" />+
              </div>
              <p className="text-gray-700 text-sm sm:text-base font-medium">Students Helped</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 sm:p-8 rounded-xl text-center hover:shadow-lg transition-shadow" data-counter id="stat2">
              <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">
                <Counter target={50} id="stat2" />+
              </div>
              <p className="text-gray-700 text-sm sm:text-base font-medium">Villages Reached</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 sm:p-8 rounded-xl text-center hover:shadow-lg transition-shadow" data-counter id="stat3">
              <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">
                <Counter target={500} id="stat3" />+
              </div>
              <p className="text-gray-700 text-sm sm:text-base font-medium">Active Volunteers</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 sm:p-8 rounded-xl text-center hover:shadow-lg transition-shadow" data-counter id="stat4">
              <div className="text-3xl sm:text-4xl font-bold text-yellow-600 mb-2">
                <Counter target={5000} id="stat4" />+
              </div>
              <p className="text-gray-700 text-sm sm:text-base font-medium">Lives Impacted</p>
            </div>
          </div>

          {/* Call to Action Banner */}
          <div className="mt-16 sm:mt-20 bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 sm:p-12 text-white text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">Support Education in Odisha</h3>
            <p className="text-sm sm:text-base mb-6 opacity-90">Every donation helps us reach more children and transform more lives</p>
            <button
              onClick={handleDonateClick}
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105"
            >
              Make Your Impact →
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Niharika Foundation</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">Our story, mission, and commitment to rural empowerment</p>
          </div>

          {/* Founder Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 sm:mb-20">
            <div className="md:col-span-1 flex flex-col items-center">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden mb-6 shadow-xl border-4 border-red-200">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Rutuick Jee</h3>
              <p className="text-red-600 font-medium mb-4">Founder & Leader</p>
              <p className="text-gray-600 text-center text-sm sm:text-base">Visionary leader dedicated to transforming rural Odisha through education and empowerment</p>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide quality education, healthcare, and economic empowerment to underserved communities in rural Odisha, creating pathways for sustainable development and human dignity.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  A rural Odisha where every child has access to quality education, every community has access to healthcare, and every individual has opportunities for meaningful livelihood and personal growth.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Values</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <p className="font-semibold text-blue-900">Integrity</p>
                  </div>
                  <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
                    <p className="font-semibold text-green-900">Compassion</p>
                  </div>
                  <div className="bg-purple-50 p-3 sm:p-4 rounded-lg">
                    <p className="font-semibold text-purple-900">Transparency</p>
                  </div>
                  <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg">
                    <p className="font-semibold text-yellow-900">Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* History Timeline */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 sm:p-12 rounded-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Our Journey</h3>
            <div className="space-y-6 sm:space-y-8">
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-600 mt-2"></div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">Founded with Purpose</h4>
                  <p className="text-gray-700 text-sm sm:text-base">Niharika Foundation was established by Rutuick Jee and founding members to address educational disparities in rural Odisha.</p>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-600 mt-2"></div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">Expanding Reach</h4>
                  <p className="text-gray-700 text-sm sm:text-base">Expanded programs to include healthcare awareness, women empowerment, and rural development initiatives.</p>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-600 mt-2"></div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">Building Partnerships</h4>
                  <p className="text-gray-700 text-sm sm:text-base">Collaborating with NGOs, government agencies, and community leaders to maximize impact and sustainability.</p>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-600 mt-2"></div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">Future Vision</h4>
                  <p className="text-gray-700 text-sm sm:text-base">Scaling successful programs and creating sustainable models for rural development across Odisha and beyond.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section id="programs" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Programs & Initiatives</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">Comprehensive programs designed to address critical community needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {programs.map((program, idx) => (
              <div
                key={idx}
                onClick={() => setExpandedProgram(expandedProgram === idx ? null : idx)}
                className={`cursor-pointer bg-gradient-to-br ${program.color} p-6 sm:p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-red-200`}
              >
                <div className="text-4xl sm:text-5xl mb-4">{program.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base mb-3">{program.description}</p>
                <p className="text-red-600 font-bold text-sm sm:text-base mb-4">{program.impact}</p>
                
                {expandedProgram === idx && (
                  <div className="mt-4 pt-4 border-t-2 border-gray-300 animate-slideDown">
                    <p className="text-gray-700 text-sm leading-relaxed">{program.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Success Stories */}
          <div className="mt-16 sm:mt-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Success Stories</h3>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-xl border-l-4 border-red-600 shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">From Struggling to Thriving</h4>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                  Priya, a bright student from a remote village, was forced to work in fields instead of attending school. Through our scholarship program, she now studies engineering and mentors other rural students.
                </p>
                <p className="text-red-600 font-semibold text-sm">Impact: 1 student, 5 inspired</p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-xl border-l-4 border-green-600 shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Women Entrepreneurs</h4>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                  40 women from 5 villages received skill training in tailoring and handicrafts. Today, they collectively earn ₹2.5L monthly and support their families independently.
                </p>
                <p className="text-green-600 font-semibold text-sm">Impact: 40 women, 200+ family members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY & IMPACT SECTION */}
      <section id="gallery" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Gallery & Impact</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">Visual stories of our work in communities</p>
          </div>

          {/* Masonry Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
            {galleryImages.map((image, idx) => (
              <div
                key={idx}
                onClick={() => setShowImageModal(idx)}
                className="relative cursor-pointer overflow-hidden rounded-lg aspect-square group"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <Play className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                </div>
              </div>
            ))}
          </div>

          {/* Image Modal */}
          {showImageModal !== null && (
            <div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fadeIn"
              onClick={() => setShowImageModal(null)}
            >
              <div className="relative max-w-4xl w-full max-h-96 sm:max-h-[600px]" onClick={(e) => e.stopPropagation()}>
                <img
                  src={galleryImages[showImageModal].url}
                  alt={galleryImages[showImageModal].title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  onClick={() => setShowImageModal(null)}
                  className="absolute top-4 right-4 bg-white text-black w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* Impact Blocks */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 sm:p-10 rounded-xl text-center">
              <h4 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-3">2,500+</h4>
              <p className="text-gray-700 font-semibold">Students Educated</p>
              <p className="text-gray-600 text-sm mt-2">Quality education access</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 sm:p-10 rounded-xl text-center">
              <h4 className="text-2xl sm:text-3xl font-bold text-green-600 mb-3">50+</h4>
              <p className="text-gray-700 font-semibold">Villages Transformed</p>
              <p className="text-gray-600 text-sm mt-2">Rural development impact</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 sm:p-10 rounded-xl text-center">
              <h4 className="text-2xl sm:text-3xl font-bold text-purple-600 mb-3">5,000+</h4>
              <p className="text-gray-700 font-semibold">Lives Impacted</p>
              <p className="text-gray-600 text-sm mt-2">Comprehensive development</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-red-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12 sm:mb-16 text-center">Voices from Our Community</h2>

          {/* Testimonial Slider */}
          <div className="relative bg-white rounded-xl shadow-2xl p-8 sm:p-12 overflow-hidden">
            <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-red-200"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{testimonials[currentSlide].name}</h3>
                <p className="text-red-600 font-medium text-sm sm:text-base">{testimonials[currentSlide].role}</p>
              </div>
            </div>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed italic mb-8 sm:mb-10">
              "{testimonials[currentSlide].text}"
            </p>

            {/* Navigation Dots */}
            <div className="flex gap-2 justify-center">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? 'bg-red-600 w-8 sm:w-10' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VOLUNTEER & DONATE SECTION */}
      <section id="volunteer" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get Involved</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">Join our mission to transform rural Odisha</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
            {/* Volunteer Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 sm:p-10 rounded-xl border-2 border-green-200 hover:shadow-xl transition-shadow">
              <div className="text-5xl sm:text-6xl mb-4">🤝</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Become a Volunteer</h3>
              <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
                Make a direct difference in children's lives. We have flexible volunteer opportunities in education, healthcare, and community development.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                  <span className="text-gray-700">Flexible time commitments</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                  <span className="text-gray-700">Training & support provided</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                  <span className="text-gray-700">Certificate of service</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                  <span className="text-gray-700">Join a passionate community</span>
                </div>
              </div>
              <button
                onClick={handleVolunteerClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105"
              >
                Sign Up to Volunteer
              </button>
            </div>

            {/* Donate Card */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 sm:p-10 rounded-xl border-2 border-red-200 hover:shadow-xl transition-shadow">
              <div className="text-5xl sm:text-6xl mb-4">❤️</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Make a Donation</h3>
              <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
                Your donation directly supports scholarships, healthcare camps, and skill training programs in rural communities.
              </p>
              <div className="space-y-3 mb-8 text-sm sm:text-base">
                <div className="flex justify-between items-center bg-white/50 p-3 rounded">
                  <span className="text-gray-700">₹500</span>
                  <span className="text-gray-600">Monthly child support</span>
                </div>
                <div className="flex justify-between items-center bg-white/50 p-3 rounded">
                  <span className="text-gray-700">₹2,000</span>
                  <span className="text-gray-600">Healthcare camp</span>
                </div>
                <div className="flex justify-between items-center bg-white/50 p-3 rounded">
                  <span className="text-gray-700">₹5,000</span>
                  <span className="text-gray-600">Annual scholarship</span>
                </div>
                <div className="flex justify-between items-center bg-white/50 p-3 rounded">
                  <span className="text-gray-700">₹10,000</span>
                  <span className="text-gray-600">Village project</span>
                </div>
              </div>
              <button
                onClick={handleDonateClick}
                className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105"
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12 sm:mb-16 text-center">Frequently Asked Questions</h2>

          <div className="space-y-3 sm:space-y-4">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 text-left">{item.question}</h3>
                  <ChevronDown
                    size={24}
                    className={`flex-shrink-0 text-red-600 transition-transform duration-300 ${
                      expandedFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="bg-gray-50 px-4 sm:px-6 py-4 border-t border-gray-200 animate-slideDown">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 sm:py-24 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-sm sm:text-lg opacity-90 max-w-2xl mx-auto">Have questions or want to join our mission? Contact us today.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 mb-12 sm:mb-16">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-semibold text-sm sm:text-base">Address</p>
                      <p className="text-sm opacity-90">Balasore, Odisha, India</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="font-semibold text-sm sm:text-base">WhatsApp</p>
                      <a href="https://wa.me/917978191554" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                        +91 797 819 1554
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <p className="font-semibold text-sm sm:text-base">Email</p>
                      <p className="text-sm opacity-90">contact@niharikafoundation.org</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/20 p-4 sm:p-6 rounded-lg backdrop-blur">
                <h3 className="font-bold text-lg sm:text-xl mb-3">Quick Links</h3>
                <div className="space-y-2">
                  <p className="text-sm opacity-90">📌 Office Hours: Mon-Fri, 10 AM - 6 PM IST</p>
                  <p className="text-sm opacity-90">⭐ WhatsApp is our fastest response channel</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleContactSubmit} className="space-y-3 sm:space-y-4 bg-white/10 p-6 sm:p-8 rounded-lg backdrop-blur">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:bg-white/30 transition-colors text-sm sm:text-base"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:bg-white/30 transition-colors text-sm sm:text-base"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:bg-white/30 transition-colors text-sm sm:text-base"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:bg-white/30 transition-colors text-sm sm:text-base"
              />
              <select
                name="purpose"
                required
                className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-white/20 text-white focus:outline-none focus:bg-white/30 transition-colors text-sm sm:text-base"
              >
                <option value="" className="text-gray-900">Select Purpose</option>
                <option value="Donation" className="text-gray-900">Make a Donation</option>
                <option value="Volunteer" className="text-gray-900">Join as Volunteer</option>
                <option value="Partnership" className="text-gray-900">Partnership Inquiry</option>
                <option value="General" className="text-gray-900">General Inquiry</option>
              </select>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={3}
                className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:bg-white/30 transition-colors resize-none text-sm sm:text-base"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-white text-red-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* Newsletter Section */}
          <div className="bg-white/10 backdrop-blur p-6 sm:p-8 rounded-lg text-center border border-white/20">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">Stay Updated</h3>
            <p className="text-sm sm:text-base opacity-90 mb-4">Get latest news about our programs and impact</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 px-4 py-2.5 sm:py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400 text-sm sm:text-base"
              />
              <button className="bg-white text-red-600 hover:bg-gray-100 px-6 py-2.5 sm:py-3 rounded-lg font-bold transition-all duration-300 whitespace-nowrap text-sm sm:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div>
              <h4 className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base">Organization</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Impact</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base">Get Involved</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><a href="#volunteer" className="hover:text-white transition-colors">Volunteer</a></li>
                <li><a href="#" onClick={handleDonateClick} className="hover:text-white transition-colors">Donate</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partner</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Spread Word</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base">Resources</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Annual Report</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Transparency</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-sm sm:text-base transition-colors">f</a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-sm sm:text-base transition-colors">𝕏</a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-sm sm:text-base transition-colors">📷</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 sm:pt-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
              <p className="text-xs sm:text-sm opacity-75">© 2024 Niharika Foundation. All rights reserved.</p>
              <div className="flex gap-4 text-xs sm:text-sm opacity-75">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-center opacity-50">
              Made with ❤️ for rural empowerment | Balasore, Odisha, India
            </p>
          </div>
        </div>
      </footer>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        input::placeholder,
        textarea::placeholder,
        select {
          color-scheme: light;
        }
      `}</style>
    </div>
  );
}
