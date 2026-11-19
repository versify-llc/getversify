import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FACEBOOK_URL, INSTAGRAM_URL } from '../../content/links';
import './Footer.css';

const Footer = () => {
  return (
    <div className="container mx-auto px-3">
      <footer className="site-footer px-2 md:px-0">
        <div className="flex">
          <img
            src="/images/logo.png"
            alt="Versify logo"
            className="site-footer-logo"
            loading="lazy"
          />
          <span className="text-body-sm">{new Date().getFullYear()} Versify LLC</span>
        </div>

        <div className="flex">
          <a
            className="social-link"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Versify on Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="xl" />
          </a>
          <a
            className="social-link"
            href={FACEBOOK_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Versify on Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} size="xl" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
