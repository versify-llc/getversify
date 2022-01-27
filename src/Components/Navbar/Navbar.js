import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"><img src="/images/logo_hoz.png" alt="Versify Logo" className="navbar-logo" /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse navbar-expanded" id="navbarCollapse">
        <ul className="navbar-nav float-md-end mb-2 navbar-list">
          <li className="navbar-item mx-3">
            <Link className="navbar-link" to="/about">About</Link>
          </li>
          <li className="navbar-item mx-3">
            <Link className="navbar-link" to="/contact">Contact</Link>
          </li>
          <li className="navbar-item mx-3">
            <a className="navbar-link"
              href="https://www.gofundme.com/f/versify?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1"
              target="_blank" rel="noreferrer">Donate</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
