"use client";

import { useState } from 'react';
import Layout from "../../components/Layout";
import Image from "next/image";
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaPaperPlane,
  FaUser,
  FaCommentAlt
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <Layout>
      <div className="max-w-6xl mx-auto text-[#5a3e20] px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <div className="w-24 h-1 bg-[#eda962] mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have a question about our products, 
            need to place a special order, or want to share your experience, we're here to help.
          </p>
        </div>
        
        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-[#eda962]/10 rounded-full">
                <FaMapMarkerAlt className="text-[#eda962] text-3xl" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Our Location</h3>
            <p>123 Bakery Lane</p>
            <p>San Francisco, CA 94110</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-[#eda962]/10 rounded-full">
                <FaPhone className="text-[#eda962] text-3xl" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Phone Number</h3>
            <p>(555) 123-4567</p>
            <p className="text-sm text-gray-500">Mon-Fri, 7am-7pm</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-[#eda962]/10 rounded-full">
                <FaEnvelope className="text-[#eda962] text-3xl" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p>hello@breezybake.com</p>
            <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-[#eda962]/10 rounded-full">
                <FaClock className="text-[#eda962] text-3xl" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
            <p>Mon-Fri: 7am - 7pm</p>
            <p>Sat-Sun: 8am - 5pm</p>
          </div>
        </div>
        
        {/* Contact Form and Map Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              
              {submitSuccess ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  <p>Thank you for your message! We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eda962]"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eda962]"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eda962]"
                    >
                      <option value="">Select a subject</option>
                      <option value="Order Inquiry">Order Inquiry</option>
                      <option value="Product Question">Product Question</option>
                      <option value="Custom Order">Custom Order</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <FaCommentAlt className="text-gray-400" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eda962]"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-[#eda962] hover:bg-[#e09c4f] text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        <FaPaperPlane className="mr-2" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="h-full min-h-[400px] bg-[#eda962]/10 rounded-xl flex items-center justify-center">
              <div className="text-center p-8">
                <Image 
                  src="/iconsquare.png" 
                  alt="Map placeholder" 
                  width={200} 
                  height={200} 
                  className="mx-auto mb-4 rounded-lg opacity-70"
                />
                <p className="text-lg font-medium">
                  Interactive map would be displayed here in a production environment.
                </p>
                <p className="text-sm text-gray-500">
                  For this demo, we're using a placeholder image.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="max-w-2xl mx-auto">
              Find quick answers to common questions about our bakery and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Do you offer delivery?</h3>
              <p>Yes, we offer local delivery within a 10-mile radius of our bakery. Orders must be placed at least 24 hours in advance.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How far in advance should I order a custom cake?</h3>
              <p>For custom cakes, we recommend placing your order at least one week in advance. For wedding cakes, please contact us at least one month before your event.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Do you accommodate dietary restrictions?</h3>
              <p>Yes, we offer gluten-free, dairy-free, and vegan options. Please let us know about any allergies or dietary restrictions when placing your order.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Can I place an order online?</h3>
              <p>Yes, you can place orders through our website or by calling us directly. For custom orders, we may need to discuss details over the phone or in person.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 