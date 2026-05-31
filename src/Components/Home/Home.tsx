import React, { useState } from "react";
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const SCREENS =
    [
        '/images/read_game_screen.png',
        '/images/type_game_screen.png',
        '/images/blank_game_screen.png',
        '/images/speak_game_screen.png',
        '/images/listen_game_screen.png',
        '/images/flash_screen.png'
    ];

const REVIEW_HEADER =
    [
        '"Fantastic"',
        '"Memorizing verses is no longer a chore!"',
        '"Great tool!"',
        '"Best Memorization App"'
    ]

const REVIEW_BODY =
    [
        'It is not often that a small dev makes something so polished and well rounded. This app feels clean and well made. Overall a great experience.',
        'I have a hard time memorizing Bible verses because it is such a daunting task. Versify has motivated me to memorize more verses and makes it manageable and fun!',
        'Looking forward to being more intentional in scripture memory and excited for this helpful app! Excellent format!',
        'I have a difficult time memorizing verses and I have been on the search for an app to help me out. This app is so easy to use and understand. Additionally, this app makes it fun to memorize verses.'
    ]

const incrementReviewIndex = (current: number) => {
    if (current === REVIEW_HEADER.length - 1) {
        return 0;
    }

    return current + 1;
}

const decrementReviewIndex = (current: number) => {
    if (current === 0) {
        return REVIEW_HEADER.length - 1;
    }

    return current - 1;
}

const GAME_OPTIONS = [
    { id: 'readbtn', value: 'read', icon: 'fas fa-book-open fa-2x', label: 'Read' },
    { id: 'typebtn', value: 'type', icon: 'fas fa-fingerprint fa-2x', label: 'Type' },
    { id: 'blankbtn', value: 'blank', icon: 'fas fa-bars fa-2x', label: 'Blank' },
    { id: 'speakBtn', value: 'speak', icon: 'fas fa-microphone fa-2x', label: 'Speak' },
    { id: 'listenBtn', value: 'listen', icon: 'fas fa-headphones fa-2x', label: 'Listen' },
    { id: 'flashBtn', value: 'flash', icon: 'fas fa-bolt fa-2x', label: 'Flash' },
];

const Home = () => {
    const [gameIndex, setGameIndex] = useState(0);
    const [reviewIndex, setReviewIndex] = useState(0);

    return (
        <div className="bg-theme-lightgrey">
            <Navbar backgroundClass="nav-bg-grey" />
            <div className="page-spacer"></div>
            <div className="container page-top">
                <div className="flex flex-wrap -mx-3 justify-center home-hero-row">
                    <div className="shrink-0 px-3 w-full md:w-5/12">
                        <div className="text-center md:text-right">
                            <h1 className="text-header">Bible Verse Memorization<br />Made Easy</h1>
                            <p className="text-body-lg home-hero-subtext">Our app is available in app stores! Download it today.</p>

                            <a href="https://apps.apple.com/us/app/versify-app/id1597230197" target="_blank" rel="noreferrer">
                                <img className="download-icon" src="/images/apple_store.png" alt="Apple App Store link" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.tarkowr.versify" target="_blank" rel="noreferrer">
                                <img className="download-icon" src="/images/google_play.png" alt="Google Play Store Link" />
                            </a>
                        </div>
                    </div>
                    <div className="shrink-0 px-3 w-full md:w-1/12"></div>
                    <div className="shrink-0 px-3 w-full md:w-5/12 text-center md:text-left home-phone-col">
                        <img className="home-phone-img" src="/images/home_screen.png" alt="Versify home screenshot" />
                    </div>
                </div>
            </div>

            <section className="section-banner section-banner--white home-games-section">
                <img src="/images/grey_triangle.png" className="triangle" alt="" />
                <div className="section-banner__inner">
                    <h1 className="text-header-md">Memorization Made Fun.</h1>
                    <p className="text-body-lg home-games-intro">Play a variety of interactive games to help you memorize verses</p>

                    <div className="flex flex-wrap -mx-3 justify-center home-games-row">
                        <div className="shrink-0 px-3 w-full md:w-1/4 text-center md:text-right">
                            <form>
                                <div className="home-game-options" role="group" aria-label="Basic radio toggle button group">
                                    {GAME_OPTIONS.map((option, index) => (
                                        <React.Fragment key={option.id}>
                                            <input
                                                type="radio"
                                                className="home-game-option-input"
                                                name="btnradio"
                                                id={option.id}
                                                value={option.value}
                                                autoComplete="off"
                                                checked={gameIndex === index}
                                                readOnly={true}
                                            />
                                            <label className="home-game-option flex flex-wrap -mx-3" onClick={() => setGameIndex(index)}>
                                                <div className="shrink-0 px-3 w-5/12">
                                                    <i className={`${option.icon} home-game-icon`}></i>
                                                </div>
                                                <div className="shrink-0 px-3 w-7/12 text-body-lg home-game-label">{option.label}</div>
                                            </label>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </form>
                        </div>
                        <div className="shrink-0 px-3 w-full md:w-1/12"></div>
                        <div className="shrink-0 px-3 w-full md:w-1/4 text-center md:text-left home-phone-col" id="gameScreen">
                            <img className="home-game-screen" src={SCREENS[gameIndex]} alt="Game screenshot" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-banner section-banner--blue">
                <img src="/images/white_triangle.png" className="triangle" alt="" />
                <div className="section-banner__inner section-banner__inner--spaced">
                    <h1 className="text-header-md text-white">Memorization Made Free.</h1>
                    <p className="text-body-lg text-white home-free-intro">Memorize any verse in ESV, NIV, NLT, and more for free! No subscription. No ads.</p>
                    <br />
                    <div className="flex flex-wrap -mx-3 home-review">
                        <div className="shrink-0 px-3 w-1/12" style={{ position: 'relative' }}>
                            <button className="home-review-control" type="button"
                                onClick={() => setReviewIndex(decrementReviewIndex(reviewIndex))}>
                                <i className="fas fa-chevron-left fa-2x home-review-icon" />
                            </button>
                        </div>
                        <div className="shrink-0 px-3 w-1/2">
                            <div className="home-review-stars">
                                <i className="fas fa-star fa-lg home-review-star"></i>
                                <i className="fas fa-star fa-lg home-review-star"></i>
                                <i className="fas fa-star fa-lg home-review-star"></i>
                                <i className="fas fa-star fa-lg home-review-star"></i>
                                <i className="fas fa-star fa-lg home-review-star"></i>
                            </div>
                            <p className="text-body-lg text-white" id="review-header"><b>{REVIEW_HEADER[reviewIndex]}</b></p>
                            <p className="text-body-sm text-white" id="review-body" style={{ maxWidth: '500px' }}>
                                <i>{REVIEW_BODY[reviewIndex]}</i>
                            </p>
                        </div>
                        <div className="shrink-0 px-3 w-1/12" style={{ position: 'relative' }}>
                            <button className="home-review-control" type="button"
                                onClick={() => setReviewIndex(incrementReviewIndex(reviewIndex))}>
                                <i className="fas fa-chevron-right fa-2x home-review-icon" />
                            </button>
                        </div>
                    </div>
                </div>
                <img src="/images/grey_triangle.png" className="triangle triangle--flip" alt="" />
            </section>

            <div className="home-cta-section">
                <div className="text-header-md home-cta-heading">
                    <h1 className="text-header-md" style={{ display: 'inline-block' }}>Bible Verse Memorization Made&nbsp;</h1>
                    <h1 className="text-header-md text-theme-green" id="type-word" style={{ display: 'inline-block' }}>Easy.</h1>
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
            <div className="page-spacer"></div>
        </div>
    );
}

export default Home;
