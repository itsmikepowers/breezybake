"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize to determine if mobile view
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest('.mobile-menu') && !target.closest('.hamburger-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#eda962] p-4 border-b border-[#f8d4a9] relative z-50">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/longicon.png" 
              alt="BreezyBake Logo" 
              width={180} 
              height={50} 
              className="h-auto"
              priority
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="text-[#fcfbe6] hover:text-white font-bold transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-[#fcfbe6] hover:text-white font-bold transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/shop" className="text-[#fcfbe6] hover:text-white font-bold transition-colors">
              Shop
            </Link>
          </li>
        </ul>
        
        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden hamburger-button p-2 text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FaTimes size={24} />
          ) : (
            <FaBars size={24} />
          )}
        </button>
      </div>
      
      {/* Mobile Slideout Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-[#eda962] shadow-lg transform transition-transform duration-300 ease-in-out z-50 mobile-menu ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Close menu"
          >
            <FaTimes size={24} />
          </button>
        </div>
        
        <div className="flex justify-center mb-6">
          <Image 
            src="/longicon.png" 
            alt="BreezyBake Logo" 
            width={140} 
            height={40} 
            className="h-auto"
          />
        </div>
        
        <ul className="flex flex-col space-y-4 p-4">
          <li className="border-b border-[#f8d4a9] pb-2">
            <Link 
              href="/" 
              className="text-[#fcfbe6] hover:text-white font-bold text-lg block py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="border-b border-[#f8d4a9] pb-2">
            <Link 
              href="/about" 
              className="text-[#fcfbe6] hover:text-white font-bold text-lg block py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="border-b border-[#f8d4a9] pb-2">
            <Link 
              href="/shop" 
              className="text-[#fcfbe6] hover:text-white font-bold text-lg block py-2"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
          </li>
        </ul>
      </div>
      
      {/* Overlay when mobile menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar; 