import React from "react";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function Esv() {
    return (
        <div>
            <nav className="navbar navbar-light navbar-expand-md fixed-top transparent-blur">
                <Navbar />
            </nav>
            <div className="container page-top-margin text-center m-auto">
                <h1 className="text-header p-3 margin-top">English Standard Version (ESV)</h1>
                <div className="text-body">
                    Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard Version®), copyright © 2001 by Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved. You may not copy or download more than 500 consecutive verses of the ESV Bible or more than one half of any book of the ESV Bible.
                </div>
                <br /> <br />
                <div className="text-body-lg">Also, if you haven't downloaded Versify yet, what are you waiting for?</div>
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

export default Esv;
