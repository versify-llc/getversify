import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Contact.css';

const Contact = () => {
    return (
        <div className="cover-container contact-page">
            <Navbar backgroundClass="transparent-blur" />
            <div className="container page-top-margin expand-height">
                <div className="row contact-hero-row">
                    <div className="col-12 col-md-6 col-lg-5 ">
                        <h2 className="text-header content-align" style={{ color: '#7FDCA5' }}>Let's Talk</h2>
                        <p className="text-body-sm content-align">
                            To give us feedback for our app or just learn more about what we do, please get into contact with us!
                        </p>
                        <div className="contact-methods text-body-sm">
                            <div className="contact-tiles">
                                <a
                                    className="contact-tile"
                                    href="mailto:theversifyapp@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fas fa-envelope fa-2x contact-tile__icon" aria-hidden="true" />
                                    <span className="contact-tile__title">Email</span>
                                </a>
                                <a
                                    className="contact-tile"
                                    href="https://versify.upvotyfeedback.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fas fa-comments fa-2x contact-tile__icon" aria-hidden="true" />
                                    <span className="contact-tile__title">Feedback</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-0 col-lg-1"></div>
                    <div className="col-2 contact-illustration" id="contact-info">
                        <img className="chat-img" src="images/chat.png" alt="Chat icon" />
                    </div>
                </div>
            </div>
            <div className="footer-spacer"></div>
            <Footer />
        </div>
    );
}

export default Contact
