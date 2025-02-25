"use client";

import Layout from "../../components/Layout";
import Image from "next/image";
import { useState } from "react";
import { 
  FaBreadSlice, 
  FaBirthdayCake, 
  FaCookieBite, 
  FaMugHot, 
  FaShoppingCart, 
  FaStar, 
  FaHeart, 
  FaFilter,
  FaSearch,
  FaLeaf,
  FaAward,
  FaShippingFast
} from 'react-icons/fa';

// Product categories
const categories = [
  { id: "all", name: "All Products", icon: <FaShoppingCart /> },
  { id: "bread", name: "Artisan Breads", icon: <FaBreadSlice /> },
  { id: "cakes", name: "Cakes & Pastries", icon: <FaBirthdayCake /> },
  { id: "cookies", name: "Cookies & Treats", icon: <FaCookieBite /> },
  { id: "beverages", name: "Beverages", icon: <FaMugHot /> }
];

// Enhanced product data with categories and ratings
interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  bestseller: boolean;
  tags: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Sourdough Bread",
    description: "Traditional sourdough with a crispy crust and soft interior. Made with our 10-year-old starter.",
    price: "$6.99",
    image: "/iconsquare.png",
    category: "bread",
    rating: 4.8,
    reviews: 124,
    bestseller: true,
    tags: ["organic", "vegan"]
  },
  {
    id: 2,
    name: "Chocolate Croissant",
    description: "Buttery, flaky croissant filled with rich Belgian chocolate. Perfect with your morning coffee.",
    price: "$3.99",
    image: "/iconsquare.png",
    category: "cakes",
    rating: 4.9,
    reviews: 87,
    bestseller: true,
    tags: ["vegetarian"]
  },
  {
    id: 3,
    name: "Blueberry Muffin",
    description: "Moist muffin packed with fresh organic blueberries and topped with a crunchy streusel.",
    price: "$2.99",
    image: "/iconsquare.png",
    category: "cakes",
    rating: 4.7,
    reviews: 56,
    bestseller: false,
    tags: ["vegetarian"]
  },
  {
    id: 4,
    name: "Cinnamon Roll",
    description: "Soft roll with cinnamon swirl and cream cheese frosting. Our weekend special!",
    price: "$4.50",
    image: "/iconsquare.png",
    category: "cakes",
    rating: 4.9,
    reviews: 103,
    bestseller: true,
    tags: ["vegetarian"]
  },
  {
    id: 5,
    name: "Artisan Baguette",
    description: "Traditional French baguette with a crispy crust and light, airy interior.",
    price: "$4.99",
    image: "/iconsquare.png",
    category: "bread",
    rating: 4.6,
    reviews: 42,
    bestseller: false,
    tags: ["vegan"]
  },
  {
    id: 6,
    name: "Chocolate Chip Cookies",
    description: "Classic cookies with premium chocolate chunks and a soft, chewy center.",
    price: "$1.99",
    image: "/iconsquare.png",
    category: "cookies",
    rating: 4.8,
    reviews: 91,
    bestseller: true,
    tags: ["vegetarian"]
  },
  {
    id: 7,
    name: "Cappuccino",
    description: "Rich espresso with steamed milk and a light layer of foam. Available hot or iced.",
    price: "$3.50",
    image: "/iconsquare.png",
    category: "beverages",
    rating: 4.7,
    reviews: 68,
    bestseller: false,
    tags: ["vegetarian"]
  },
  {
    id: 8,
    name: "Gluten-Free Brownie",
    description: "Fudgy chocolate brownie made with gluten-free flour and premium cocoa.",
    price: "$3.25",
    image: "/iconsquare.png",
    category: "cookies",
    rating: 4.5,
    reviews: 34,
    bestseller: false,
    tags: ["gluten-free", "vegetarian"]
  }
];

// Client component wrapper for interactive elements
export default function Shop() {
  return (
    <Layout>
      <ShopContent />
    </Layout>
  );
}

// This would normally be a client component with "use client" directive
// For demo purposes, we're simulating the interactive behavior
function ShopContent() {
  // In a real implementation, these would be useState hooks
  const selectedCategory = "all";
  const searchQuery = "";
  
  // Filter products based on selected category and search query
  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    const searchMatch = searchQuery === "" || (product.name as string).toLowerCase().includes((searchQuery as string).toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="max-w-7xl mx-auto text-[#5a3e20] px-4">
      {/* Hero Banner */}
      <div className="relative rounded-xl overflow-hidden mb-12 shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-[#5a3e20]/80 to-transparent z-10"></div>
        <div className="relative h-64 md:h-80 bg-[#eda962]/20">
          <Image 
            src="/iconsquare.png"
            alt="Fresh Baked Goods"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center z-20">
          <div className="px-8 md:px-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Fresh from the Oven</h1>
            <p className="text-xl text-white/90 mb-6 max-w-md">
              Discover our handcrafted selection of breads, pastries, and treats
            </p>
            <div className="flex space-x-4">
              <button className="bg-[#eda962] hover:bg-[#e09c4f] text-white px-6 py-3 rounded-lg font-bold transition-colors flex items-center">
                <FaShoppingCart className="mr-2" /> Shop Now
              </button>
              <button className="bg-white hover:bg-gray-100 text-[#5a3e20] px-6 py-3 rounded-lg font-bold transition-colors">
                Today's Specials
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Benefits Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-[#eda962]/10 p-4 rounded-lg flex items-center">
          <div className="bg-[#eda962] p-3 rounded-full mr-4">
            <FaLeaf className="text-white text-xl" />
          </div>
          <div>
            <h3 className="font-bold">Fresh Ingredients</h3>
            <p className="text-sm">Locally sourced & organic</p>
          </div>
        </div>
        <div className="bg-[#eda962]/10 p-4 rounded-lg flex items-center">
          <div className="bg-[#eda962] p-3 rounded-full mr-4">
            <FaAward className="text-white text-xl" />
          </div>
          <div>
            <h3 className="font-bold">Award-Winning</h3>
            <p className="text-sm">Recognized for excellence</p>
          </div>
        </div>
        <div className="bg-[#eda962]/10 p-4 rounded-lg flex items-center">
          <div className="bg-[#eda962] p-3 rounded-full mr-4">
            <FaShippingFast className="text-white text-xl" />
          </div>
          <div>
            <h3 className="font-bold">Fast Delivery</h3>
            <p className="text-sm">Order online for pickup or delivery</p>
          </div>
        </div>
      </div>
      
      {/* Search and Filter Section */}
      <div className="mb-10 flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-3xl font-bold mb-6 md:mb-0">Our Products</h2>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eda962] w-full sm:w-64"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          
          <div className="relative">
            <select className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#eda962] bg-white w-full sm:w-48">
              <option value="">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
            <FaFilter className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
      </div>
      
      {/* Category Navigation */}
      <div className="mb-10 overflow-x-auto">
        <div className="flex space-x-2 min-w-max pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full flex items-center whitespace-nowrap transition-colors ${
                selectedCategory === category.id
                  ? "bg-[#eda962] text-white font-bold"
                  : "bg-[#eda962]/10 text-[#5a3e20] hover:bg-[#eda962]/20"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Featured Products Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-6 flex items-center">
          <FaStar className="text-[#eda962] mr-2" /> Bestsellers
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products
            .filter(product => product.bestseller)
            .slice(0, 4)
            .map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-[#f8d4a9]/30">
                <div className="relative">
                  <div className="bg-[#eda962] p-4 flex justify-center h-48">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      width={150} 
                      height={150} 
                      className="h-40 w-40 object-cover"
                    />
                  </div>
                  {product.bestseller && (
                    <div className="absolute top-2 left-2 bg-[#5a3e20] text-white text-xs font-bold px-2 py-1 rounded">
                      BESTSELLER
                    </div>
                  )}
                  <button className="absolute top-2 right-2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors">
                    <FaHeart className="text-[#eda962]" />
                  </button>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center text-[#eda962]">
                      <FaStar />
                      <span className="ml-1 text-[#5a3e20] font-bold">{product.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500 ml-2">({product.reviews} reviews)</span>
                  </div>
                  
                  <h2 className="text-lg font-bold mb-1">{product.name}</h2>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-[#eda962]/10 text-[#5a3e20] px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-lg">{product.price}</p>
                    <button className="bg-[#eda962] text-white hover:bg-[#e09c4f] px-3 py-2 rounded-lg flex items-center transition-colors">
                      <FaShoppingCart className="mr-1" /> Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      
      {/* All Products Grid */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-6">All Products</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-[#f8d4a9]/30">
              <div className="relative">
                <div className="bg-[#eda962] p-4 flex justify-center h-48">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    width={150} 
                    height={150} 
                    className="h-40 w-40 object-cover"
                  />
                </div>
                {product.bestseller && (
                  <div className="absolute top-2 left-2 bg-[#5a3e20] text-white text-xs font-bold px-2 py-1 rounded">
                    BESTSELLER
                  </div>
                )}
                <button className="absolute top-2 right-2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors">
                  <FaHeart className="text-[#eda962]" />
                </button>
              </div>
              
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <div className="flex items-center text-[#eda962]">
                    <FaStar />
                    <span className="ml-1 text-[#5a3e20] font-bold">{product.rating}</span>
                  </div>
                  <span className="text-xs text-gray-500 ml-2">({product.reviews} reviews)</span>
                </div>
                
                <h2 className="text-lg font-bold mb-1">{product.name}</h2>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-[#eda962]/10 text-[#5a3e20] px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="font-bold text-lg">{product.price}</p>
                  <button className="bg-[#eda962] text-white hover:bg-[#e09c4f] px-3 py-2 rounded-lg flex items-center transition-colors">
                    <FaShoppingCart className="mr-1" /> Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Special Offers Banner */}
      <div className="bg-gradient-to-r from-[#eda962] to-[#e09c4f] rounded-xl p-8 mb-16 text-white shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Subscribe & Save 10%</h3>
            <p className="max-w-md">
              Sign up for our weekly subscription box and get fresh baked goods delivered to your door every week.
            </p>
          </div>
          <div>
            <button className="bg-white text-[#eda962] hover:bg-gray-100 px-6 py-3 rounded-lg font-bold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Customer Reviews Section */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold mb-2">What Our Customers Say</h3>
          <p className="text-gray-600">Don't just take our word for it</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#f8d4a9]/30">
            <div className="flex text-[#eda962] mb-2">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p className="mb-4 italic">"The sourdough bread is absolutely amazing! It's become a weekend tradition for our family."</p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#eda962] mr-3"></div>
              <div>
                <p className="font-bold">Michael T.</p>
                <p className="text-xs text-gray-500">Loyal customer for 2 years</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#f8d4a9]/30">
            <div className="flex text-[#eda962] mb-2">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p className="mb-4 italic">"Their custom cakes are works of art! My daughter's birthday cake was not only beautiful but delicious too."</p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#eda962] mr-3"></div>
              <div>
                <p className="font-bold">Sarah K.</p>
                <p className="text-xs text-gray-500">Loyal customer for 1 year</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#f8d4a9]/30">
            <div className="flex text-[#eda962] mb-2">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p className="mb-4 italic">"I appreciate that they offer gluten-free options that actually taste good! The brownies are my favorite."</p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#eda962] mr-3"></div>
              <div>
                <p className="font-bold">Jamie L.</p>
                <p className="text-xs text-gray-500">Loyal customer for 6 months</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 