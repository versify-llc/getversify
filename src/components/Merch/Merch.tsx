import Layout from '../Layout/Layout';
import './Merch.css';

const Merch = () => {
  return (
    <Layout navClassName="nav-bg-light">
      <main className="px-3 py-12 w-full md:w-7/12 mx-auto">
        <h1 className="text-header text-center md:text-left">Merch Designs</h1>
        <p className="text-body-sm text-left">
          Some of the t-shirt images on our merch website, Printful, appear pixelated. We've
          included the designs here so you can see them in better detail. We've also ordered these
          shirts ourselves and confirmed that the print quality is great!
        </p>
        <br />
        <p className="flex justify-left">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://versify.printful.me/product/versify-embroidered-t-shirt-cowboy-edition-2"
          >
            Versify embroidered t-shirt | Cowboy
          </a>
        </p>
        <img
          src="/images/cowboy_merch.jpeg"
          alt="Versify embroidered t-shirt cowboy design"
          className="merch-img w-full"
        />
        <p className="flex justify-left mt-8">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://versify.printful.me/product/versify-embroidered-t-shirt-knight"
          >
            Versify embroidered t-shirt | Knight
          </a>
        </p>
        <img
          src="/images/knight_merch.jpeg"
          alt="Versify embroidered t-shirt knight design"
          className="merch-img w-full"
        />
        <p className="flex justify-left mt-8">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://versify.printful.me/product/embroidered-t-shirt-back-image"
          >
            Versify embroidered t-shirt | Astronaut
          </a>
        </p>
        <img
          src="/images/astronaut_merch.jpeg"
          alt="Versify embroidered t-shirt astronaut design"
          className="merch-img w-full"
        />
        <p className="text-body-sm text-left mt-8">
          Each design was hand-drawn by my friend,{' '}
          <a href="mailto:njhank00@gmail.com" className="link">
            Noah Hank
          </a>
          .
        </p>
      </main>
    </Layout>
  );
};

export default Merch;
