import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Contact.css';

const Contact = () => {
    return (
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <Navbar backgroundClass="transparent-blur" />
            <div className="container page-top-margin expand-height">
                <div className="row justify-content-center pt-5">
                    <div className="col-12 col-md-6 col-lg-5 ">
                        <h2 className="text-header content-align" style={{ color: '#7FDCA5' }}>Let's Talk</h2>
                        <p className="text-body-sm content-align">
                            To give us feedback for our app or just learn more about what we do, please get into contact with us!
                        </p>
                        <p className='contact-methods text-body-sm'>
                            <ul style={{ textAlign: 'start' }}>
                                <li>
                                    Email us at{' '}
                                    <a href="mailto:theversifyapp@gmail.com" target='_blank'>theversifyapp@gmail.com</a>
                                </li>
                                <li>
                                    Share your ideas at{' '}
                                    <a href="https://versify.upvotyfeedback.com/" target='_blank'>versify.upvotyfeedback.com</a>
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div className="col-0 col-lg-1"></div>
                    <div className="col-2 d-none d-lg-inline-block" id="contact-info">
                        <img className="chat-img" src="images/chat.png" alt="Chat icon" />
                    </div>
                </div>
            </div>
            <div className='pt-3'></div>
            <Footer />
        </div>
    );
}

export default Contact