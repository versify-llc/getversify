import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DONATE_URL, MERCH_URL } from '../../content/links';
import './Navbar.css';

type NavbarProps = {
  backgroundClass: string;
};

const SCROLL_THRESHOLD = 4;

const Navbar = ({ backgroundClass }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav
      className={`site-nav ${backgroundClass} ${scrolled || menuOpen ? 'site-nav--bordered' : ''}`}
    >
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
        <div className={`site-nav-menu ${menuOpen ? 'is-open' : ''}`} id="siteNavMenu">
          <ul className="site-nav-links">
            <li className="site-nav-item">
              <Link className="site-nav-link" to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="site-nav-item">
              <Link className="site-nav-link" to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
            <li className="site-nav-item">
              <a className="site-nav-link" href={MERCH_URL} target="_blank" rel="noreferrer">
                Merch
              </a>
            </li>
            <li className="site-nav-item">
              <a className="site-nav-link" href={DONATE_URL} target="_blank" rel="noreferrer">
                Donate
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
