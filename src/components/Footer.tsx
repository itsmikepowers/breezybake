import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#eda962] text-[#fcfbe6] p-6 mt-auto border-t border-[#f8d4a9]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <Image 
              src="/iconsquare.png" 
              alt="BreezyBake Icon" 
              width={40} 
              height={40} 
              className="mr-3"
            />
            <p className="text-sm">© 2024 BreezyBake. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="/" className="text-sm hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm hover:text-white transition-colors">
              About
            </Link>
            <Link href="/shop" className="text-sm hover:text-white transition-colors">
              Shop
            </Link>
            <Link href="#" className="text-sm hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 