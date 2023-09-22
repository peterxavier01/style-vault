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
      <Newsletter />
      <Footer />
    </>
  );
};

export default Layout;
