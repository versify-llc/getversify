import './Footer.css';

const Footer = () => {
  return (
    <div className="container">
      <footer className="site-footer">
        <div className="md:w-1/4 site-footer-brand">
          <img src="/images/logo.png" alt="Versify Logo" className="site-footer-logo" />
          <span className="text-body">{new Date().getFullYear()} Versify LLC</span>
        </div>

        <ul className="flex flex-wrap list-none pl-0 mb-0 md:w-1/4 site-footer-social">
          <li className="site-footer-social-item"><a className="site-footer-social-link" href="https://instagram.com/theversifyapp" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram site-footer-social-icon"></i>
          </a></li>
          <li className="site-footer-social-item"><a className="site-footer-social-link" href="https://www.facebook.com/profile.php?id=100071561531471"
            target="_blank" rel="noreferrer">
            <i className="fab fa-facebook site-footer-social-icon"></i>
          </a></li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
