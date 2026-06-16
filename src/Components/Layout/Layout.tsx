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
  // Apply backgroundColor to root of page
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.style.backgroundColor;
    root.style.backgroundColor = backgroundColor;
    return () => {
      root.style.backgroundColor = previous;
    };
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
