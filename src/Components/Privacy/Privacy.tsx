import Layout from '../Layout/Layout';
import { CONTACT_EMAIL } from '../../content/links';
import './Privacy.css';

const Privacy = () => {
  return (
    <Layout navClassName="nav-bg-light">
      <div className="flex justify-center privacy-page">
        <div className="w-full mx-3 my-6 md:w-1/2">
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
          <p>
            If you create an online account, your use of Versify is also governed by our{' '}
            <a href="/terms" className="text-theme-blue">
              Terms &amp; Conditions
            </a>
            .
          </p>

          <h2>Local-Only Use</h2>
          <p>
            Versify can be used without creating an account. If you use Versify this way, your
            passages, categories, and progress are stored only on your device and are not sent to
            us. You will need an internet connection to download Bible passage text, but no account
            or personal information is required for local use.
          </p>

          <h2>Optional Online Account</h2>
          <p>
            Versify offers an optional online account feature that lets you sync your data across
            devices. Creating an account is entirely optional — all app features are available to
            local-only users.
          </p>
          <p>If you choose to create an account, we use the following third-party services:</p>
          <ul>
            <li>
              <strong>Firebase Authentication</strong> (provided by Google) to create and manage
              your account using your email address and password. Your email and password are
              collected and stored by Firebase, not by us. See{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
                className="text-theme-blue"
              >
                Google's Privacy Policy
              </a>{' '}
              for details on how Firebase handles this data.
            </li>
            <li>
              <strong>Amazon Web Services (AWS)</strong>, specifically Amazon DynamoDB hosted in the
              US (us-east-1 region), to store your app data associated with your account. This
              includes your saved passage references (not Bible text itself), the categories you
              create, and your streak information.
            </li>
          </ul>

          <h2>Account Deletion</h2>
          <p>
            You can delete your account at any time from within the app. Deleting your account
            permanently removes your associated data — including your passage references,
            categories, and streak information — from our AWS storage, as well as your credentials
            from Firebase Authentication. This action cannot be undone.
          </p>

          <h2>Captured Data</h2>
          <p>
            Whenever you use Versify, in a case of an error in the app, we collect data and
            information to investigate the issue. This data may include information such as your
            operating system version, the configuration of the app, and the time and date.
          </p>

          <h2>Analytics</h2>
          <p>
            We use PostHog to help us understand how Versify is used and to help us identify and fix
            errors. Data collected through PostHog is anonymous and is not tied to your identity,
            email, or account.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Versify is designed to be usable by people of all ages, including young children, when
            used in local-only mode without an account. Creating an online account requires an email
            address. If you are a parent or guardian and believe your child under 13 has created an
            account without your consent, please contact us at the email below so we can delete the
            account and associated data.
          </p>

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
            <b>This policy is effective as of 2026-08-29</b>
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
