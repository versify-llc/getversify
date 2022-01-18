import axios from 'axios';
import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Contact.css';

function Contact() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const elements = event.target.elements;
        const name = elements.inputName.value;
        const email = elements.inputEmail.value;
        const message = elements.inputMessage.value;

        await axios.post('https://congratgrad.herokuapp.com/contact/send', { 'sender': email, 'message': message });

        elements.inputName.value = '';
        elements.inputEmail.value = '';
        elements.inputMessage.value = '';
    }

    return (
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <nav className="navbar navbar-expand-md fixed-top bg-white">
                <Navbar />
            </nav>

            <div className="container page-top-margin">
                <div className="row justify-content-center pt-4">
                    <div className="col-lg-5 col-md-6">
                        <h2 className="text-header content-align" style={{ color: '#7FDCA5' }}>Let's Talk</h2>
                        <p className="text-body-sm content-align">
                            To give us feedback for our app, request a partnership,
                            or just learn more about what we do, fill out the form
                            below and we will get back to you promptly.
                        </p>

                        <form onSubmit={onSubmit}>
                            <div className="form-group text-start">
                                <label className="text-body-sm" htmlFor="inputName">Your Name</label>
                                <input type="text" className="form-control" id="inputName" aria-describedby="emailHelp" />
                            </div>
                            <br />
                            <div className="form-group text-start">
                                <label className="text-body-sm" htmlFor="inputEmail">Your Email</label>
                                <input type="email" className="form-control" id="inputEmail" />
                            </div>
                            <br />
                            <div className="form-group text-start">
                                <label className="text-body-sm" htmlFor="inputMessage">Your Message</label>
                                <textarea className="form-control" id="inputMessage" rows="3"></textarea>
                            </div>
                            <br />
                            <div className="content-align">
                                <button type="submit" className="btn submit-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-2 col-md-5" id="contact-info">
                        <img className="chat-img" src="images/chat.png" alt="Chat icon" />
                        <p className="text-body-sm">theversifyapp@gmail.com</p>
                        <h4 className="text-header-xs">Stay Connected</h4>
                        <div className="justify-content-sm-evenly">
                            <a className="text-muted" href="https://instagram.com/theversifyapp" target="_blank" rel="noreferrer">
                                <i className="fab fa-instagram social-icon"></i>
                            </a>
                            <div className='px-1 d-inline-block'></div>
                            <a className="text-muted" href="https://www.facebook.com/profile.php?id=100071561531471" target="_blank" rel="noreferrer">
                                <i className="fab fa-facebook social-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-3'></div>
            <Footer />
        </div>
    );
}

export default Contact;