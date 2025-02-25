import Layout from "../../components/Layout";
import Image from "next/image";
import { 
  FaHistory, 
  FaLeaf, 
  FaHeart, 
  FaUsers, 
  FaMedal, 
  FaHandsHelping, 
  FaUtensils, 
  FaQuoteLeft, 
  FaQuoteRight,
  FaClock,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';

// Team members data
const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Head Baker",
    bio: "With 15 years of experience, Sarah leads our baking team with creativity and precision.",
    image: "/iconsquare.png"
  },
  {
    name: "Michael Chen",
    role: "Pastry Chef",
    bio: "Michael specializes in French pastries and brings international flair to our offerings.",
    image: "/iconsquare.png"
  },
  {
    name: "Emma Rodriguez",
    role: "Cake Designer",
    bio: "Emma's artistic background helps her create stunning custom cakes for any occasion.",
    image: "/iconsquare.png"
  }
];

export default function About() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto text-[#5a3e20] px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Our Story</h1>
          <div className="w-24 h-1 bg-[#eda962] mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto italic">
            Crafting delicious memories since 2010
          </p>
        </div>
        
        {/* About Us Section with Timeline */}
        <div className="flex flex-col md:flex-row gap-12 mb-20 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <Image 
                src="/iconsquare.png" 
                alt="BreezyBake Bakery" 
                width={500} 
                height={500} 
                className="rounded-lg shadow-xl border-4 border-[#eda962] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#eda962] p-4 rounded-lg shadow-lg">
                <p className="text-white font-bold text-xl">Est. 2010</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <FaHistory className="text-[#eda962] text-3xl" />
              <h2 className="text-3xl font-bold">Our Journey</h2>
            </div>
            
            <div className="border-l-4 border-[#eda962] pl-6 space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2">2010 - The Beginning</h3>
                <p>
                  BreezyBake started as a small family kitchen operation, selling at local farmers' markets.
                  Our sourdough bread quickly became a neighborhood favorite.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">2015 - First Storefront</h3>
                <p>
                  After growing our customer base, we opened our first brick-and-mortar location,
                  expanding our menu to include pastries and custom cakes.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">2020 - Award-Winning Bakery</h3>
                <p>
                  BreezyBake won "Best Local Bakery" and expanded to include online ordering
                  and nationwide shipping of our signature cookie boxes.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Values Section */}
        <div className="bg-gradient-to-br from-[#eda962]/10 to-[#f8d4a9]/30 p-10 rounded-2xl shadow-md mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-[#eda962] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 border-t-4 border-[#eda962]">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-[#eda962]/10 rounded-full">
                  <FaLeaf className="text-[#eda962] text-4xl" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Quality Ingredients</h3>
              <p className="text-center">
                We source organic, locally-grown ingredients whenever possible, supporting local farmers and ensuring the freshest flavors.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 border-t-4 border-[#eda962]">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-[#eda962]/10 rounded-full">
                  <FaHeart className="text-[#eda962] text-4xl" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Handcrafted with Love</h3>
              <p className="text-center">
                Every item is made by hand with meticulous attention to detail, following traditional methods passed down through generations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 border-t-4 border-[#eda962]">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-[#eda962]/10 rounded-full">
                  <FaHandsHelping className="text-[#eda962] text-4xl" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Community First</h3>
              <p className="text-center">
                We're committed to giving back through donations to local food banks, hosting community events, and supporting local causes.
              </p>
            </div>
          </div>
        </div>
        
        {/* Meet Our Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaUsers className="text-[#eda962] text-3xl" />
              <h2 className="text-3xl font-bold">Meet Our Team</h2>
            </div>
            <p className="max-w-2xl mx-auto text-lg">
              The talented individuals who pour their passion and expertise into every creation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                <div className="h-64 relative overflow-hidden">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#eda962] font-medium mb-3">{member.role}</p>
                  <p>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonial Section */}
        <div className="bg-[#eda962] text-white p-10 rounded-2xl shadow-lg mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <FaQuoteLeft className="text-4xl opacity-50 mb-6 mx-auto" />
            <p className="text-xl md:text-2xl italic mb-6">
              BreezyBake has been our go-to bakery for years. Their attention to detail and commitment to quality is unmatched. 
              Every bite is pure joy!
            </p>
            <FaQuoteRight className="text-4xl opacity-50 mb-6 mx-auto" />
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image 
                  src="/iconsquare.png" 
                  alt="Customer" 
                  width={64} 
                  height={64} 
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-bold">Jessica Williams</p>
                <p className="opacity-75">Loyal Customer since 2012</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Visit Us Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Visit Our Bakery</h2>
            <div className="w-20 h-1 bg-[#eda962] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg">
              Stop by to experience the aroma of freshly baked goods and enjoy our warm atmosphere
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="mr-4 mt-1">
                <FaMapMarkerAlt className="text-[#eda962] text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p>123 Bakery Lane</p>
                <p>San Francisco, CA 94110</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="mr-4 mt-1">
                <FaClock className="text-[#eda962] text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Hours</h3>
                <p>Monday - Friday: 7am - 7pm</p>
                <p>Saturday - Sunday: 8am - 5pm</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="mr-4 mt-1">
                <FaPhone className="text-[#eda962] text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Contact</h3>
                <p>(555) 123-4567</p>
                <p className="flex items-center">
                  <FaEnvelope className="mr-2" /> hello@breezybake.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 