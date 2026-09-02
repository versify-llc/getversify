import Layout from '../Layout/Layout';
import { CONTACT_EMAIL } from '../../content/links';
import './Terms.css';

const Terms = () => {
  return (
    <Layout navClassName="nav-bg-light">
      <div className="flex justify-center terms-page">
        <div className="w-full mx-3 my-6 md:w-1/2">
          <h1>Terms &amp; Conditions</h1>
          <p>
            <b>Effective as of 2026-08-29</b>
          </p>
          <p>
            These Terms &amp; Conditions ("Terms") govern your use of Versify (the "App"). By
            downloading, accessing, or using Versify, you agree to these Terms. If you do not agree,
            please do not use the App.
          </p>

          <h2>Description of Service</h2>
          <p>
            Versify helps users memorize and organize Bible passages. The App can be used locally on
            your device, or with an optional online account that syncs your data across devices
            using third-party services described in our{' '}
            <a href="/privacy" className="text-theme-blue">
              Privacy Policy
            </a>
            .
          </p>

          <h2>Accounts</h2>
          <p>
            Creating an account is optional. If you create one, you are responsible for maintaining
            the confidentiality of your login credentials and for all activity that occurs under
            your account. You must provide accurate information when creating an account. If you are
            under the age required to consent to these Terms in your jurisdiction, you should only
            create an account with the involvement of a parent or guardian.
          </p>
          <p>You may delete your account at any time within the App.</p>
          <p>
            We reserve the right to disable, suspend, or delete any account, and to delete any data
            associated with that account stored on our servers (including AWS), at our sole
            discretion and without prior notice — for example, in cases of suspected violation of
            these Terms, prolonged inactivity, technical or security concerns, or discontinuation of
            the account feature. We are not liable for any loss of data resulting from such action.
          </p>

          <h2>Your Content</h2>
          <p>
            "Your Content" means the passage references, categories, and other data you create or
            store while using Versify. You retain ownership of Your Content. By using the optional
            sync feature, you grant us a limited license to store and transmit Your Content solely
            for the purpose of providing the App's features to you, such as syncing across your
            devices.
          </p>

          <h2>Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the App for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to other users' accounts or data</li>
            <li>Interfere with or disrupt the App or the servers/networks that support it</li>
            <li>Reverse engineer or misuse the App beyond normal, intended use</li>
          </ul>

          <h2>Bible Passage Content</h2>
          <p>
            Bible passage text displayed in the App is retrieved from third-party Bible text
            providers/APIs and is subject to their own copyright and licensing terms. Versify does
            not claim ownership of Bible text itself.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p>
            Versify is provided "as is" and "as available," without warranties of any kind, whether
            express or implied. We do not guarantee that the App will be uninterrupted, error-free,
            or that any data (including synced data) will always be preserved without loss.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Versify and its creators shall not be liable for
            any indirect, incidental, or consequential damages, or for any loss of data, arising
            from your use of the App.
          </p>

          <h2>Changes to the App or These Terms</h2>
          <p>
            We may update the App or these Terms from time to time. If we make material changes, we
            will update the effective date. Continued use of the App after changes take effect
            constitutes acceptance of the updated Terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms are governed by the laws of [Your State/Country], without regard to conflict
            of law principles.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms, contact us at{' '}
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

export default Terms;
