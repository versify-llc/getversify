import type { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

type LayoutProps = {
  /** Styles applied only to the nav. Typically this will be the nav bg-color. */
  navClassName: string;
  /** Styles applied to the whole layout component. */
  className?: string;
  children: ReactNode;
};

const Layout = ({ navClassName, className, children }: LayoutProps) => {
  return (
    <div className={className}>
      <Navbar className={navClassName} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
