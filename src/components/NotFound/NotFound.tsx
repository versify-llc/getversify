import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';

const NotFound = () => {
  return (
    <Layout navClassName="nav-bg-light">
      <div className="flex-1 content-center px-3 pb-12">
        <h1 className="text-header-xl text-theme-green">Oops!</h1>
        <br />
        <h3>It seems like you've wandered off the straight and narrow path.</h3>
        <p className="text-body-sm">Let's get you back on track!</p>
        <br />
        <Link to="/" className="btn-primary btn-primary--link">
          Return Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
