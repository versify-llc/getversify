import React from "react";
import './Footer.css';

function Footer(){
    return (
        <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <img src="/images/logo.png" alt="Versify Logo" className="logo"/>
            <span className="text-body">2021 Versify</span>
          </div>
  
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-muted" href="https://instagram.com/theversifyapp" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram social-icon"></i>
            </a></li>
            <li className="ms-3"><a className="text-muted" href="https://www.facebook.com/profile.php?id=100071561531471"
                target="_blank" rel="noreferrer">
                    <i class="fab fa-facebook social-icon"></i>
                </a></li>
          </ul>
        </footer>
      </div>
    );
}

export default Footer;