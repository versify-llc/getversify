import React from "react";
import './Navbar.css';

function Navbar(){
    return (
        <nav className="navbar navbar-expand-md navbar-light fixed-top bg-theme">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html"><img src="/images/logo_hoz.png" alt="Versify Logo" className="navbar-logo"/></a>
        
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbar-expanded" id="navbarCollapse">
            <ul className="navbar-nav float-md-end mb-2 navbar-list">
              <li className="navbar-item mx-3">
                <a className="navbar-link" href="pages/v_about.html">About</a>
              </li>
              <li className="navbar-item mx-3">
                <a className="navbar-link" href="pages/v_contact.html">Contact</a>
              </li>
              <li className="navbar-item mx-3">
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
