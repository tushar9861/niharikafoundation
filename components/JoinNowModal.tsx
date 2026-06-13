'use client';

import React, { useState } from 'react';
import { X, Mail, Phone, User, CheckCircle, AlertCircle, Send } from 'lucide-react';

interface JoinNowModalProps {
  isOpen: boolean;
  onClose: () => void;
  programType?: 'scholarship' | 'volunteer' | 'membership' | 'general';
}

export function JoinNowModal({ isOpen, onClose, programType = 'general' }: JoinNowModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    district: '',
    programInterest: programType,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  // Form validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.district.trim()) {
      newErrors.district = 'District is required';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    // Prepare WhatsApp message
    const message = `Hello! I want to join Niharika Foundation.

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
District: ${formData.district}
Program Interest: ${formData.programInterest.toUpperCase()}

Please contact me with more details.`;

    const whatsappUrl = `https://wa.me/918763979798?text=${encodeURIComponent(message)}`;

    // Simulate brief loading for better UX
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      
      // Open WhatsApp after success
      window.open(whatsappUrl, '_blank');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        resetForm();
      }, 3000);
    }, 1000);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      district: '',
      programInterest: programType,
    });
    setErrors({});
    setSubmitted(false);
    onClose();
  };

  const handleClose = () => {
    if (!submitted) {
      resetForm();
    }
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const programLabels = {
    scholarship: 'Medha Samman Scholarship',
    volunteer: 'Volunteer Program',
    membership: 'Life Membership',
    general: 'General Inquiry',
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full pointer-events-auto transform transition-all duration-300 animate-fadeIn"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-t-2xl">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition transform hover:scale-110"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-black pr-10">Join Niharika Foundation</h2>
            <p className="text-red-100 text-sm mt-2">
              {programLabels[formData.programInterest as keyof typeof programLabels]}
            </p>
          </div>

          {/* Success State */}
          {submitted ? (
            <div className="p-8 text-center animate-fadeIn">
              <div className="flex justify-center mb-4">
                <CheckCircle size={60} className="text-green-600 animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Thank You!</h3>
              <p className="text-gray-600 mb-4">
                Your application has been submitted. We&apos;re opening WhatsApp to continue the conversation.
              </p>
              <p className="text-sm text-gray-500">
                Redirecting to WhatsApp in a moment...
              </p>
            </div>
          ) : (
            /* Form State */
            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                      errors.fullName
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 focus:border-red-600'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                      errors.email
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 focus:border-red-600'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXXXXXXXX"
                    className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                      errors.phone
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 focus:border-red-600'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* District */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  District *
                </label>
                <select
                  name="district"
                  value={formData.district}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                    errors.district
                      ? 'border-red-500 focus:border-red-600'
                      : 'border-gray-300 focus:border-red-600'
                  }`}
                >
                  <option value="">Select your district</option>
                  <option value="Baleshwar">Baleshwar</option>
                  <option value="Bhadrak">Bhadrak</option>
                  <option value="Cuttack">Cuttack</option>
                  <option value="Dhenkanal">Dhenkanal</option>
                  <option value="Ganjam">Ganjam</option>
                  <option value="Jagatsinghpur">Jagatsinghpur</option>
                  <option value="Jajpur">Jajpur</option>
                  <option value="Kendrapara">Kendrapara</option>
                  <option value="Kendujhar">Kendujhar</option>
                  <option value="Khordha">Khordha</option>
                  <option value="Koraput">Koraput</option>
                  <option value="Malkangiri">Malkangiri</option>
                  <option value="Mayurbhanj">Mayurbhanj</option>
                  <option value="Nabarangpur">Nabarangpur</option>
                  <option value="Nayagarh">Nayagarh</option>
                  <option value="Nuapada">Nuapada</option>
                  <option value="Puri">Puri</option>
                  <option value="Rayagada">Rayagada</option>
                  <option value="Sambalpur">Sambalpur</option>
                  <option value="Subarnapur">Subarnapur</option>
                  <option value="Sundargarh">Sundargarh</option>
                </select>
                {errors.district && (
                  <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.district}
                  </p>
                )}
              </div>

              {/* Program Interest */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Program Interest
                </label>
                <select
                  name="programInterest"
                  value={formData.programInterest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition"
                >
                  <option value="general">General Inquiry</option>
                  <option value="scholarship">Medha Samman Scholarship</option>
                  <option value="volunteer">Volunteer Program</option>
                  <option value="membership">Life Membership</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-3 rounded-lg hover:shadow-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send to WhatsApp
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-500 mt-4">
                By submitting, you agree to share your details with us via WhatsApp
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
