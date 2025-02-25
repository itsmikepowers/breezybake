import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className="text-center text-[#5a3e20]">
        <h1 className="text-5xl font-bold mb-6">Welcome to BreezyBake</h1>
        <p className="text-2xl mb-8">Your one-stop shop for delicious baked goods</p>
        
        <div className="flex justify-center mb-10">
          <Image 
            src="/iconsquare.png" 
            alt="BreezyBake Icon" 
            width={120} 
            height={120} 
            className="rounded-full border-4 border-[#eda962]"
          />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            Browse our selection of freshly baked goods, from artisan breads to decadent pastries.
            We use only the finest ingredients to create memorable treats for any occasion.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#eda962] p-6 rounded-lg shadow-md text-[#fcfbe6]">
              <h2 className="text-xl font-bold mb-3">Our Specialties</h2>
              <p>Handcrafted pastries, artisan breads, and custom cakes made with love and the finest ingredients.</p>
            </div>
            <div className="bg-[#eda962] p-6 rounded-lg shadow-md text-[#fcfbe6]">
              <h2 className="text-xl font-bold mb-3">Fresh Daily</h2>
              <p>Every morning, our bakers create fresh batches of your favorite treats. Come early for the best selection!</p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <Link href="/shop" className="btn bg-[#eda962] text-[#fcfbe6] hover:bg-[#e09c4f]">
              Browse Our Shop
            </Link>
            <Link href="/about" className="btn bg-white text-[#eda962] border border-[#eda962] hover:bg-[#fcfbe6]">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
