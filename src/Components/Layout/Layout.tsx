import type { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Layout.css';

type LayoutProps = {
  /** Styles applied only to the nav. Typically this will be the nav bg-color. */
  navClassName: string;
  /** Styles applied to the whole layout component. */
  className?: string;
  children: ReactNode;
};

const Layout = ({ navClassName, className, children }: LayoutProps) => {
  return (
    <div className={`page ${className ?? ''}`}>
      <Navbar className={navClassName} />
      <div className="page-top-spacer" />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
