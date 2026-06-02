import { useState } from 'react';
import './Home.css';
import Layout from '../Layout/Layout';
import StoreBadges from '../StoreBadges/StoreBadges';
import { GAME_OPTIONS, REVIEWS } from '../../content/home';

const incrementReviewIndex = (current: number) => {
  if (current === REVIEWS.length - 1) {
    return 0;
  }

  return current + 1;
};

const decrementReviewIndex = (current: number) => {
  if (current === 0) {
    return REVIEWS.length - 1;
  }

  return current - 1;
};

const Home = () => {
  const [gameIndex, setGameIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);

  const selectedGame = GAME_OPTIONS[gameIndex];
  const review = REVIEWS[reviewIndex];

  return (
    <Layout navBackgroundClass="nav-bg-grey" className="bg-theme-lightgrey">
      <div className="page-spacer"></div>
      <div className="container page-top">
        <div className="flex flex-wrap -mx-3 justify-center home-hero-row">
          <div className="shrink-0 px-3 w-full md:w-5/12">
            <div className="text-center md:text-right">
              <h1 className="text-header">
                Bible Verse Memorization
                <br />
                Made Easy
              </h1>
              <p className="text-body-lg home-hero-subtext">
                Our app is available in app stores! Download it today.
              </p>

              <StoreBadges />
            </div>
          </div>
          <div className="shrink-0 px-3 w-full md:w-1/12"></div>
          <div className="shrink-0 px-3 w-full md:w-5/12 text-center md:text-left home-phone-col">
            <img
              className="home-phone-img"
              src="/images/home_screen.png"
              alt="Versify home screenshot"
            />
          </div>
        </div>
      </div>

      <section className="section-banner section-banner--white home-games-section">
        <img src="/images/grey_triangle.png" className="triangle" alt="" />
        <div className="section-banner__inner">
          <h2 className="text-header-md">Memorization Made Fun.</h2>
          <p className="text-body-lg home-games-intro">
            Play a variety of interactive games to help you memorize verses
          </p>

          <div className="flex flex-wrap -mx-3 justify-center home-games-row">
            <div className="shrink-0 px-3 w-full md:w-1/4 text-center md:text-right">
              <div
                className="home-game-options"
                role="group"
                aria-label="Choose a memorization game to preview"
              >
                {GAME_OPTIONS.map((option, index) => (
                  <button
                    key={option.id}
                    type="button"
                    className={`home-game-option flex flex-wrap -mx-3 ${
                      gameIndex === index ? 'is-selected' : ''
                    }`}
                    aria-pressed={gameIndex === index}
                    onClick={() => setGameIndex(index)}
                  >
                    <div className="shrink-0 px-3 w-5/12">
                      <i className={`${option.icon} home-game-icon`} aria-hidden="true"></i>
                    </div>
                    <div className="shrink-0 px-3 w-7/12 text-body-lg home-game-label">
                      {option.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="shrink-0 px-3 w-full md:w-1/12"></div>
            <div className="shrink-0 px-3 w-full md:w-1/4 text-center md:text-left home-phone-col">
              <img
                className="home-game-screen"
                src={selectedGame.screen}
                alt={`${selectedGame.label} game screenshot`}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-banner section-banner--blue">
        <img src="/images/white_triangle.png" className="triangle" alt="" />
        <div className="section-banner__inner section-banner__inner--spaced">
          <h2 className="text-header-md text-white">Memorization Made Free.</h2>
          <p className="text-body-lg text-white home-free-intro">
            Memorize any verse in ESV, NIV, NLT, and more for free! No subscription. No ads.
          </p>
          <br />
          <div className="flex flex-wrap -mx-3 home-review">
            <div className="shrink-0 px-3 w-1/12 home-review-control-col">
              <button
                className="home-review-control"
                type="button"
                onClick={() => setReviewIndex(decrementReviewIndex)}
                aria-label="Previous review"
              >
                <i className="fas fa-chevron-left fa-2x home-review-icon"></i>
              </button>
            </div>
            <div className="shrink-0 px-3 w-1/2">
              <div className="home-review-stars" aria-label="Rated 5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="fas fa-star fa-lg home-review-star" aria-hidden="true"></i>
                ))}
              </div>
              <p className="text-body-lg text-white">
                <b>{review.header}</b>
              </p>
              <p className="text-body-sm text-white home-review-body">
                <i>{review.body}</i>
              </p>
            </div>
            <div className="shrink-0 px-3 w-1/12 home-review-control-col">
              <button
                className="home-review-control"
                type="button"
                onClick={() => setReviewIndex(incrementReviewIndex)}
                aria-label="Next review"
              >
                <i className="fas fa-chevron-right fa-2x home-review-icon"></i>
              </button>
            </div>
          </div>
        </div>
        <img src="/images/grey_triangle.png" className="triangle triangle--flip" alt="" />
      </section>

      <div className="home-cta-section">
        <div className="text-header-md home-cta-heading">
          <h2 className="text-header-md home-cta-heading-text">
            Bible Verse Memorization Made&nbsp;
          </h2>
          <h2 className="text-header-md text-theme-green home-cta-heading-text">Easy.</h2>
        </div>
        <p className="text-body-lg">So what’s the hold up? Start memorizing today!</p>
        <StoreBadges />
      </div>
      <br />
    </Layout>
  );
};

export default Home;
