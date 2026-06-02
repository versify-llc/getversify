import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Privacy = () => {
  return (
    <>
      <Navbar backgroundClass="nav-bg-light" />

      <div className="page-spacer" />
      <div className="page-top" />

      <div className="flex flex-wrap justify-center" style={{ textAlign: 'left' }}>
        <div className="w-full mx-3 md:w-1/2">
          <h2>Privacy Policy</h2> <br />
          <h4>Versify is a free app. It is intended for use as is. </h4> <br />
          The purpose of this policy is to inform you of the collection, use, and disclosure of data
          if you download and use Versify. <br /> <br />
          If you choose to use Versify, then you agree to the collection and use of information in
          relation to this policy. The personal information that we collect is used for providing
          and improving the app. We will not use or share your information with anyone except as
          described in this Privacy Policy. <br /> <br />
          <h4>Captured Data</h4>
          Whenever you use Versify, in a case of an error in the app, we collect data and
          information to investigate the issue. This data may include information such as your
          operating system version, the configuration of the app, and the time and date. <br />{' '}
          <br />
          <h4>Service Providers</h4>
          We may employ third-party services for to the following reasons: <br />
          <ul>
            <li>To improve features in Versify</li>
            <li>To assist us in analyzing how Versify is used.</li>
          </ul>
          <h4>Security</h4>
          We value your trust in providing us your personal information, thus we strive to use
          acceptable means of protecting it. But remember that no method of transmission over the
          internet, or method of electronic storage is 100% secure and reliable, and we cannot
          guarantee its absolute security. <br /> <br />
          <h4>Links to Other Sites</h4>
          Versify may contain links to other sites. If you click on a third-party link, you will be
          directed to that site. Note that these external sites are not operated by us. Therefore,
          we strongly advise you to review the Privacy Policy of these websites. We have no control
          over and assume no responsibility for the content, privacy policies, or practices of any
          third-party sites or services. <br /> <br />
          <h4>Changes to the Privacy Policy</h4>
          We may update our Privacy Policy from time to time. Thus, you are advised to review this
          page periodically for any changes. Future versions of our Privacy Policy can be found on
          this page. <br /> <br />
          <h4>This policy is effective as of 2021-11-25</h4> <br />
          <h4>Contact Us</h4>
          If you have any questions about this Privacy Policy, contact us at{' '}
          <a href="mailto:theversifyapp@gmail.com" target="_blank" className="text-theme-blue">
            theversifyapp@gmail.com
          </a>
          . <br /> <br />
        </div>
      </div>
      <Footer />
      <div className="page-spacer"></div>
    </>
  );
};

export default Privacy;
