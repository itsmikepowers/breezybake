import Layout from "../../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">About BreezyBake</h1>
        
        <div className="space-y-6">
          <p>
            BreezyBake was founded in 2020 with a simple mission: to create delicious, 
            high-quality baked goods that bring joy to our customers.
          </p>
          
          <p>
            Our team of passionate bakers combines traditional techniques with innovative 
            flavors to create unique treats that keep our customers coming back for more.
          </p>
          
          <p>
            We source our ingredients locally whenever possible and are committed to 
            sustainable practices in all aspects of our business.
          </p>
          
          <p>
            Whether you're looking for a special cake for a celebration or a simple 
            loaf of bread for your daily meals, we have something for everyone at BreezyBake.
          </p>
        </div>
      </div>
    </Layout>
  );
} 