import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { FaBreadSlice, FaBirthdayCake, FaCookieBite, FaShoppingBasket, FaLeaf, FaAward, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

export default function Home() {
  return (
    <Layout>
      <div className="text-center text-[#5a3e20]">
        {/* Hero Section with simplified styling */}
        <div className="py-12 px-4 mb-12 to-white rounded-lg shadow-sm">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to BreezyBake</h1>
          <p className="text-2xl mb-8">Your one-stop shop for delicious baked goods</p>
          
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Image 
                src="/iconsquare.png" 
                alt="BreezyBake Icon" 
                width={150} 
                height={150} 
                className="rounded-full border-4 border-[#eda962] shadow-lg"
              />
            </div>
          </div>
          
          <p className="text-xl max-w-2xl mx-auto mb-8 italic">
            &ldquo;Baking happiness into every bite since 2010&rdquo;
          </p>
        </div>
        
        {/* Featured Products Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center justify-center">
            <FaBreadSlice size={32} className="mr-3 text-[#eda962]" />
            Our Most Popular Treats
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border border-[#eda962]/20 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-[#eda962]/10 rounded-full">
                  <FaBreadSlice size={48} className="text-[#eda962]" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Artisan Breads</h3>
              <p>Handcrafted sourdough, whole grain, and specialty breads baked fresh daily.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-[#eda962]/20 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-[#eda962]/10 rounded-full">
                  <FaBirthdayCake size={48} className="text-[#eda962]" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Custom Cakes</h3>
              <p>Beautiful, delicious cakes for any occasion, made with premium ingredients.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-[#eda962]/20 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-[#eda962]/10 rounded-full">
                  <FaCookieBite size={48} className="text-[#eda962]" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Gourmet Cookies</h3>
              <p>From classic chocolate chip to exotic flavors, our cookies are always a hit.</p>
            </div>
          </div>
        </div>
        
        {/* Why Choose Us Section */}
        <div className="py-12 px-4 mb-16 rounded-lg">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">Why Choose BreezyBake?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
                <div className="mr-4 mt-1">
                  <FaLeaf size={28} className="text-[#eda962]" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-2">Premium Ingredients</h3>
                  <p>We source only the finest organic and locally-sourced ingredients for our baked goods.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
                <div className="mr-4 mt-1">
                  <FaAward size={28} className="text-[#eda962]" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-2">Award-Winning Recipes</h3>
                  <p>Our master bakers have perfected recipes that have won regional and national competitions.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
                <div className="mr-4 mt-1">
                  <FaClock size={28} className="text-[#eda962]" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-2">Fresh Daily</h3>
                  <p>Every morning, our bakers create fresh batches of your favorite treats. Come early for the best selection!</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
                <div className="mr-4 mt-1">
                  <FaMapMarkerAlt size={28} className="text-[#eda962]" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-2">Community Focused</h3>
                  <p>We&apos;re proud to be a local business that supports our community through events and partnerships.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action Section */}
        <div className="max-w-4xl mx-auto mb-16 bg-[#eda962]/10 p-8 rounded-lg border border-[#eda962]/30">
          <h2 className="text-3xl font-bold mb-4">Ready to Treat Yourself?</h2>
          <p className="text-xl mb-8">Explore our full selection of freshly baked goods or learn more about our bakery&apos;s story.</p>
          
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <Link href="/shop" className="btn bg-[#eda962] text-white hover:bg-[#e09c4f] px-8 py-3 rounded-lg flex items-center justify-center shadow-md transition-all hover:shadow-lg">
              <FaShoppingBasket size={24} className="mr-2" />
              Browse Our Shop
            </Link>
            <Link href="/about" className="btn bg-white text-[#eda962] border border-[#eda962] hover:bg-[#f8d4a9]/20 px-8 py-3 rounded-lg flex items-center justify-center shadow-md transition-all hover:shadow-lg">
              About Our Bakery
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
