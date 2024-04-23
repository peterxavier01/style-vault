import Footer from "./Footer";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <div className="px-4 md:px-8 pb-8 md:pb-14">
        <Newsletter />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
