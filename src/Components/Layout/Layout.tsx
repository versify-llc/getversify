import type { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

type LayoutProps = {
  navBackgroundClass: string;
  className?: string;
  children: ReactNode;
};

const Layout = ({ navBackgroundClass, className, children }: LayoutProps) => {
  return (
    <div className={className}>
      <Navbar backgroundClass={navBackgroundClass} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
