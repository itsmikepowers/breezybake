import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-[#eda962] p-4 border-b border-[#f8d4a9]">
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
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-[#fcfbe6] hover:text-white font-medium transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-[#fcfbe6] hover:text-white font-medium transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/shop" className="text-[#fcfbe6] hover:text-white font-medium transition-colors">
              Shop
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 