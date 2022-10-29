import React from 'react';

export default class ContactBanner extends React.Component {
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
      <div className="py-5 mb-5 section-banner">
        <div className="bg-brand300 position-relative py-md-5">
          {/* Image Absolute */}
          <div className="position-md-absolute left-0 bottom-0 right-0">
            <div className="custom-container px-0">
              <div className="row">
                <div className="col-md-5 offset-md-7">
                  <div className="position-relative">
                    <div className="position-md-absolute right-0 left-0 bottom-0">
                      <div ref={this.image} className="contact-banner--image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={this.contactContainer} className="custom-container py-md-5">
            <div className="row py-5">
              <div className="col-12 col-md-6">
                <form name="contact" netlify="true">
                  <h3 className="mb-4 font-family-secondary">I&apos;d love to hear from you</h3>
                  <p className="mb-2">
                    You can get in touch via the form below or directly by emailing&nbsp;
                    <a href="mailto: info@penandpalm.com">hello@penandpalm.com</a>.
                  </p>
                  <p className="mb-4">
                    Please include as much detail as possible about your special day.
                  </p>
                  <div className="row align-items-center mb-2">
                    <label className="col-3">Name</label>
                    <input className="col-9 form-control" type="text" name="name" />
                  </div>
                  <div className="row align-items-center mb-2">
                    <label className="col-3">Email</label>
                    <input className="col-9 form-control" type="text" name="email" />
                  </div>
                  <div className="row align-items-center mb-2">
                    <label className="col-3">Event date</label>
                    <input className="col-9 form-control" type="text" name="event" />
                  </div>
                  <div className="row align-items-center mb-2">
                    <label className="col-3">Guest count</label>
                    <input className="col-9 form-control" type="number" name="guests" />
                  </div>
                  <div className="row align-items-center mb-2">
                    <label className="col-3">Message</label>
                    <textarea
                      className="col-9 form-control"
                      rows="3"
                      name="message"
                      placeholder="please include any requirements, ideas or preferences you have."
                    />
                  </div>

                  <div className="row">
                    <button className="col-4 ml-auto py-3 align-items-center font-color-black borderbottom border-color-black">
                      <span className="mr-3">Send</span>
                      <img src="/icon/arrow-long-right.svg" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
