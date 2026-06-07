import { useState } from 'react';
import Layout from '../Layout/Layout';
import StoreBadges from '../StoreBadges/StoreBadges';
import { GAME_OPTIONS, REVIEWS } from '../../content/home';
import './Home.css';

const Home = () => {
  const [gameIndex, setGameIndex] = useState(0);

  const selectedGame = GAME_OPTIONS[gameIndex];

  return (
    <Layout navClassName="nav-bg-grey" className="bg-theme-lightgrey">
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
          <div className="flex flex-wrap justify-center pb-5">
            <div className="px-3">
              <div className="home-review-stars" aria-label="Rated 5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="fas fa-star fa-lg home-review-star" aria-hidden="true"></i>
                ))}
              </div>
              <p className="text-body-lg text-white">
                <b>{REVIEWS[0].header}</b>
              </p>
              <p className="text-body-sm text-white home-review-body">
                <i>{REVIEWS[0].body}</i>
              </p>
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
        <p className="text-body-lg">So what's the hold up? Start memorizing today!</p>
        <StoreBadges />
      </div>
      <br />
    </Layout>
  );
};

export default Home;
