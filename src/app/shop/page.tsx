import Layout from "../../components/Layout";
import Image from "next/image";

// Sample product data
const products = [
  {
    id: 1,
    name: "Sourdough Bread",
    description: "Traditional sourdough with a crispy crust and soft interior",
    price: "$6.99",
    image: "/iconsquare.png"
  },
  {
    id: 2,
    name: "Chocolate Croissant",
    description: "Buttery, flaky croissant filled with rich chocolate",
    price: "$3.99",
    image: "/iconsquare.png"
  },
  {
    id: 3,
    name: "Blueberry Muffin",
    description: "Moist muffin packed with fresh blueberries",
    price: "$2.99",
    image: "/iconsquare.png"
  },
  {
    id: 4,
    name: "Cinnamon Roll",
    description: "Soft roll with cinnamon swirl and cream cheese frosting",
    price: "$4.50",
    image: "/iconsquare.png"
  }
];

export default function Shop() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto text-[#5a3e20]">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-[#f8d4a9]">
              <div className="bg-[#eda962] p-4 flex justify-center">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  width={150} 
                  height={150} 
                  className="h-40 w-40 object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-lg">{product.price}</p>
                  <button className="btn bg-[#eda962] text-[#fcfbe6] hover:bg-[#e09c4f]">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
} 