import { FACEBOOK_URL, INSTAGRAM_URL } from '../../content/links';
import './Footer.css';

const Footer = () => {
  return (
    <div className="container">
      <footer className="site-footer">
        <div className="md:w-1/4 site-footer-brand">
          <img
            src="/images/logo.png"
            alt="Versify logo"
            className="site-footer-logo"
            loading="lazy"
          />
          <span className="text-body-sm">{new Date().getFullYear()} Versify LLC</span>
        </div>

        <div className="flex flex-wrap list-none pl-0 mb-0 md:w-1/4 site-footer-social">
          <div className="site-footer-social-item">
            <a
              className="site-footer-social-link"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Versify on Instagram"
            >
              <i className="fab fa-instagram site-footer-social-icon"></i>
            </a>
          </div>
          <div className="site-footer-social-item">
            <a
              className="site-footer-social-link"
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Versify on Facebook"
            >
              <i className="fab fa-facebook site-footer-social-icon"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
