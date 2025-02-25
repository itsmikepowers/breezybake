import Layout from "../../components/Layout";

// Sample product data
const products = [
  {
    id: 1,
    name: "Sourdough Bread",
    description: "Traditional sourdough with a crispy crust and soft interior",
    price: "$6.99"
  },
  {
    id: 2,
    name: "Chocolate Croissant",
    description: "Buttery, flaky croissant filled with rich chocolate",
    price: "$3.99"
  },
  {
    id: 3,
    name: "Blueberry Muffin",
    description: "Moist muffin packed with fresh blueberries",
    price: "$2.99"
  },
  {
    id: 4,
    name: "Cinnamon Roll",
    description: "Soft roll with cinnamon swirl and cream cheese frosting",
    price: "$4.50"
  }
];

export default function Shop() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="font-bold text-lg">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
} 