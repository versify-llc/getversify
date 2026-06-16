import { useEffect } from 'react';
import type { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Layout.css';

type LayoutProps = {
  /** Styles applied only to the nav. Typically this will be the nav bg-color. */
  navClassName: string;
  /** Styles applied to the whole layout component. */
  className?: string;
  /** Page background color applied to the page shell AND mirrored onto the document root. */
  backgroundColor?: string;
  /** The body of the page. */
  children: ReactNode;
};

const Layout = ({
  navClassName,
  className,
  backgroundColor = '#ffffff',
  children,
}: LayoutProps) => {
  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  return (
    <div className={`page ${className ?? ''}`} style={{ backgroundColor }}>
      <Navbar className={navClassName} />
      <div className="page-top-spacer" />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
