import React, { useCallback, useEffect, useState } from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';

type NavbarProps = {
  backgroundClass: string;
}

const Navbar = ({ backgroundClass }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(
    (e: any) => {
      const window = e.currentTarget;
      const threshold = 4.0;

      if (window.scrollY > threshold) {
        if (!scrolled) setScrolled(true);
      }
      else if (window.scrollY <= threshold) {
        if (scrolled) setScrolled(false);
      }
    }, [scrolled]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <nav className={`navbar navbar-light navbar-expand-md fixed-top ${backgroundClass} ${scrolled ? "conditional-border" : ""}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src="/images/logo_hoz.png" alt="Versify Logo" className="navbar-logo" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbar-expanded" id="navbarCollapse">
          <ul className="navbar-nav float-md-end mb-2 navbar-list">
            <li className="navbar-item">
              <Link className="navbar-link" to="/about">About</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/contact">Contact</Link>
            </li>
            <li className="navbar-item">
              <a className="navbar-link"
                href="https://versify.printful.me/"
                target="_blank" rel="noreferrer">Merch</a>
            </li>
            <li className="navbar-item">
              <a className="navbar-link"
                href="https://www.gofundme.com/f/versify?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1"
                target="_blank" rel="noreferrer">Donate</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
