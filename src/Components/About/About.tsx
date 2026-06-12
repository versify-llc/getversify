import Layout from '../Layout/Layout';
import './About.css';

const About = () => {
  return (
    <Layout navClassName="nav-bg-light">
      <div className="px-4 mx-auto">
        <div className="flex flex-wrap justify-center pt-12">
          <div className="w-full md:w-2/12">
            <div className="text-center md:text-left">
              <div className="text-header-sm">MEET</div>
              <h1 className="text-header text-theme-green">Versify.</h1>
            </div>
          </div>
          <div className="md:w-1/12"></div>
          <div className="w-full md:w-4/12 pb-4 text-center md:text-left">
            <p className="text-body-md text-theme-muted">
              <i>
                "My son, do not forget my teaching, but let your heart keep my commandments, for
                length of days and years of life and peace they will add to you."
              </i>
              <br />
              Proverbs 3:1-2
            </p>
            <hr className="about-divider mx-auto md:mx-0 my-6" />
            <p className="text-body-md">
              Versify is a free app that makes it easy and fun to memorize Bible verses through
              interactive games. Our inspiration comes from Proverbs 3:1-2, which calls God's people
              to keep His Word in their hearts.
            </p>
            <br />
            <p className="text-body-md">
              <b>
                We want to give everyone the opportunity and tools they need to store the Word of
                God in their heart.
              </b>
            </p>
          </div>
        </div>
      </div>

      <section className="bg-(--color-theme-green) pb-4">
        <img src="/images/white_triangle.png" alt="" className="triangle" />
        <div className=" pt-6 md:pt-12">
          <div className="text-header-xl text-white">350,000+</div>
          <div className="text-header-sm text-white">Downloads</div>
        </div>
        <br />
        <div className="flex flex-wrap pb-4 justify-center">
          <div className="w-full md:w-3/12">
            <div className="text-header text-white">700,000+</div>
            <div className="text-header-sm text-white">Verses Memorized</div>
          </div>
          <div className="pt-4 md:pt-0 w-full md:w-3/12">
            <div className="text-header text-white">16,000,000+</div>
            <div className="text-header-sm text-white">Games Played</div>
          </div>
        </div>
      </section>

      <img src="/images/green_triangle.png" alt="" className="triangle" />
      <section className="w-full md:w-7/12 mx-auto px-4 mb-8 md:mb-16">
        <div className="flex flex-wrap justify-center mt-8 md:mt-20">
          <div className="w-full md:w-5/12">
            <div className="text-center md:text-left">
              <div className="text-header-sm">MEET</div>
              <div className="text-header text-theme-green pr-2">The Team.</div>
            </div>
          </div>
          <div className="w-full md:w-7/12 text-center md:text-left">
            <p className="text-body-md">
              <b>
                Versify was created by two college students who have a passion for software
                development and sharing God's Word with others.
              </b>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-6 md:mt-12">
          <div className="w-full md:w-4/12 content-center">
            <img
              className="about-profile-img"
              src="/images/richie.png"
              alt="Richie Tarkowski"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/12"></div>
          <div className="w-full md:w-7/12 text-center md:text-left">
            <p className="text-body-md pt-4">
              <b>Richie Tarkowski</b>
            </p>
            <p className="text-body-sm text-theme-muted">
              Richie is the co-founder and CEO of Versify. He graduated from Ferris State University
              with a degree in Computer Information Systems, and he currently works as a software
              engineer at Hagerty. Richie and his wife serve in the college ministry at their
              church.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-6 md:mt-12">
          <div className="w-full md:w-7/12 text-center md:text-left">
            <p className="text-body-md pt-4">
              <b>Alyssa Tarkowski</b>
            </p>
            <p className="text-body-sm text-theme-muted">
              Alyssa is the co-founder and COO of Versify. She recently graduated from Ferris State
              University with a degree in Computer Information Systems, and she currently works as a
              data engineer at State Farm. Her favorite sport right now is pickleball, and she's
              read more books by Puritan authors than most people her age.
            </p>
          </div>
          <div className="w-full md:w-1/12"></div>
          <div className="about-profile--reversed w-full md:w-4/12 content-center">
            <img
              className="about-profile-img"
              src="/images/alyssa.jpg"
              alt="Alyssa Tarkowski"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
