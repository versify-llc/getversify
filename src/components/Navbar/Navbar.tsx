import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faEnvelope, faHeart, faShirt } from '@fortawesome/free-solid-svg-icons';
import { DONATE_URL, MERCH_URL } from '../../content/links';
import './Navbar.css';

type NavbarProps = {
  className: string;
};

const SCROLL_THRESHOLD = 4;

const Navbar = ({ className }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > SCROLL_THRESHOLD);
  };

  // Track scroll position for navbar styling
  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.documentElement.classList.toggle('site-nav-scroll-lock', menuOpen);
    return () => {
      document.documentElement.classList.remove('site-nav-scroll-lock');
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {menuOpen && <div className="site-nav-overlay" onClick={closeMenu} aria-hidden="true" />}
      <nav className={`site-nav ${className} ${scrolled && !menuOpen ? 'site-nav--bordered' : ''}`}>
        <div className="site-nav-inner px-3">
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
            <span className="site-nav-toggle-icon" />
          </button>
          <div className={`site-nav-menu ${menuOpen ? 'is-open' : ''}`} id="siteNavMenu">
            <div className="site-nav-links">
              <Link className="site-nav-link" to="/about" onClick={closeMenu}>
                <FontAwesomeIcon icon={faCircleInfo} className="site-nav-link-icon" aria-hidden />
                About
              </Link>
              <Link className="site-nav-link" to="/contact" onClick={closeMenu}>
                <FontAwesomeIcon icon={faEnvelope} className="site-nav-link-icon" aria-hidden />
                Contact
              </Link>
              <a className="site-nav-link" href={MERCH_URL} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faShirt} className="site-nav-link-icon" aria-hidden />
                Merch
              </a>
              <a className="site-nav-link" href={DONATE_URL} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faHeart} className="site-nav-link-icon" aria-hidden />
                Donate
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
