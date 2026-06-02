import { APP_STORE_URL, PLAY_STORE_URL } from '../../content/links';

const StoreBadges = () => {
  return (
    <>
      <a href={APP_STORE_URL} target="_blank" rel="noreferrer">
        <img
          className="download-icon"
          src="/images/apple_store.png"
          alt="Download Versify on the Apple App Store"
        />
      </a>
      <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
        <img
          className="download-icon"
          src="/images/google_play.png"
          alt="Get Versify on Google Play"
        />
      </a>
    </>
  );
};

export default StoreBadges;
