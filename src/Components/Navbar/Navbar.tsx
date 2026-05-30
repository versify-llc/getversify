import { useCallback, useEffect, useState } from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';

type NavbarProps = {
  backgroundClass: string;
}

const Navbar = ({ backgroundClass }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(
    (e: Event) => {
      const window = e.currentTarget as Window;
      const threshold = 4.0;

      if (window.scrollY > threshold) {
        setScrolled(true);
      }
      else if (window.scrollY <= threshold) {
        setScrolled(false);
      }
    }, []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`site-nav ${backgroundClass} ${scrolled || menuOpen ? "site-nav--bordered" : ""}`}>
      <div className="site-nav-inner container-fluid">
        <Link className="site-nav-brand" to="/" onClick={closeMenu}>
          <img src="/images/logo_hoz.png" alt="Versify Logo" className="site-nav-logo" />
        </Link>
        <button
          className="site-nav-toggle"
          type="button"
          aria-controls="siteNavMenu"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="site-nav-toggle-icon"></span>
        </button>
        <div className={`site-nav-menu ${menuOpen ? "is-open" : ""}`} id="siteNavMenu">
          <ul className="site-nav-links">
            <li className="site-nav-item">
              <Link className="site-nav-link" to="/about" onClick={closeMenu}>About</Link>
            </li>
            <li className="site-nav-item">
              <Link className="site-nav-link" to="/contact" onClick={closeMenu}>Contact</Link>
            </li>
            <li className="site-nav-item">
              <a className="site-nav-link"
                href="https://versify.printful.me/"
                target="_blank" rel="noreferrer">Merch</a>
            </li>
            <li className="site-nav-item">
              <a className="site-nav-link"
                href="https://www.givesendgo.com/versify"
                target="_blank" rel="noreferrer">Donate</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
