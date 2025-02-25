import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-auto">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2024 BreezyBake. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="/" className="text-sm hover:text-gray-300">
              Home
            </Link>
            <Link href="/about" className="text-sm hover:text-gray-300">
              About
            </Link>
            <Link href="/shop" className="text-sm hover:text-gray-300">
              Shop
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 