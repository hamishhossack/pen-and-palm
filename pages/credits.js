import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';

const Credits = () => {
  return (
    <Root>
      <Head>
        <title>Credits | Pen & Palm</title>
      </Head>
      <div className="section-container py-md-5">
        <div className="custom-container py-md-5">
          <div className="row py-5">
            <div className="col-12 text-center">
              <h1>Photographer Credits</h1>
              <div className="credits">
                <a href="https://london-weddingphotographer.com/">Wojtek</a>
                <div className="dot" />
                <a href="https://thechamberlins.co/">The Chamberlins</a>
                <div className="dot" />
                <a href="https://thespringles.com/">The Springles</a>
                <div className="dot" />
                <a href="http://www.frsphoto.co/">Felix Russell-Saw</a>
                <div className="dot" />
                <a href="https://davidchristopher-photography.co.uk/">David Christopher</a>
                <div className="dot" />
                <a href="https://lindyrogers.co.uk/">Lindy Rogers</a>
                <div className="dot" />
                <a href="https://www.natashajay.co.uk/">Natasha Jay</a>
                <div className="dot" />
                <a href="https://www.albaturnbull.com/">Alba Turnbull</a>
                <div className="dot" />
                <a href="https://www.hannahjonesweddings.co.uk/weddings">Hannah Jones - Weddings</a>
                <div className="dot" />
                <a href="https://www.lottietopping.com/">Lottie Topping</a>
                <div className="dot" />
                <a href="https://www.jessicabevanphotography.com/">Jessica Bevan</a>
                <div className="dot" />
                <a href="https://lauradeanphotography.com/">Laura Dean</a>
                <div className="dot" />
                <a href="https://www.clairebemisterphotography.com/">Claire Bemister</a>
                <div className="dot" />
                <a href="https://www.samandyaz.com/">Sam and Yaz</a>
                <div className="dot" />
                <a href="https://www.paulplacitelliphotography.com/">Paul Placitelli</a>
                <div className="dot" />
                <a href="https://josharkon.com/">Josh Harkon</a>
                <div className="dot" />
                <a href="https://www.studiodt.com/gb/">DT Studio</a>
                <div className="dot" />
                <a href="https://www.rollingpictures.co.uk/">Rolling Pictures</a>
                <div className="dot" />
                Nel Nicholson
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Root>
  );
};

export default Credits;
