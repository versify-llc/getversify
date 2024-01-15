import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { API_URL } from '../../constants';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Snackbar from '../Snackbar/Snackbar';
import './Contact.css';


export default function Contact() {

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState('');

    const ping = async () => {
        try {
            var response = await axios.get(`${API_URL}/ping`);
            console.log(response.statusText)
        } catch (e) {
            console.log(e);
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        if (loading) return;

        const elements = event.target.elements;
        const email = elements.inputEmail.value;
        const message = elements.inputMessage.value;

        setLoading(true);

        try {
            await axios.post(`${API_URL}/contact/send`, { 'sender': email, 'message': `${email}\n${message}` });
            // setMessage('Message Sent!');
        }
        catch (e) {
            // setMessage('Message Failed');
        }

        setMessage('Message sent!');

        setLoading(false);
        setSubmitted(true);

        setTimeout(() => setSubmitted(false), 3000);

        elements.inputEmail.value = '';
        elements.inputMessage.value = '';
    }

    // Ping our server when this page mounts to warm it up 
    // so the user does not need to wait for it to reboot.
    useEffect(() => ping(), []);

    return (
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <nav className="navbar navbar-light navbar-expand-md fixed-top transparent-blur">
                <Navbar />
            </nav>

            <div className="container page-top-margin">
                <div className="row justify-content-center pt-4">
                    <div className="col-12 col-md-6 col-lg-5 ">
                        <h2 className="text-header content-align" style={{ color: '#7FDCA5' }}>Let's Talk</h2>
                        <p className="text-body-sm content-align">
                            To give us feedback for our app or just learn more about what we do, fill out the form
                            below and we will get back to you!
                        </p>

                        <form onSubmit={onSubmit}>
                            <div className="form-group text-start">
                                <label className="text-body-sm" htmlFor="inputEmail">Email</label>
                                <input type="email" className="form-control" id="inputEmail" required maxLength={200} />
                            </div>
                            <br />
                            <div className="form-group text-start">
                                <label className="text-body-sm" htmlFor="inputMessage">Message</label>
                                <textarea className="form-control" id="inputMessage" rows="3" required maxLength={5000}></textarea>
                            </div>
                            <br />
                            <div className="content-align">
                                <button type="submit" className="btn submit-btn">
                                    {loading ? <div className="spinner-border text-light" role="status" style={{ width: '1.25rem', height: '1.25rem' }}>
                                        <span className="sr-only">Loading...</span>
                                    </div> : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-0 col-lg-1"></div>
                    <div className="col-2 d-none d-lg-inline-block" id="contact-info">
                        <img className="chat-img" src="images/chat.png" alt="Chat icon" />
                        <p className="text-body-sm">theversifyapp@gmail.com</p>
                        <h4 className="text-header-xs">Stay Connected</h4>
                        <div className="justify-content-sm-evenly">
                            <a className="text-muted" href="https://instagram.com/theversifyapp" target="_blank" rel="noreferrer">
                                <i className="fab fa-instagram social-icon"></i>
                            </a>
                            <div className='px-2 d-inline-block'></div>
                            <a className="text-muted" href="https://www.facebook.com/profile.php?id=100071561531471" target="_blank" rel="noreferrer">
                                <i className="fab fa-facebook social-icon"></i>
                            </a>
                        </div>
                    </div>
                    <div className='col-12 d-inline-block d-lg-none mt-4'>
                        You can also email us at theversifyapp@gmail.com
                    </div>
                </div>
            </div>
            <div className='pt-3'></div>
            <Footer />
            <Snackbar message={message} show={submitted} />
        </div>
    );
}