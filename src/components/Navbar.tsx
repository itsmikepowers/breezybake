import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">BreezyBake</div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/shop" className="text-white hover:text-gray-300">
              Shop
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 