'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, Heart, Users, BookOpen, Menu, X, Award, Target, Globe, 
  Sparkles, ArrowRight, CheckCircle, MessageSquare, Mail, Phone, MapPin,
  Play, ChevronRight, Star, Zap
} from 'lucide-react';

export default function NiharikaSite() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [expandedProgram, setExpandedProgram] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});
  const [counters, setCounters] = useState({
    students: 0,
    scholarships: 0,
    villages: 0,
    volunteers: 0,
  });
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
            if (entry.target.id === 'stats') {
              animateCounters();
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { students: 5000, scholarships: 1000, villages: 50, volunteers: 300 };
    const duration = 1500;
    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);

      setCounters({
        students: Math.floor(targets.students * progress),
        scholarships: Math.floor(targets.scholarships * progress),
        villages: Math.floor(targets.villages * progress),
        volunteers: Math.floor(targets.volunteers * progress),
      });

      if (progress === 1) clearInterval(interval);
    }, 30);
  };

  const whatsappLink = (message) => {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/917978191554?text=${encoded}`;
  };

  // Navbar with floating WhatsApp button
  const navbar = (
    <>
      <nav className="fixed top-0 w-full bg-gradient-to-r from-red-700 via-red-600 to-red-700 shadow-lg z-50" style={{ backdropFilter: 'blur(10px)' }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12">
              <img src="/niharika-logo.png" alt="Niharika" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-white font-black text-lg">NIHARIKA</div>
              <div className="text-red-100 text-xs font-semibold">Educational Trust</div>
            </div>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex gap-8 text-white font-semibold text-sm">
            <a href="#hero" className="hover:text-yellow-200 transition">Home</a>
            <a href="#founder" className="hover:text-yellow-200 transition">Founder</a>
            <a href="#programs" className="hover:text-yellow-200 transition">Programs</a>
            <a href="#medha" className="hover:text-yellow-200 transition">Medha Samman</a>
            <a href="#contact" className="hover:text-yellow-200 transition">Contact</a>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-red-700 px-4 py-4 space-y-3 text-white font-semibold text-sm">
            <a href="#hero" className="block hover:text-yellow-200">Home</a>
            <a href="#founder" className="block hover:text-yellow-200">Founder</a>
            <a href="#programs" className="block hover:text-yellow-200">Programs</a>
            <a href="#medha" className="block hover:text-yellow-200">Medha Samman</a>
            <a href="#contact" className="block hover:text-yellow-200">Contact</a>
          </div>
        )}
      </nav>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink('Hello! I want to know more about Niharika Foundation')}
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl z-40 animate-pulse hover:scale-110 transition-transform"
      >
        <MessageSquare size={28} className="text-white" />
      </a>

      {/* Sticky Donation Ribbon */}
      {scrollY > 500 && (
        <div className="fixed top-24 right-0 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-3 rounded-l-full font-bold shadow-lg z-40 animate-bounce text-sm md:text-base">
          Support Education in Odisha ✨
        </div>
      )}
    </>
  );

  // Hero Section
  const heroSection = (
    <div
      ref={(el) => (sectionRefs.current['hero'] = el)}
      id="hero"
      className="relative min-h-screen overflow-hidden pt-20"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(220, 38, 38, 0.85) 0%, rgba(239, 68, 68, 0.85) 100%), url(/odisha-students.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
        background: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
      }}></div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="w-56 h-56 md:w-72 md:h-72 mb-10 md:mb-16 animate-bounce" style={{ animationDuration: '3s' }}>
          <img src="/niharika-logo.png" alt="Niharika Foundation" className="w-full h-full object-contain drop-shadow-2xl" />
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-lg leading-tight">
          Empowering Education & Human Potential
        </h1>

        <p className="text-xl md:text-2xl text-yellow-100 mb-8 font-semibold max-w-3xl">
          Niharika Foundation works toward educational empowerment, scholarships, social welfare, and humanitarian impact across Odisha.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <a
            href={whatsappLink('I would like to donate to Niharika Foundation')}
            className="px-8 py-4 bg-yellow-400 text-red-900 rounded-full font-black text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-xl"
          >
            Donate Now
          </a>
          <a
            href={whatsappLink('I want to become a volunteer with Niharika Foundation')}
            className="px-8 py-4 bg-white text-red-900 rounded-full font-black text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            Become Volunteer
          </a>
          <a
            href="#programs"
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-black text-lg hover:bg-white hover:text-red-900 transition-all transform hover:scale-105"
          >
            Explore Programs
          </a>
        </div>

        {/* Floating CTA Badges */}
        <div className="flex flex-wrap gap-4 justify-center text-white font-bold text-sm md:text-base">
          <div className="bg-red-900 bg-opacity-70 px-4 py-2 rounded-full backdrop-blur">✓ 5000+ Students Supported</div>
          <div className="bg-red-900 bg-opacity-70 px-4 py-2 rounded-full backdrop-blur">✓ 50+ Villages Reached</div>
          <div className="bg-red-900 bg-opacity-70 px-4 py-2 rounded-full backdrop-blur">✓ 300+ Active Volunteers</div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>
    </div>
  );

  // Founder Story Section
  const founderSection = (
    <section
      ref={(el) => (sectionRefs.current['founder'] = el)}
      id="founder"
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      <div className="absolute top-10 left-10 opacity-5 w-72 h-72">
        <img src="/niharika-logo.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className={`transform transition-all duration-1000 ${visibleSections['founder'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <img
              src="/founder-rutuick.jpg"
              alt="Rutuick Jee - Founder"
              className="rounded-3xl shadow-2xl h-96 w-full object-cover hover:shadow-3xl transition-all"
            />
          </div>

          <div className={`transform transition-all duration-1000 ${visibleSections['founder'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="text-red-600 font-bold text-lg mb-4 uppercase tracking-widest">Our Founder</div>
            <h2 className="text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
              Rutuick Jee
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
              Rutuick Jee is a visionary humanitarian educator and founder of Niharika Foundation. With a deep commitment to transforming lives through education, he dedicated his career to bridging the educational gap in rural Odisha.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
              His mission to create equal opportunities for underprivileged students led to the establishment of Niharika Foundation in 2015. Today, the foundation serves thousands of students across Odisha and beyond, empowering the next generation of changemakers.
            </p>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600 p-6 rounded-lg mb-8">
              <p className="text-gray-800 italic text-lg font-semibold">
                "Education is not just about grades and certificates. It's about awakening human potential, building character, and creating compassionate leaders who will transform society."
              </p>
              <p className="text-red-600 font-black mt-4">— Rutuick Jee, Founder</p>
            </div>

            <div className="flex gap-4">
              <div>
                <div className="text-3xl font-black text-red-600">2015</div>
                <div className="text-gray-600 font-semibold">Foundation Started</div>
              </div>
              <div className="w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-black text-green-600">5000+</div>
                <div className="text-gray-600 font-semibold">Lives Transformed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Impact Statistics Section
  const statsSection = (
    <section
      ref={(el) => (sectionRefs.current['stats'] = el)}
      id="stats"
      className="py-20 px-4 md:px-8 bg-gradient-to-r from-red-900 via-red-700 to-orange-700 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 opacity-5 w-96 h-96">
        <img src="/niharika-logo.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl font-black text-center text-white mb-4">Our Impact by Numbers</h2>
        <p className="text-center text-red-100 text-xl mb-16 max-w-3xl mx-auto font-semibold">
          Real stories of transformation across Odisha
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Users, label: 'Students Supported', value: counters.students, color: 'from-blue-500 to-blue-600' },
            { icon: Award, label: 'Scholarships Given', value: counters.scholarships, color: 'from-yellow-500 to-yellow-600' },
            { icon: Globe, label: 'Villages Reached', value: counters.villages, color: 'from-green-500 to-green-600' },
            { icon: Heart, label: 'Active Volunteers', value: counters.volunteers, color: 'from-pink-500 to-pink-600' },
          ].map((stat, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${stat.color} rounded-2xl p-8 text-white shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl`}>
              <stat.icon className="w-12 h-12 mb-4" />
              <div className="text-4xl font-black mb-2">{stat.value.toLocaleString()}+</div>
              <div className="font-bold text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Programs Section with Unique Layouts
  const programsSection = (
    <section
      ref={(el) => (sectionRefs.current['programs'] = el)}
      id="programs"
      className="py-20 px-4 md:px-8 bg-white relative overflow-hidden"
    >
      <div className="absolute bottom-20 right-5 opacity-5 w-80 h-80">
        <img src="/niharika-logo.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl font-black text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-green-600">
          Our Programs
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto font-semibold">
          Comprehensive initiatives transforming lives across Odisha
        </p>

        <div className="space-y-12">
          {/* Program 1 - Image Left */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src="/scholarship-program.jpg" alt="Scholarship" className="rounded-3xl shadow-2xl h-96 object-cover hover:shadow-3xl transition-all" />
            <div>
              <div className="text-red-600 font-bold text-sm uppercase tracking-widest mb-2">Program 1</div>
              <h3 className="text-4xl font-black mb-6 text-gray-800">Scholarship Program</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
                Providing annual scholarships covering tuition, books, and living expenses to deserving students from underprivileged backgrounds.
              </p>
              <button
                onClick={() => setExpandedProgram(expandedProgram === 1 ? null : 1)}
                className="text-red-600 font-black flex items-center gap-2 hover:gap-4 transition-all"
              >
                Learn More <ArrowRight size={20} />
              </button>
              {expandedProgram === 1 && (
                <div className="mt-6 bg-red-50 p-6 rounded-2xl border-l-4 border-red-600 animate-pulse">
                  <p className="text-gray-800 font-semibold mb-4">Impact Metrics:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ 1000+ scholarships awarded</li>
                    <li>✓ ₹50+ lakhs distributed</li>
                    <li>✓ 95% completion rate</li>
                    <li>✓ 100+ success stories</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Program 2 - Image Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-green-600 font-bold text-sm uppercase tracking-widest mb-2">Program 2</div>
              <h3 className="text-4xl font-black mb-6 text-gray-800">Women Empowerment</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
                Dedicated initiatives for girls' education, women's skill development, and healthcare awareness in rural communities.
              </p>
              <button
                onClick={() => setExpandedProgram(expandedProgram === 2 ? null : 2)}
                className="text-green-600 font-black flex items-center gap-2 hover:gap-4 transition-all"
              >
                Learn More <ArrowRight size={20} />
              </button>
              {expandedProgram === 2 && (
                <div className="mt-6 bg-green-50 p-6 rounded-2xl border-l-4 border-green-600 animate-pulse">
                  <p className="text-gray-800 font-semibold mb-4">Impact Metrics:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ 2000+ girls educated</li>
                    <li>✓ 500+ women trained</li>
                    <li>✓ 80% employment rate</li>
                    <li>✓ 50+ village initiatives</li>
                  </ul>
                </div>
              )}
            </div>
            <img src="/women-empowerment.jpg" alt="Women Empowerment" className="rounded-3xl shadow-2xl h-96 object-cover hover:shadow-3xl transition-all" />
          </div>

          {/* Program 3 - Image Left */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src="/volunteer-outreach.jpg" alt="Volunteer" className="rounded-3xl shadow-2xl h-96 object-cover hover:shadow-3xl transition-all" />
            <div>
              <div className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-2">Program 3</div>
              <h3 className="text-4xl font-black mb-6 text-gray-800">Youth Leadership</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
                Mentorship, skill development, and leadership training programs for students to become change agents in their communities.
              </p>
              <button
                onClick={() => setExpandedProgram(expandedProgram === 3 ? null : 3)}
                className="text-blue-600 font-black flex items-center gap-2 hover:gap-4 transition-all"
              >
                Learn More <ArrowRight size={20} />
              </button>
              {expandedProgram === 3 && (
                <div className="mt-6 bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600 animate-pulse">
                  <p className="text-gray-800 font-semibold mb-4">Impact Metrics:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ 300+ trained leaders</li>
                    <li>✓ 50+ community projects</li>
                    <li>✓ 90% active engagement</li>
                    <li>✓ 200+ volunteers recruited</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Medha Samman Section
  const medhaSection = (
    <section
      ref={(el) => (sectionRefs.current['medha'] = el)}
      id="medha"
      className="py-20 px-4 md:px-8 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 relative overflow-hidden"
    >
      <div className="absolute top-10 left-10 opacity-10 w-96 h-96">
        <img src="/niharika-logo.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full font-black text-lg mb-4">
            ⭐ NIHARIKA MEDHA SAMMAN 2026
          </div>
          <h2 className="text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-red-600">
            Celebrating Student Excellence
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto font-semibold">
            Annual scholarship ceremony honoring academic achievement and student potential across Odisha
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <img src="/medha-samman-event.jpg" alt="Medha Samman Event" className="rounded-3xl shadow-2xl h-96 w-full object-cover hover:shadow-3xl transition-all" />
          <div>
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-8 mb-8 border-2 border-yellow-300">
              <div className="text-5xl font-black text-yellow-600 mb-4">₹50+ Lakhs</div>
              <p className="text-gray-800 font-bold text-lg">Distributed in scholarships annually</p>
            </div>

            <div className="space-y-4">
              {[
                { title: 'Categories', desc: 'Merit, Sports, Arts, Social Impact' },
                { title: 'Beneficiaries', desc: '500+ students recognized annually' },
                { title: 'Celebration', desc: 'Grand ceremony with state recognition' },
                { title: 'Mentorship', desc: 'Lifetime guidance from experts' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start p-4 bg-white rounded-xl border-l-4 border-yellow-500 hover:shadow-lg transition-all">
                  <Star size={24} className="text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-black text-gray-800">{item.title}</p>
                    <p className="text-gray-600 font-semibold">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={whatsappLink('I want to know more about Medha Samman 2026')}
              className="mt-8 block w-full px-6 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-black text-lg text-center hover:shadow-lg transition-all transform hover:scale-105"
            >
              Learn About Medha Samman
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  // Testimonials Section
  const testimonialsSection = (
    <section
      ref={(el) => (sectionRefs.current['testimonials'] = el)}
      id="testimonials"
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      <div className="absolute bottom-10 right-10 opacity-5 w-80 h-80">
        <img src="/niharika-logo.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl font-black text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-green-600">
          Impact Stories
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto font-semibold">
          Real voices of transformation from our community
        </p>

        <div className="bg-gradient-to-r from-red-50 via-yellow-50 to-green-50 rounded-3xl p-12 shadow-xl">
          {[
            {
              name: 'Priya Kumar',
              role: 'Medical Student, AIIMS Delhi',
              text: 'Niharika Foundation gave me the opportunity to pursue my dreams. Today I am studying medicine and I want to serve rural communities.',
              emoji: '👨‍⚕️',
            },
            {
              name: 'Anjali Patel',
              role: 'Social Entrepreneur',
              text: 'The scholarship and mentorship changed my life. Now I run an NGO helping 200+ children get quality education.',
              emoji: '👩‍🎓',
            },
            {
              name: 'Rahul Singh',
              role: 'Software Developer, TCS',
              text: 'The skill training program equipped me with tools to land my dream job. I am now mentoring 50+ students.',
              emoji: '👨‍💻',
            },
          ].map((testimonial, idx) => (
            <div
              key={idx}
              onClick={() => setActiveTestimonial(idx)}
              className={`cursor-pointer transition-all duration-500 ${
                activeTestimonial === idx ? 'opacity-100 scale-100' : 'opacity-30 scale-95'
              }`}
            >
              {activeTestimonial === idx && (
                <div className="text-center">
                  <div className="text-7xl mb-6">{testimonial.emoji}</div>
                  <p className="text-2xl text-gray-800 mb-8 italic font-medium leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <p className="text-2xl font-black text-gray-800 mb-2">
                    {testimonial.name}
                  </p>
                  <p className="text-lg text-gray-600 font-semibold">
                    {testimonial.role}
                  </p>
                </div>
              )}
            </div>
          ))}

          <div className="flex justify-center gap-3 mt-12">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeTestimonial === idx 
                    ? 'bg-red-600 w-10' 
                    : 'bg-gray-400 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // Gallery Section
  const gallerySection = (
    <section
      ref={(el) => (sectionRefs.current['gallery'] = el)}
      id="gallery"
      className="py-20 px-4 md:px-8 bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute top-10 right-10 opacity-5 w-96 h-96">
        <img src="/niharika-logo.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl font-black text-center mb-4 text-white">
          Moments of Impact
        </h2>
        <p className="text-center text-gray-300 text-lg mb-16 max-w-3xl mx-auto font-semibold">
          Documentary-style stories from across Odisha
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: '/odisha-temple.jpg', title: 'Cultural Heritage', desc: 'Preserving traditions' },
            { img: '/odisha-village.jpg', title: 'Rural Communities', desc: 'Building futures' },
            { img: '/scholarship-program.jpg', title: 'Scholarship Day', desc: 'Dreams realized' },
            { img: '/women-empowerment.jpg', title: 'Women Leaders', desc: 'Breaking barriers' },
            { img: '/health-awareness.jpg', title: 'Health Camp', desc: 'Wellness initiative' },
            { img: '/medha-samman-event.jpg', title: 'Medha Samman', desc: 'Excellence celebrated' },
          ].map((item, idx) => (
            <div key={idx} className="relative rounded-2xl overflow-hidden h-64 md:h-72 group cursor-pointer">
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-end p-6 text-white">
                <div className="transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Trust & Transparency Section
  const trustSection = (
    <section
      ref={(el) => (sectionRefs.current['trust'] = el)}
      id="trust"
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 opacity-5 w-80 h-80">
        <img src="/niharika-logo.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl font-black text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
          Trust & Transparency
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto font-semibold">
          Backed by credibility, accountability, and transparent operations
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-600 hover:shadow-xl transition-all">
            <Award size={40} className="text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">NGO Registration</h3>
            <div className="space-y-2 text-gray-700 font-semibold">
              <p>✓ Registered as Educational Charitable Trust</p>
              <p>✓ 80G & 12A Certification</p>
              <p>✓ FCRA Compliance</p>
              <p>✓ Annual Financial Audit</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-600 hover:shadow-xl transition-all">
            <CheckCircle size={40} className="text-green-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Accountability</h3>
            <div className="space-y-2 text-gray-700 font-semibold">
              <p>✓ 100% Transparent Spending</p>
              <p>✓ Quarterly Impact Reports</p>
              <p>✓ Donor Feedback Valued</p>
              <p>✓ Open Financial Records</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-black mb-4">Where Your Donation Goes</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-black mb-2">70%</div>
              <div className="font-bold">Scholarships & Programs</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">20%</div>
              <div className="font-bold">Operations & Staff</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">10%</div>
              <div className="font-bold">Research & Development</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Contact & FAQ Section
  const contactSection = (
    <section
      ref={(el) => (sectionRefs.current['contact'] = el)}
      id="contact"
      className="py-20 px-4 md:px-8 bg-white relative overflow-hidden"
    >
      <div className="absolute bottom-20 right-5 opacity-5 w-96 h-96">
        <img src="/niharika-logo.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl font-black text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-green-600">
          Get Involved Today
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto font-semibold">
          Join our mission to transform education in Odisha
        </p>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Heart,
              title: 'Donate',
              desc: 'Support scholarships',
              color: 'from-red-500 to-red-600',
              action: 'Donate Now',
              msg: 'I want to donate to Niharika Foundation',
            },
            {
              icon: Users,
              title: 'Volunteer',
              desc: 'Share your skills',
              color: 'from-blue-500 to-blue-600',
              action: 'Join Us',
              msg: 'I want to become a volunteer',
            },
            {
              icon: BookOpen,
              title: 'Sponsor',
              desc: 'Sponsor a student',
              color: 'from-yellow-500 to-yellow-600',
              action: 'Sponsor',
              msg: 'I want to sponsor a student',
            },
            {
              icon: Globe,
              title: 'Partner',
              desc: 'Corporate CSR',
              color: 'from-green-500 to-green-600',
              action: 'Partner',
              msg: 'I want to discuss CSR partnership',
            },
          ].map((item, idx) => (
            <a
              key={idx}
              href={whatsappLink(item.msg)}
              className={`bg-gradient-to-br ${item.color} text-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer group`}
            >
              <item.icon size={40} className="mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-black mb-2">{item.title}</h3>
              <p className="text-sm font-semibold mb-4 opacity-90">{item.desc}</p>
              <div className="font-bold text-sm flex items-center gap-2">
                {item.action} <ArrowRight size={16} />
              </div>
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-red-50 rounded-2xl p-8 border-l-4 border-red-600">
            <MapPin size={32} className="text-red-600 mb-4" />
            <h4 className="font-black text-gray-800 mb-2">Address</h4>
            <p className="text-gray-700 font-semibold">Balasore, Odisha, India</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-8 border-l-4 border-green-600">
            <Phone size={32} className="text-green-600 mb-4" />
            <h4 className="font-black text-gray-800 mb-2">WhatsApp</h4>
            <p className="text-gray-700 font-semibold">+91 7978 191 554</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-600">
            <Mail size={32} className="text-blue-600 mb-4" />
            <h4 className="font-black text-gray-800 mb-2">Email</h4>
            <p className="text-gray-700 font-semibold">info@niharika.org</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <h3 className="text-3xl font-black text-center mb-12 text-gray-800">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              {
                q: 'How can I donate?',
                a: 'You can donate via WhatsApp, bank transfer, or online payment. Click any "Donate" button to get started.',
              },
              {
                q: 'Are donations tax-deductible?',
                a: 'Yes! We hold 80G certification, making all donations tax-deductible under Section 80G of the Income Tax Act.',
              },
              {
                q: 'How do I become a volunteer?',
                a: 'Click "Become Volunteer" or send us a message via WhatsApp. We have flexible online and offline opportunities.',
              },
              {
                q: 'What is Medha Samman?',
                a: 'Medha Samman is our annual scholarship ceremony celebrating student excellence and distributing ₹50+ lakhs in scholarships.',
              },
            ].map((faq, idx) => (
              <button
                key={idx}
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full text-left bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-black text-gray-800 text-lg">{faq.q}</h4>
                  <ChevronDown
                    className={`transition-transform ${expandedFaq === idx ? 'rotate-180' : ''}`}
                  />
                </div>
                {expandedFaq === idx && (
                  <p className="mt-4 text-gray-700 font-semibold leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // Footer
  const footer = (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute top-10 right-10 opacity-5 w-80 h-80">
        <img src="/niharika-logo.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-2xl font-black mb-4">Niharika</h4>
            <p className="text-gray-400 leading-relaxed">Transforming lives through quality education and humanitarian impact across Odisha.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#founder" className="hover:text-white transition">Founder</a></li>
              <li><a href="#programs" className="hover:text-white transition">Programs</a></li>
              <li><a href="#medha" className="hover:text-white transition">Medha Samman</a></li>
              <li><a href="#gallery" className="hover:text-white transition">Gallery</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Get Involved</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href={whatsappLink('I want to donate')} className="hover:text-white transition">Donate</a></li>
              <li><a href={whatsappLink('I want to volunteer')} className="hover:text-white transition">Volunteer</a></li>
              <li><a href={whatsappLink('I want to sponsor')} className="hover:text-white transition">Sponsor</a></li>
              <li><a href={whatsappLink('I want to partner')} className="hover:text-white transition">Partner</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Contact</h4>
            <p className="text-gray-400 mb-2">📍 Balasore, Odisha</p>
            <p className="text-gray-400 mb-2">📱 +91 7978 191 554</p>
            <p className="text-gray-400">✉️ info@niharika.org</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 mb-2">
            © 2024 Niharika Foundation - Educational Charitable Trust & Research Center
          </p>
          <p className="text-gray-500 text-sm">
            Building a brighter future through education and humanitarian impact in Odisha
          </p>
          <div className="mt-6 text-gray-400 text-sm space-y-1">
            <p>✓ 80G Registered | ✓ 12A Certified | ✓ Transparent Operations | ✓ Donor Verified</p>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="w-full overflow-x-hidden bg-white">
      {navbar}
      {heroSection}
      {founderSection}
      {statsSection}
      {programsSection}
      {medhaSection}
      {testimonialsSection}
      {gallerySection}
      {trustSection}
      {contactSection}
      {footer}
    </div>
  );
}
