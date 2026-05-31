import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const NotFound = () => {
    return (
        <div className='page-shell'>
            <Navbar backgroundClass="nav-bg-light" />
            <div className="page-top px-8 flex-1 content-center">
                <h1 className="text-header-xl text-theme-green">Oops!</h1>
                <h4 className="text-body-sm">It seems like you've wandered off the straight and narrow path.</h4>
                <h4 className="text-body-sm">Let's get you back on track!</h4>
                <br />
                <a href="/"><button type="button" className="btn-primary">Return Home</button></a>
                <div className='mt-10'>
                    <a href="https://apps.apple.com/us/app/versify-app/id1597230197" target="_blank" rel="noreferrer">
                        <img className="download-icon" src="/images/apple_store.png" alt="Apple App Store link" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.tarkowr.versify" target="_blank" rel="noreferrer">
                        <img className="download-icon" src="/images/google_play.png" alt="Google Play Store link" />
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default NotFound;
