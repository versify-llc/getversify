import Layout from '../Layout/Layout';
import { CONTACT_EMAIL } from '../../content/links';
import './Privacy.css';

const Privacy = () => {
  return (
    <Layout navClassName="nav-bg-light">
      <div className="page-spacer" />
      <div className="page-top" />

      <div className="flex flex-wrap justify-center privacy-page">
        <div className="w-full mx-3 md:w-1/2 privacy-content">
          <h1>Privacy Policy</h1>
          <p>
            <strong>Versify is a free app. It is intended for use as is.</strong>
          </p>
          <p>
            The purpose of this policy is to inform you of the collection, use, and disclosure of
            data if you download and use Versify.
          </p>
          <p>
            If you choose to use Versify, then you agree to the collection and use of information in
            relation to this policy. The personal information that we collect is used for providing
            and improving the app. We will not use or share your information with anyone except as
            described in this Privacy Policy.
          </p>

          <h2>Captured Data</h2>
          <p>
            Whenever you use Versify, in a case of an error in the app, we collect data and
            information to investigate the issue. This data may include information such as your
            operating system version, the configuration of the app, and the time and date.
          </p>

          <h2>Service Providers</h2>
          <p>We may employ third-party services for the following reasons:</p>
          <ul>
            <li>To improve features in Versify</li>
            <li>To assist us in analyzing how Versify is used.</li>
          </ul>

          <h2>Security</h2>
          <p>
            We value your trust in providing us your personal information, thus we strive to use
            acceptable means of protecting it. But remember that no method of transmission over the
            internet, or method of electronic storage is 100% secure and reliable, and we cannot
            guarantee its absolute security.
          </p>

          <h2>Links to Other Sites</h2>
          <p>
            Versify may contain links to other sites. If you click on a third-party link, you will
            be directed to that site. Note that these external sites are not operated by us.
            Therefore, we strongly advise you to review the Privacy Policy of these websites. We
            have no control over and assume no responsibility for the content, privacy policies, or
            practices of any third-party sites or services.
          </p>

          <h2>Changes to the Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. Thus, you are advised to review this
            page periodically for any changes. Future versions of our Privacy Policy can be found on
            this page.
          </p>
          <p>
            <b>This policy is effective as of 2021-11-25</b>
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, contact us at{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              target="_blank"
              rel="noreferrer"
              className="text-theme-blue"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
