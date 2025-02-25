import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow container-custom py-8">
        <div className="bg-white rounded-lg p-6">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 