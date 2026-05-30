import './Footer.css';

const Footer = () => {
  return (
    <div className="container">
      <footer className="site-footer">
        <div className="col-md-4 footer-brand">
          <img src="/images/logo.png" alt="Versify Logo" className="logo" />
          <span className="text-body">{new Date().getFullYear()} Versify LLC</span>
        </div>

        <ul className="nav col-md-4 footer-social">
          <li className="footer-social-item"><a className="footer-social-link" href="https://instagram.com/theversifyapp" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram social-icon"></i>
          </a></li>
          <li className="footer-social-item"><a className="footer-social-link" href="https://www.facebook.com/profile.php?id=100071561531471"
            target="_blank" rel="noreferrer">
            <i className="fab fa-facebook social-icon"></i>
          </a></li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
