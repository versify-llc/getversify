import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Contact.css';

const Contact = () => {
    return (
        <div className="page-shell contact-page">
            <Navbar backgroundClass="nav-bg-light" />
            <div className="container page-top contact-main">
                <div className="flex flex-wrap -mx-3 justify-center contact-hero-row">
                    <div className="shrink-0 px-3 w-full md:w-1/2 lg:w-5/12">
                        <h2 className="text-header text-theme-green text-center md:text-left">Let's Talk</h2>
                        <p className="text-body-sm text-center md:text-left">
                            To give us feedback for our app or just learn more about what we do, please get into contact with us!
                        </p>
                        <div className="text-body-sm">
                            <div className="contact-tiles">
                                <a
                                    className="contact-tile"
                                    href="mailto:theversifyapp@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fas fa-envelope fa-2x contact-tile-icon" aria-hidden="true" />
                                    <span className="contact-tile-title">Email</span>
                                </a>
                                <a
                                    className="contact-tile"
                                    href="https://versify.upvotyfeedback.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fas fa-comments fa-2x contact-tile-icon" aria-hidden="true" />
                                    <span className="contact-tile-title">Feedback</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="shrink-0 px-3 w-0 lg:w-1/12"></div>
                    <div className="shrink-0 px-3 w-1/6 contact-illustration" id="contact-info">
                        <img className="contact-chat-img" src="images/chat.png" alt="Chat icon" />
                    </div>
                </div>
            </div>
            <div className="page-gap-footer page-gap-footer--lg"></div>
            <Footer />
        </div>
    );
}

export default Contact
