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
                "All Scripture is breathed out by God and profitable for teaching, for reproof, for
                correction, and for training in righteousness, that the man of God may be complete,
                equipped for every good work."
              </i>
              <br />2 Timothy 3:16-17
            </p>
            <hr className="about-divider mx-auto md:mx-0 my-6" />
            <p className="text-body-md">
              Versify is a free, easy-to-use app that is designed to help you memorize Scripture
              through interactive games. Our inspiration for this app comes from 2 Timothy 3:16-17
              and Proverbs 3:1-2.
            </p>
            <br />
            <p className="text-body-md">
              <b>
                We hope to make it easier for everyone to access effective tools for Scripture
                memorization.
              </b>
            </p>
          </div>
        </div>
      </div>

      <section className="bg-(--color-theme-green) pb-4">
        <img src="/images/white_triangle.png" alt="" className="triangle" />
        <div className=" pt-6 md:pt-12">
          <div className="text-header-xl text-white">700,000+</div>
          <div className="text-header-sm text-white">Verses Memorized</div>
        </div>
        <br />
        <div className="flex flex-wrap pb-4 justify-center">
          <div className="w-full md:w-3/12">
            <div className="text-header text-white">30,000+</div>
            <div className="text-header-sm text-white">Monthly Users</div>
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
                Versify was created by two siblings with a passion for software development and
                sharing the Word of God with others.
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
              Richie is the lead software engineer behind Versify. He graduated from Ferris State
              University and currently works at Hagerty developing the company's website and mobile
              app. Richie and his wife live in Illinois and are actively serving in the college
              ministry at their church.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-6 md:mt-12">
          <div className="w-full md:w-7/12 text-center md:text-left">
            <p className="text-body-md pt-4">
              <b>Alyssa Hulet</b>
            </p>
            <p className="text-body-sm text-theme-muted">
              Alyssa oversees the business side of Versify. She recently graduated from Ferris State
              University and currently works as a data engineer at State Farm. Alyssa and her
              husband live in Michigan, and in her free time she enjoys playing pickleball and
              reading Puritan books.
            </p>
          </div>
          <div className="w-full md:w-1/12"></div>
          <div className="about-profile--reversed w-full md:w-4/12 content-center">
            <img
              className="about-profile-img"
              src="/images/alyssa.png"
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
