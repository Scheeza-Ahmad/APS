import React, { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  // State to track field values and errors
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // Validate all fields
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // Validate form
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Stop submission
    }

    // Prepare form data for API
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("access_key", "e2e81402-38a4-480d-8624-953f9caa492e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your message has been sent successfully.',
        timer: 3000,
        showConfirmButton: false,
      });
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Something went wrong. Please try again later.',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with fade-up animation */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl font-heading font-bold text-secondary uppercase tracking-wider mb-4 mt-14">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body font-light">
            We’d love to hear from you. Send us a message and we’ll respond as soon as possible.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-fadeInLeft">
            <h2 className="text-2xl font-subheading font-semibold text-secondary mb-10 mt-6 uppercase tracking-wide">
              Send Message
            </h2>
            <form className="space-y-6" onSubmit={onSubmit} noValidate>
              {/* Name Field */}
              <div className="group">
                <label htmlFor="name" className="block text-sm font-body font-medium text-gray-700 mb-1 transition-colors group-hover:text-secondary">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-300 bg-gray-50 focus:bg-white text-gray-900 font-body ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 font-body">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="group">
                <label htmlFor="email" className="block text-sm font-body font-medium text-gray-700 mb-1 transition-colors group-hover:text-secondary">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-300 bg-gray-50 focus:bg-white text-gray-900 font-body ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 font-body">{errors.email}</p>
                )}
              </div>

              {/* Subject Field */}
              <div className="group">
                <label htmlFor="subject" className="block text-sm font-body font-medium text-gray-700 mb-1 transition-colors group-hover:text-secondary">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-300 bg-gray-50 focus:bg-white text-gray-900 font-body ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="How can we help?"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1 font-body">{errors.subject}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="group">
                <label htmlFor="message" className="block text-sm font-body font-medium text-gray-700 mb-1 transition-colors group-hover:text-secondary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-300 bg-gray-50 focus:bg-white text-gray-900 font-body ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your message..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1 font-body">{errors.message}</p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-secondary text-white font-subheading font-semibold py-4 px-6 rounded-lg hover:bg-secondary-dark transform transition duration-300 hover:scale-105 hover:shadow-lg uppercase tracking-wide"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Info Cards */}
          <div className="space-y-8 animate-fadeInRight">
            <div className="bg-white rounded-2xl shadow-xl p-8 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-subheading font-semibold text-secondary mb-6 uppercase tracking-wide">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 text-secondary text-2xl mr-4 transition-transform group-hover:scale-110">📍</div>
                  <div className="font-body text-gray-700">
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">Haji Ghaljai Kalai, Afridi Road, Mera Mashogaggar, Badaber, Peshawar, Pakistan</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="flex-shrink-0 text-secondary text-2xl mr-4 transition-transform group-hover:scale-110">📞</div>
                  <div className="font-body text-gray-700">
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="flex-shrink-0 text-secondary text-2xl mr-4 transition-transform group-hover:scale-110">✉️</div>
                  <div className="font-body text-gray-700">
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@alipublicschool.com.pk</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="flex-shrink-0 text-secondary text-2xl mr-4 transition-transform group-hover:scale-110">🕒</div>
                  <div className="font-body text-gray-700">
                    <p className="font-medium">Office Hours</p>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-subheading font-semibold text-secondary mb-4 uppercase tracking-wide">
                Our Location
              </h2>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center text-gray-500 overflow-hidden relative group">
                <span className="z-10 font-body">Map will be embedded here</span>
                <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations (keep as before) */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out forwards; }
        .animate-fadeInRight { animation: fadeInRight 0.8s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default Contact;