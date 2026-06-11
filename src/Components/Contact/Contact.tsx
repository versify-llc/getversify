import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Layout from '../Layout/Layout';
import { CONTACT_EMAIL, FEEDBACK_URL } from '../../content/links';
import './Contact.css';

const Contact = () => {
  return (
    <Layout navClassName="nav-bg-light">
      <main className="px-3 pt-12 w-full md:w-7/12 mx-auto">
        <h1 className="text-header text-theme-green text-center md:text-left">Let's Talk</h1>
        <p className="text-body-sm text-center md:text-left">
          To give us feedback for our app or just learn more about what we do, please get into
          contact with us!
        </p>
        <div className="contact-tiles text-body-sm">
          <a
            className="contact-tile"
            href={`mailto:${CONTACT_EMAIL}`}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2x"
              className="contact-tile-icon"
              aria-hidden
            />
            <div className="contact-tile-title">Email</div>
            <div className="contact-tile-subtext">{CONTACT_EMAIL}</div>
          </a>
          <a className="contact-tile" href={FEEDBACK_URL} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faComments}
              size="2x"
              className="contact-tile-icon"
              aria-hidden
            />
            <div className="contact-tile-title">Feedback</div>
            <div className="contact-tile-subtext">Upvote ideas for the app</div>
          </a>
        </div>
      </main>
    </Layout>
  );
};

export default Contact;
