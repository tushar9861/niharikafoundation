'use client';

import React, { useState } from 'react';
import { Users, BookOpen, Heart, Briefcase } from 'lucide-react';

export function GetInvolvedPageContent() {
  const [activeTab, setActiveTab] = useState('membership');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    district: '',
    occupation: '',
    age: '',
    skills: '',
    interestArea: '',
    volunteerExp: '',
    membershipType: 'life'
  });

  const membershipBenefits = [
    { benefit: 'Leadership Opportunities', desc: 'Lead initiatives and be part of decision-making' },
    { benefit: 'Networking Opportunities', desc: 'Connect with like-minded professionals' },
    { benefit: 'Social Impact', desc: 'Direct participation in scholarship programs' },
    { benefit: 'Recognition Programs', desc: 'Annual awards and recognition ceremonies' },
    { benefit: 'Event Participation', desc: 'Exclusive access to foundation events' },
    { benefit: 'Skill Development', desc: 'Training and professional growth' },
    { benefit: 'Community Visibility', desc: 'Featured in newsletters and social media' },
    { benefit: 'Career Enhancement', desc: 'Network for career opportunities' },
  ];

  const volunteerRoles = [
    {
      title: 'Education Mentor',
      desc: 'Guide students in academics and career planning',
      commitment: '4-6 hours/week',
      requirements: 'College degree or equivalent expertise'
    },
    {
      title: 'Event Coordinator',
      desc: 'Organize scholarship ceremonies and community events',
      commitment: 'Event-based',
      requirements: 'Organization and communication skills'
    },
    {
      title: 'Content Creator',
      desc: 'Create awareness content for social media',
      commitment: 'Flexible',
      requirements: 'Creative and social media skills'
    },
    {
      title: 'Community Outreach',
      desc: 'Conduct awareness programs in villages',
      commitment: '5-8 hours/week',
      requirements: 'Communication and presentation skills'
    },
    {
      title: 'Skill Trainer',
      desc: 'Conduct skill development workshops',
      commitment: '6-8 hours/week',
      requirements: 'Technical/Professional expertise'
    },
    {
      title: 'Fund Raiser',
      desc: 'Help mobilize resources and donations',
      commitment: 'Flexible',
      requirements: 'Networking and persuasion skills'
    },
  ];

  const internshipPrograms = [
    {
      title: 'School Internship',
      duration: '3-6 months',
      ageGroup: '15-18 years',
      benefits: ['Certificate', 'Experience', 'Networking', 'Letter of Recommendation'],
      focus: 'Social leadership & community engagement'
    },
    {
      title: 'College Internship',
      duration: '2-6 months',
      ageGroup: '18-24 years',
      benefits: ['Certificate', 'Project Exposure', 'Mentorship', 'LinkedIn Recommendation', 'Letter of Recommendation'],
      focus: 'NGO management & social entrepreneurship'
    },
    {
      title: 'Graduate Internship',
      duration: '3-6 months',
      ageGroup: '24+ years',
      benefits: ['Certificate', 'Project Lead Role', 'Executive Mentorship', 'Full Recommendation', 'Job Placement Assistance'],
      focus: 'Strategic initiatives & impact measurement'
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = `📋 ${activeTab.toUpperCase()} APPLICATION\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n👤 Name: ${formData.fullName}\n📧 Email: ${formData.email}\n📱 Phone: ${formData.phone}\n📍 District: ${formData.district}\n💼 Occupation: ${formData.occupation}\n🎂 Age: ${formData.age}\n🎯 Skills: ${formData.skills}\n❤️ Interest Area: ${formData.interestArea}\n🙋 Volunteer Experience: ${formData.volunteerExp}\n${activeTab === 'membership' ? `💳 Membership Type: ${formData.membershipType}` : ''}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n✅ Please confirm this ${activeTab} application.`;
    window.location.href = `https://wa.me/918763979798?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-red-600 via-red-700 to-red-800 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black mb-6 animate-slideInDown">Get Involved</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto animate-slideInUp" style={{animationDelay: '0.2s'}}>
            Join our mission to transform lives through education. Multiple ways to contribute your time, skills, and passion.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-20 bg-gradient-to-r from-red-50 to-orange-50 shadow-lg z-30 border-b-4 border-red-600">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-2 py-4">
          {[
            { id: 'membership', label: 'Membership Program', icon: Users },
            { id: 'volunteer', label: 'Volunteer Program', icon: Heart },
            { id: 'internship', label: 'Internship Program', icon: Briefcase },
            { id: 'csr', label: 'CSR Partnerships', icon: Briefcase },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Membership Program */}
      {activeTab === 'membership' && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-12 text-gray-800">Life Member Program</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
              Become a Life Member and be part of our decision-making body with exclusive benefits and opportunities.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {membershipBenefits.map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition transform hover:scale-105">
                  <h3 className="text-lg font-bold mb-2">{item.benefit}</h3>
                  <p className="text-sm opacity-90">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Membership Details */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-gray-800">Membership Details</h3>
                <div className="space-y-6">
                  {[
                    { icon: '💳', title: 'Life Membership', price: '₹5,000 (One-time)', duration: 'Lifetime validity' },
                    { icon: '🎯', title: 'Voting Rights', price: 'Yes', duration: 'In foundation decisions' },
                    { icon: '🏆', title: 'Annual Awards', price: 'Recognition', duration: 'Outstanding members' },
                    { icon: '📢', title: 'Public Profile', price: 'Featured', duration: 'On website & media' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 transition">
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.price}</p>
                      <p className="text-xs text-gray-500">{item.duration}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Form */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8 border-2 border-blue-200">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Apply Now</h3>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {[
                    { name: 'fullName', label: 'Full Name', type: 'text', required: true },
                    { name: 'email', label: 'Email Address', type: 'email', required: true },
                    { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
                    { name: 'district', label: 'District', type: 'text', required: true },
                    { name: 'occupation', label: 'Occupation', type: 'text', required: true },
                    { name: 'age', label: 'Age', type: 'number', required: true },
                    { name: 'skills', label: 'Your Skills', type: 'text', required: false },
                    { name: 'interestArea', label: 'Area of Interest', type: 'text', required: false },
                  ].map((field) => (
                    <input
                      key={field.name}
                      type={field.type}
                      name={field.name}
                      placeholder={field.label}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleInputChange}
                      required={field.required}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                    />
                  ))}
                  <select
                    name="membershipType"
                    value={formData.membershipType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                  >
                    <option value="life">Life Membership - ₹5,000</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold hover:shadow-lg transition transform hover:scale-105"
                  >
                    Submit via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Volunteer Program */}
      {activeTab === 'volunteer' && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-4 text-gray-800">Volunteer Program</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
              Choose from various volunteer roles based on your skills and availability.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {volunteerRoles.map((role, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-red-600 hover:shadow-xl transition">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{role.title}</h3>
                  <p className="text-gray-600 mb-4">{role.desc}</p>
                  <div className="space-y-2 mb-4 border-t border-gray-200 pt-4">
                    <p className="text-sm"><span className="font-bold">Time Commitment:</span> {role.commitment}</p>
                    <p className="text-sm"><span className="font-bold">Requirements:</span> {role.requirements}</p>
                  </div>
                  <button
                    onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })}
                    className="w-full px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-bold hover:shadow-lg transition text-sm"
                  >
                    Apply for This Role
                  </button>
                </div>
              ))}
            </div>

            {/* Application Form */}
            <div className="max-w-2xl mx-auto bg-gradient-to-br from-red-50 to-white rounded-xl shadow-lg p-8 border-2 border-red-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Volunteer Application</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {[
                  { name: 'fullName', label: 'Full Name', type: 'text', required: true },
                  { name: 'email', label: 'Email Address', type: 'email', required: true },
                  { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
                  { name: 'district', label: 'District', type: 'text', required: true },
                  { name: 'age', label: 'Age', type: 'number', required: true },
                  { name: 'skills', label: 'Your Skills', type: 'text', required: false },
                  { name: 'interestArea', label: 'Preferred Volunteer Role', type: 'text', required: false },
                  { name: 'volunteerExp', label: 'Previous Volunteer Experience', type: 'text', required: false },
                ].map((field) => (
                  <input
                    key={field.name}
                    type={field.type}
                    name={field.name}
                    placeholder={field.label}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleInputChange}
                    required={field.required}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition"
                  />
                ))}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-bold hover:shadow-lg transition transform hover:scale-105"
                >
                  Submit via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Internship Program */}
      {activeTab === 'internship' && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-12 text-gray-800">Internship Programs</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {internshipPrograms.map((program, idx) => (
                <div key={idx} className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-xl p-8 hover:shadow-xl transition">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{program.title}</h3>
                  <div className="space-y-3 mb-6 pb-6 border-b border-purple-200">
                    <p className="text-sm"><span className="font-bold">Duration:</span> {program.duration}</p>
                    <p className="text-sm"><span className="font-bold">Age Group:</span> {program.ageGroup}</p>
                    <p className="text-sm"><span className="font-bold">Focus:</span> {program.focus}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {program.benefits.map((benefit, bidx) => (
                        <li key={bidx} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="text-purple-600">✓</span> {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })}
                    className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-bold hover:shadow-lg transition"
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>

            {/* Application Form */}
            <div className="max-w-2xl mx-auto bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-lg p-8 border-2 border-purple-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Internship Application</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {[
                  { name: 'fullName', label: 'Full Name', type: 'text', required: true },
                  { name: 'email', label: 'Email Address', type: 'email', required: true },
                  { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
                  { name: 'age', label: 'Age', type: 'number', required: true },
                  { name: 'occupation', label: 'Current Education/Profession', type: 'text', required: true },
                  { name: 'skills', label: 'Your Skills', type: 'text', required: false },
                  { name: 'interestArea', label: 'Area of Interest', type: 'text', required: false },
                ].map((field) => (
                  <input
                    key={field.name}
                    type={field.type}
                    name={field.name}
                    placeholder={field.label}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleInputChange}
                    required={field.required}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none transition"
                  />
                ))}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-bold hover:shadow-lg transition transform hover:scale-105"
                >
                  Submit via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* CSR Partnerships */}
      {activeTab === 'csr' && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-12 text-gray-800">Corporate CSR Partnerships</h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* CSR Models */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-gray-800">Collaboration Models</h3>
                <div className="space-y-6">
                  {[
                    { title: 'Scholarship Sponsorship', desc: 'Sponsor scholarships for deserving students', icon: '🎓' },
                    { title: 'Infrastructure Support', desc: 'Build or upgrade educational facilities', icon: '🏢' },
                    { title: 'Skill Training Programs', desc: 'Sponsor skill development initiatives', icon: '🎯' },
                    { title: 'Community Health', desc: 'Healthcare and wellness programs', icon: '🏥' },
                    { title: 'Product Donations', desc: 'Contribute products for student welfare', icon: '📦' },
                    { title: 'Employee Volunteering', desc: 'Organize volunteer opportunities for staff', icon: '👥' },
                  ].map((model, idx) => (
                    <div key={idx} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-green-600 transition">
                      <div className="text-3xl mb-3">{model.icon}</div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{model.title}</h4>
                      <p className="text-gray-600 text-sm">{model.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CSR Inquiry Form */}
              <div className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg p-8 border-2 border-green-200 h-fit">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">CSR Inquiry Form</h3>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {[
                    { name: 'fullName', label: 'Company Name', type: 'text', required: true },
                    { name: 'email', label: 'Email Address', type: 'email', required: true },
                    { name: 'phone', label: 'Contact Number', type: 'tel', required: true },
                    { name: 'occupation', label: 'Contact Person', type: 'text', required: true },
                    { name: 'district', label: 'Company Location', type: 'text', required: true },
                    { name: 'skills', label: 'CSR Budget / Commitment', type: 'text', required: false },
                    { name: 'interestArea', label: 'Area of Interest', type: 'text', required: false },
                  ].map((field) => (
                    <input
                      key={field.name}
                      type={field.type}
                      name={field.name}
                      placeholder={field.label}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleInputChange}
                      required={field.required}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none transition"
                    />
                  ))}
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-bold hover:shadow-lg transition transform hover:scale-105"
                  >
                    Submit Inquiry
                  </button>
                </form>
                <div className="mt-6 pt-6 border-t border-gray-300 text-center">
                  <p className="text-gray-700 font-bold mb-2">Direct Contact</p>
                  <p className="text-gray-600 text-sm">Email: csr@niharikafoundation.org</p>
                  <p className="text-gray-600 text-sm">Phone: +91 8763-979-798</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
