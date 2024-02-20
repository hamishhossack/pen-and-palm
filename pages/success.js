import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import ContactBanner from '../components/productAssets/ContactBanner';

export default class Success extends React.Component {
  constructor(props) {
    super(props);

    this.contactContainer = React.createRef();
    this.image = React.createRef();

    this.handleScroll = this.handleScroll.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    window.requestAnimationFrame(this.animate);
  }

  animate() {
    if (!this.contactContainer.current) {
      return;
    }
    const dimensions = this.contactContainer.current.getBoundingClientRect();
    const x = window.matchMedia('(min-width: 768px)');

    if (x.matches) {
      if (dimensions.top - window.innerHeight < 0 && dimensions.bottom > 0) {
        const scrolledRatio = (window.innerHeight - dimensions.top) / window.innerHeight - 1;

        this.image.current.style.transform = `translateY(${-scrolledRatio * 100}px)`;
      }
    }
  }

  render() {
    return (
      <Root>
        <Head>
          <title>Success | Pen & Palm</title>
        </Head>
        <div className="my-lg">
          <div className="position-relative py-md-5">
            {/* Content */}
            <div className="custom-container py-md-5">
              <div className="row py-5">
                <div className="col-12 col-md-6">
                  <h2>Thanks for you message!</h2>
                  <p>I aim to get back in touch within 48 hours.</p>
                </div>
                <div className="col-md-6">
                  <div ref={this.image} className="home-contact-banner--image ml-md-4 mt-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Root>
    );
  }
}
