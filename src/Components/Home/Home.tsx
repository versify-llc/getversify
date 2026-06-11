import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Layout from '../Layout/Layout';
import StoreBadges from '../StoreBadges/StoreBadges';
import { GAME_OPTIONS, REVIEWS } from '../../content/home';
import './Home.css';

const Home = () => {
  const [gameIndex, setGameIndex] = useState(0);
  const selectedGame = GAME_OPTIONS[gameIndex];

  return (
    <Layout navClassName="nav-bg-grey" className="bg-theme-lightgrey">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center pt-6">
          <div className="w-10/12 md:w-5/12">
            <div className="text-center md:text-right">
              <h1 className="text-header">
                Bible Verse Memorization
                <br />
                Made Easy
              </h1>
              <div className="text-body-md">Versify is available in app stores!</div>
              <div className="text-body-md mb-4">Download it today.</div>
              <StoreBadges />
            </div>
          </div>
          <div className="w-full md:w-1/12"></div>
          <div className="w-full md:w-5/12 pb-8 text-center md:text-left">
            <img
              className="landing-img"
              src="/images/home_screen.png"
              alt="Versify home screenshot"
            />
          </div>
        </div>
      </div>

      <section className="bg-white pb-2">
        <img src="/images/grey_triangle.png" className="triangle" alt="" />
        <div className="mt-12">
          <h2 className="text-header-md">Memorization Made Fun.</h2>
          <p className="text-body-md px-6 mb-8">
            Play a variety of interactive games to help you memorize verses
          </p>
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-1/3 px-6">
              <div
                className="grid grid-cols-2 md:grid-cols-1 gap-2 pb-6"
                role="group"
                aria-label="Choose a memorization game to preview"
              >
                {GAME_OPTIONS.map((option, index) => (
                  <button
                    key={option.id}
                    type="button"
                    className={`home-game-option ${gameIndex === index ? 'is-selected' : ''}`}
                    aria-pressed={gameIndex === index}
                    onClick={() => setGameIndex(index)}
                  >
                    <FontAwesomeIcon icon={option.icon} size="2x" className="px-2" aria-hidden />
                    <span className="pl-2 text-body-md">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/4 text-center md:text-left pb-6">
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

      <section className="bg-(--color-theme-blue)">
        <img src="/images/white_triangle.png" className="triangle triangle--white" alt="" />
        <div className="my-12 px-3">
          <h2 className="text-header-md text-white">Memorization Made Free.</h2>
          <p className="px-2 text-body-md text-white">
            Memorize any verse in ESV, NIV, NLT, and more for free! No subscription. No ads.
          </p>
          <br />
          <div className="pb-6" aria-label="Rated 5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                size="lg"
                className="px-1 text-white"
                aria-hidden
              />
            ))}
          </div>
          <p className="text-body-md text-white">
            <b>{REVIEWS[0].header}</b>
          </p>
          <p className="home-review-body pb-4 text-body-sm text-white">
            <i>{REVIEWS[0].body}</i>
          </p>
        </div>
        <img src="/images/grey_triangle.png" className="triangle triangle--flip" alt="" />
      </section>

      <div className="mt-4 md:mt-0">
        <h2 className="text-header-md">
          Bible Verse Memorization Made <span className="text-theme-green">Easy.</span>
        </h2>
        <p className="text-body-md">So what's the hold up? Start memorizing today!</p>
        <div className="mx-auto">
          <StoreBadges />
        </div>
      </div>
      <br />
    </Layout>
  );
};

export default Home;
