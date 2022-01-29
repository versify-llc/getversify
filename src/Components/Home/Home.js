import React, { useState } from "react";
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const SCREENS =
    [
        '/images/read_game_screen.png',
        '/images/type_game_screen.png',
        '/images/blank_game_screen.png',
        '/images/type_game_screen.png'
    ];

const REVIEW_HEADER =
    [
        '"I would give it 10 stars if I could!!"',
        '"Fantastic"',
        '"Memorizing verses is no longer a chore!"',
        '"Great tool!"',
        '"Best Memorization App"'
    ]

const REVIEW_BODY =
    [
        'Such a well designed app to help you memorize verses!! I haven’t put my phone down since I downloaded it- even better than TikTok!!',
        'It is not often that a small dev makes something so polished and well rounded. This app feels clean and well made. Overall a great experience.',
        'I have a hard time memorizing Bible verses because it is such a daunting task. Versify has motivated me to memorize more verses and makes it manageable and fun!',
        'Looking forward to being more intentional in scripture memory and excited for this helpful app! Excellent format!',
        'I have a difficult time memorizing verses and I have been on the search for an app to help me out. This app is so easy to use and understand. Additionally, this app makes it fun to memorize verses.'
    ]

function incrementReviewIndex(current) {
    if (current === REVIEW_HEADER.length - 1) {
        return 0;
    }

    return current + 1;
}

function decrementReviewIndex(current) {
    if (current === 0) {
        return REVIEW_HEADER.length - 1;
    }

    return current - 1;
}

function Home() {
    const [gameIndex, setGameIndex] = useState(0);
    const [reviewIndex, setReviewIndex] = useState(0);

    return (
        <div className="bg-theme">
            <nav className="navbar navbar-light navbar-expand-md fixed-top bg-theme">
                <Navbar />
            </nav>
            <div className="container page-top-margin">
                <div className="row justify-content-center align-items-center pt-4">
                    <div className="col-md-5">
                        <div className="header-align">
                            <h1 className="text-header">Bible Verse Memorization<br />Made Easy</h1>
                            <p className="text-body-lg sub-text">Our app is now available in app stores! Download it today.</p>

                            <a href="https://apps.apple.com/us/app/versify-app/id1597230197" target="_blank" rel="noreferrer">
                                <img className="download-icon" src="/images/apple_store.png" alt="Apple App Store link" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.tarkowr.versify" target="_blank" rel="noreferrer">
                                <img className="download-icon" src="/images/google_play.png" alt="Google Play Store Link" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5 phone-align small-pad">
                        <img className="phone-screen" src="/images/home_screen.png" alt="Versify home screenshot" />
                    </div>
                </div>
            </div>

            <div className="w-100 pb-2" style={{ backgroundColor: 'white' }}>
                <img src="/images/grey_triangle.png" className="triangle" alt="" />
                <div style={{ marginTop: '50px' }}>
                    <h1 className="text-header-md">Memorization Made Fun.</h1>
                    <p className="text-body-lg mb-4">Play a variety of interactive games to help you memorize verses</p>

                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-4 btn-align">
                            <form>
                                <div className="btn-group-vertical" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradio" id="readbtn" value="read" autoComplete="off"
                                        checked={gameIndex === 0} readOnly={true} />
                                    <label className="game-button btn-outline-primary row" forhtml="readbtn" onClick={() => setGameIndex(0)}>
                                        <div className="col-5">
                                            <i className="fas fa-book-open fa-2x game-icon"></i>
                                        </div>
                                        <div className="col-7 text-body-lg game-text">Read</div>
                                    </label>

                                    <input type="radio" className="btn-check" name="btnradio" id="typebtn" value="type" autoComplete="off"
                                        checked={gameIndex === 1} readOnly={true} />
                                    <label className="game-button btn-outline-primary row" forhtml="typebtn" onClick={() => setGameIndex(1)}>
                                        <div className="col-5">
                                            <i className="fas fa-fingerprint game-icon fa-2x"></i>
                                        </div>
                                        <div className="col-7 text-body-lg game-text">Type</div>
                                    </label>

                                    <input type="radio" className="btn-check" name="btnradio" id="blankbtn" value="blank" autoComplete="off"
                                        checked={gameIndex === 2} readOnly={true} />
                                    <label className="game-button btn-outline-primary row" forhtml="blankbtn" onClick={() => setGameIndex(2)}>
                                        <div className="col-5">
                                            <i className="fas fa-bars fa-2x game-icon"></i>
                                        </div>
                                        <div className="text-body-lg game-text col-7">Blank</div>
                                    </label>

                                    <input type="radio" className="btn-check" name="btnradio" id="testbtn" value="test" autoComplete="off"
                                        checked={gameIndex === 3} readOnly={true} />
                                    <label className="game-button btn-outline-primary row" forhtml="testbtn" onClick={() => setGameIndex(3)}>
                                        <div className="col-5">
                                            <i className="far fa-check-circle fa-2x game-icon"></i>
                                        </div>
                                        <div className="text-body-lg game-text col-7">Test</div>
                                    </label>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-4 phone-align small-pad" id="gameScreen">
                            <img className="game-screen" src={SCREENS[gameIndex]} alt="Game screenshot" />
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#5AC1D0', width: '100%' }}>
                <img src="/images/white_triangle.png" className="triangle" alt="" />
                <div style={{ marginTop: '50px', marginBottom: '50px' }}>
                    <h1 className="text-header-md white-text">Memorization Made Free.</h1>
                    <p className="text-body-lg white-text">Memorize any verse in the ESV for free! No subscription. No catch.</p>
                    <br />
                    <div className="review-promo justify-content-center row">
                        <div className="col-1 offset-1 offset-sm-2" style={{ position: 'relative' }}>
                            <button className="arrow-button align-middle"
                                onClick={() => setReviewIndex(decrementReviewIndex(reviewIndex))}>
                                <i className="fas fa-chevron-left fa-2x arrow-icon" />
                            </button>
                        </div>
                        <div className="col">
                            <div className="pb-4">
                                <i className="fas fa-star fa-lg star-icon px-1"></i>
                                <i className="fas fa-star fa-lg star-icon px-1"></i>
                                <i className="fas fa-star fa-lg star-icon px-1"></i>
                                <i className="fas fa-star fa-lg star-icon px-1"></i>
                                <i className="fas fa-star fa-lg star-icon px-1"></i>
                            </div>
                            <p className="text-body-lg white-text" id="review-header"><b>{REVIEW_HEADER[reviewIndex]}</b></p>
                            <p className="text-body-sm white-text m-auto" id="review-body" style={{ maxWidth: '500px' }}>
                                <i>{REVIEW_BODY[reviewIndex]}</i>
                            </p>
                        </div>
                        <div className="col-1" style={{ position: 'relative' }}>
                            <button className="arrow-button"
                                onClick={() => setReviewIndex(incrementReviewIndex(reviewIndex))}>
                                <i className="fas fa-chevron-right fa-2x arrow-icon" />
                            </button>
                        </div>
                        <div className="col-1 col-sm-2"></div>
                    </div>
                </div>
                <img src="/images/grey_triangle.png" className="triangle-rotate" alt="" />
            </div>

            <div className="w-100">
                <div className="text-header-md small-pad-top">
                    <h1 className="text-header-md" style={{ display: 'inline-block' }}>Bible Verse Memorization Made&nbsp;</h1>
                    <h1 className="text-header-md" id="type-word" style={{ display: 'inline-block', color: '#15CF74' }}>Easy.</h1>
                </div>
                <p className="text-body-lg">So what’s the hold up? Start memorizing today!</p>
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

export default Home;