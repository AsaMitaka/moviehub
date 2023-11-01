import Footer from './footer/footer';
import Header from './header/header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen">
      <Header />
      <div className="container min-h-full flex flex-col mx-auto max-w-5xl lg:max-w-7xl xl:px-30">
        <div className="flex h-full mt-5">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
