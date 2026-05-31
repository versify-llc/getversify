import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <Navbar backgroundClass="nav-bg-light" />
            <div className="container page-top not-found-content">
                <h1 className="text-header-xl text-theme-green not-found-title">Oops!</h1>
                <h4 className="text-header-sm not-found-subtitle">It seems like you've wandered off the straight and narrow path.</h4>

                <p className="text-body-md not-found-cta">Let's get you back on track</p>
                <div className="not-found-actions">
                    <a href="/"><button type="button" className="btn-primary">Return Home</button></a>
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
