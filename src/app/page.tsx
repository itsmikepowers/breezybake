import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to BreezyBake</h1>
        <p className="text-xl mb-8">Your one-stop shop for delicious baked goods</p>
        <div className="max-w-2xl mx-auto">
          <p className="mb-4">
            Browse our selection of freshly baked goods, from artisan breads to decadent pastries.
            We use only the finest ingredients to create memorable treats for any occasion.
          </p>
          <p>
            Visit our shop page to see our current offerings or learn more about our story on the about page.
          </p>
        </div>
      </div>
    </Layout>
  );
}
