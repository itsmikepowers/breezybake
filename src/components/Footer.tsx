"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaPinterestP,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaHeart,
  FaArrowRight
} from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle the newsletter signup here
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };
  
  return (
    <footer className="bg-gradient-to-b from-[#eda962] to-[#e09c4f] text-white">
      {/* Top Section with Newsletter */}
      <div className="border-b border-white/20">
        <div className="container-custom py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold mb-3">Join Our Newsletter</h3>
              <p className="text-white/80 mb-4">
                Subscribe to receive updates, access to exclusive deals, and more.
              </p>
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="px-4 py-3 rounded-l-lg w-full focus:outline-none text-[#5a3e20]"
                />
                <button 
                  type="submit"
                  className="bg-[#5a3e20] hover:bg-[#4a3010] px-4 py-3 rounded-r-lg transition-colors flex items-center"
                >
                  Subscribe <FaArrowRight className="ml-2" />
                </button>
              </form>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <Image 
                src="/longicon.png" 
                alt="BreezyBake Logo" 
                width={200} 
                height={60} 
                className="mb-4"
              />
              <div className="flex space-x-4">
                <a href="#" className="bg-white text-[#eda962] p-2 rounded-full hover:bg-[#5a3e20] hover:text-white transition-colors">
                  <FaFacebookF size={18} />
                </a>
                <a href="#" className="bg-white text-[#eda962] p-2 rounded-full hover:bg-[#5a3e20] hover:text-white transition-colors">
                  <FaInstagram size={18} />
                </a>
                <a href="#" className="bg-white text-[#eda962] p-2 rounded-full hover:bg-[#5a3e20] hover:text-white transition-colors">
                  <FaTwitter size={18} />
                </a>
                <a href="#" className="bg-white text-[#eda962] p-2 rounded-full hover:bg-[#5a3e20] hover:text-white transition-colors">
                  <FaPinterestP size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">About Us</h4>
            <p className="text-white/80 mb-4">
              BreezyBake is a family-owned bakery dedicated to creating delicious, handcrafted baked goods using traditional methods and the finest ingredients.
            </p>
            <p className="flex items-center text-white/80">
              <FaHeart className="mr-2 text-white" /> Made with love since 2010
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <FaArrowRight className="mr-2 text-xs" /> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <FaArrowRight className="mr-2 text-xs" /> About Us
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <FaArrowRight className="mr-2 text-xs" /> Shop
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <FaArrowRight className="mr-2 text-xs" /> Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <FaArrowRight className="mr-2 text-xs" /> FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <FaArrowRight className="mr-2 text-xs" /> Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">Our Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <FaArrowRight className="mr-2 text-xs" /> Artisan Breads
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <FaArrowRight className="mr-2 text-xs" /> Custom Cakes
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <FaArrowRight className="mr-2 text-xs" /> Pastries
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <FaArrowRight className="mr-2 text-xs" /> Cookies & Treats
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <FaArrowRight className="mr-2 text-xs" /> Gluten-Free Options
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <FaArrowRight className="mr-2 text-xs" /> Seasonal Specials
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 text-white" />
                <span className="text-white/80">123 Bakery Lane<br />San Francisco, CA 94110</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-white" />
                <span className="text-white/80">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-white" />
                <span className="text-white/80">hello@breezybake.com</span>
              </li>
              <li className="flex items-center">
                <FaClock className="mr-3 text-white" />
                <span className="text-white/80">Mon-Fri: 7am - 7pm<br />Sat-Sun: 8am - 5pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Copyright */}
      <div className="bg-[#5a3e20]/20 py-4">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/80 mb-2 md:mb-0">
            © {new Date().getFullYear()} BreezyBake. All rights reserved.
          </p>
          <div className="flex items-center">
            <Image 
              src="/iconsquare.png" 
              alt="BreezyBake Icon" 
              width={30} 
              height={30} 
              className="mr-2"
            />
            <p className="text-sm text-white/80">
              <span className="hidden md:inline">Crafted with love in </span>San Francisco, CA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 