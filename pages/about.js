import React from "react";
import Head from "next/head";
import Image from "next/image";
import Root from "../components/common/Root";
import Footer from "../components/common/Footer";

const About = () => (
  <Root>
    <Head>
      <title>About | Pen & Palm</title>
    </Head>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
            <h2 className="font-size-header mb-4">Oh hi there!</h2>
            <p className="font-size-subheader mb-4">
              I&apos;m Ilona (pronounced il-o-na) and I&apos;m a crazy cat lady, total music
              obsessive and more recently I would actually go as far as referring to myself as a
              runner which is still a total shock!
            </p>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <Image
                src="/images/ilona.jpg"
                alt="Ilona"
                width="350"
                height="500"
                layout="intrinsic"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <Image
                src="/images/suite.jpg"
                alt="Suite"
                width="400"
                height="350"
                layout="intrinsic"
              />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">Services</h3>
            <p className="font-size-subheader mb-4">
              I can help you with all of your stationery needs for before (wedding party proposal
              cards, save the dates, invitations), during (on the day signage, place settings) and
              after your wedding (thank you cards)! I love talking all things weddings so please get
              in touch: hello@penandpalm.com.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Root>
);

export default About;
