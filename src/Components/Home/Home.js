import React from "react";
import './Home.css';

const SCREENS =
{
    'read': '/images/read_game_screen.png',
    'type': '/images/type_game_screen.png',
    'blank': '/images/blank_game_screen.png',
    'test': '/images/type_game_screen.png'
}

const REVIEW_HEADER =
    [
        '"I would give it 10 stars if I could!!"',
        '"Fantastic"',
        '"Memorizing verses is no longer a chore!"',
        '"Great tool!"'
    ]

const REVIEW_BODY =
    [
        'Such a well designed app to help you memorize verses!! I haven’t put my phone down since I downloaded it- even better than TikTok!!',
        'It is not often that a small dev makes something so polished and well rounded. This app feels clean and well made. Overall a great experience.',
        'I have a hard time memorizing Bible verses because it is such a daunting task. Versify has motivated me to memorize more verses and makes it manageable and fun! I actually look forward to memorizing verses now. I love the games and point system.',
        'Looking forward to being more intentional in scripture memory and excited for this helpful app! Excellent format!'
    ]

let reviewIndex = 0;

function switchScreen() {
    let screen = document.querySelector('input[name="btnradio"]:checked').value;
    document.getElementById("gameScreen").innerHTML =
        `
    <img className="game-screen" src=${SCREENS[screen]}>

    `
}

function switchReviewRight() {
    if (reviewIndex == REVIEW_HEADER.length - 1) {
        reviewIndex = 0;
    } else {
        reviewIndex += 1;
    }

    document.getElementById("review-header").innerHTML = "<b>" + REVIEW_HEADER[reviewIndex] + "</b>";
    document.getElementById("review-body").innerHTML = "<i>" + REVIEW_BODY[reviewIndex] + "</i>";

}

function switchReviewLeft() {
    if (reviewIndex == 0) {
        reviewIndex = REVIEW_HEADER.length - 1;
    } else {
        reviewIndex -= 1;
    }

    document.getElementById("review-header").innerHTML = "<b>" + REVIEW_HEADER[reviewIndex] + "</b>";
    document.getElementById("review-body").innerHTML = "<i>" + REVIEW_BODY[reviewIndex] + "</i>";

}

function Home() {
    return (
        <div style={{ backgroundColor: '#f2f2f2' }}>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="header-align">
                            <h1 className="text-header">Bible Verse Memorization<br />Made Easy.</h1>
                            <p className="text-body-lg sub-text">Our app is now available in app stores! Download it today.</p>
                            <div className="row">
                                <div className="col">
                                    <a href="https://apps.apple.com/us/app/versify-app/id1597230197" target="_blank"><img
                                        className="download-icon" src="/images/versify/apple_store.png" /></a>
                                    <a href="https://play.google.com/store/apps/details?id=com.tarkowr.versify" target="_blank"><img
                                        className="download-icon" src="/images/versify/google_play.png" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5 phone-align small-pad">
                        <img className="phone-screen" src="/images/home_screen.png" />
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: 'white', width: '100%' }}>
                <img src="/images/grey_triangle.png" className="triangle" />
                <div style={{ marginTop: '50px' }}>
                    <h1 className="text-header-md">Memorization Made Fun.</h1>
                    <p className="text-body-lg">Play a variety of interactive games to help you memorize verses</p>

                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-4 btn-align">
                            <form>
                                <div className="btn-group-vertical" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradio" id="readbtn" value="read" autoComplete="off"
                                        onClick={switchScreen} />
                                    <label className="game-button btn-outline-primary" forhtml="readbtn">
                                        <i className="fas fa-book-open fa-2x game-icon"></i>
                                        <p className="text-body-lg game-text">Read</p>
                                    </label>

                                    <input type="radio" className="btn-check" name="btnradio" id="typebtn" value="type" autoComplete="off"
                                        onClick={switchScreen} />
                                    <label className="game-button btn-outline-primary" forhtml="typebtn">
                                        <i className="fas fa-fingerprint game-icon fa-2x"></i>
                                        <p className="text-body-lg game-text">Type</p>
                                    </label>

                                    <input type="radio" className="btn-check" name="btnradio" id="blankbtn" value="blank" autoComplete="off"
                                        onClick={switchScreen} />
                                    <label className="game-button btn-outline-primary" forhtml="blankbtn">
                                        <i className="fas fa-bars fa-2x game-icon"></i>
                                        <p className="text-body-lg game-text">Blank</p>
                                    </label>

                                    <input type="radio" className="btn-check" name="btnradio" id="testbtn" value="test" autoComplete="off"
                                        onClick={switchScreen} />
                                    <label className="game-button btn-outline-primary" forhtml="testbtn">
                                        <i className="far fa-check-circle fa-2x game-icon"></i>
                                        <p className="text-body-lg game-text">Test</p>
                                    </label>

                                </div>
                            </form>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-4 phone-align small-pad" id="gameScreen">
                            <img className="game-screen" src="/images/read_game_screen.png" />
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#5AC1D0', width: '100%' }}>
                <img src="/images/white_triangle.png" className="triangle" />
                <div style={{ marginTop: '50px', marginBottom: '50px' }}>
                    <h1 className="text-header-md white-text">Memorization Made Free.</h1>
                    <p className="text-body-lg white-text">Memorize any verse in the ESV for free! No subscription. No catch.</p>
                    <br />
                    <div className="justify-content-center row">
                        <div className="col-sm-1 offset-sm-2" style={{ position: 'relative' }}>
                            <button className="arrow-button align-middle" onClick={switchReviewLeft}>
                                <img className="arrow-icon" src="/images/arrow_left.png" />
                            </button>
                        </div>
                        <div className="col">
                            <img src="/images/stars.png" style={{ paddingBottom: '20px' }} />
                            <p className="text-body-lg white-text" id="review-header"><b>"I would give it 10 stars if I could!!"</b></p>
                            <p className="text-body-sm white-text m-auto" id="review-body" style={{ maxWidth: '500px' }}><i>Such a well designed
                                app to help you memorize verses!! I haven’t put my phone down since I downloaded it- even better than
                                TikTok!!</i></p>
                        </div>
                        <div className="col-sm-1" style={{ position: 'relative' }}>
                            <button className="arrow-button" onClick={switchReviewRight}>
                                <img className="arrow-icon" src="/images/arrow_right.png" />
                            </button>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                </div>
                <img src="/images/grey_triangle.png" className="triangle-rotate" />
            </div>

            <div style={{ width: '100%' }}>
                <div>
                    <div className="text-header-md small-pad-top">
                        <h1 className="text-header-md" style={{ display: 'inline-block' }}>Bible Verse Memorization Made&nbsp;</h1>
                        <h1 className="text-header-md" id="type-word" style={{ display: 'inline-block', color: '#15CF74' }}>Easy.</h1>
                    </div>
                    <p className="text-body-lg">So what’s the hold up? Start memorizing today!</p>
                    <div className="row">
                        <div className="col">
                            <a href="https://apps.apple.com/us/app/versify-app/id1597230197" target="_blank">
                                <img className="download-icon" src="/images/apple_store.png" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.tarkowr.versify" target="_blank">
                                <img className="download-icon" src="/images/google_play.png" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;