import Layout from "../../components/Layout";
import Image from "next/image";

export default function About() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto text-[#5a3e20]">
        <h1 className="text-4xl font-bold mb-8 text-center">About BreezyBake</h1>
        
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="md:w-1/2">
            <Image 
              src="/iconsquare.png" 
              alt="BreezyBake Logo" 
              width={300} 
              height={300} 
              className="rounded-lg shadow-md mx-auto border-4 border-[#eda962]"
            />
          </div>
          
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p>
              BreezyBake was founded in 2020 with a simple mission: to create delicious, 
              high-quality baked goods that bring joy to our customers.
            </p>
            
            <p>
              Our team of passionate bakers combines traditional techniques with innovative 
              flavors to create unique treats that keep our customers coming back for more.
            </p>
          </div>
        </div>
        
        <div className="bg-[#eda962] p-6 rounded-lg shadow-md text-[#fcfbe6] mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Quality Ingredients</h3>
              <p>We source our ingredients locally whenever possible and are committed to 
              sustainable practices in all aspects of our business.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Handcrafted with Love</h3>
              <p>Every item is made by hand with attention to detail and a passion for 
              creating the perfect texture and flavor.</p>
            </div>
          </div>
        </div>
        
        <p className="text-center text-lg">
          Whether you&apos;re looking for a special cake for a celebration or a simple 
          loaf of bread for your daily meals, we have something for everyone at BreezyBake.
        </p>
      </div>
    </Layout>
  );
} 