import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <Navbar backgroundClass="transparent-blur" />
            <div className="container page-top-margin not-found-content">
                <h1 className="text-header-xl not-found-title margin-top" style={{ color: '#7FDCA5' }}>Oops!</h1>
                <h4 className="text-header-sm not-found-subtitle" style={{ color: '#373737' }}>It seems like you've wandered off the straight and narrow path.</h4>

                <p className="text-body-md not-found-cta-text">Let's get you back on track</p>
                <div className="not-found-actions">
                    <a href="/"><button className="home-btn">Return Home</button></a>
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
            <div className="page-spacer"></div>
        </div>
    );
}

export default NotFound;