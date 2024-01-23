import React from "react";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <nav className="navbar navbar-light navbar-expand-md fixed-top transparent-blur">
                <Navbar />
            </nav>
            <div className="container page-top-margin text-center m-auto">
                <h1 className="text-header-xl p-3 margin-top" style={{ color: '#7FDCA5' }}>Oops!</h1>
                <h4 className="text-header-sm mb-5" style={{ color: '#373737' }}>It seems like you've wandered off the straight and narrow path.</h4>

                <p className="text-body-md mt-5">Let's get you back on track</p>
                <div className="pt-2 pb-5">
                    <a href="/"><button className="btn home-btn">Return Home</button></a>
                </div>
                <br />
                <a href="https://apps.apple.com/us/app/versify-app/id1597230197" target="_blank" rel="noreferrer">
                    <img className="download-icon" src="/images/apple_store.png" alt="Apple App Store link" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.tarkowr.versify" target="_blank" rel="noreferrer">
                    <img className="download-icon" src="/images/google_play.png" alt="Google Play Store link" />
                </a>
            </div>
            <Footer />
            <div className="pt-1"></div>
        </div>
    );
}

export default NotFound;