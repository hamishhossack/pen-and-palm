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
      <div className="mb-5 section-banner">
        <div className="position-relative py-md-5">
          {/* Content */}
          <div ref={this.contactContainer} className="custom-container py-md-5">
            <div className="row py-5">
              <div className="col-12 col-md-6">
                <form
                  name={this.props.formName}
                  method="POST"
                  action="/success"
                  data-netlify="true"
                  data-netlify-recaptcha="true"
                  data-netlify-honeypot="bot-field"
                  netlify
                >
                  <input type="hidden" name="form-name" value={this.props.formName} />
                  <h3 className="mb-4 font-family-secondary">I&apos;d love to hear from you</h3>
                  <p className="mb-2">
                    You can get in touch via the form below or directly by emailing&nbsp;
                    <a href="mailto: info@penandpalm.com">hello@penandpalm.com</a>.
                  </p>
                  <p className="mb-4">
                    Please include as much detail as possible about your special day.
                  </p>
                  <div className="row align-items-center mb-2">
                    <label className="col-md-3 py-3">Name</label>
                    <input className="col-md-9 form-control" type="text" name="name" />
                  </div>
                  <div className="row align-items-center mb-2">
                    <label className="col-md-3 py-3">Email</label>
                    <input className="col-md-9 form-control" type="text" name="email" />
                  </div>
                  <div className="row align-items-center mb-2">
                    <label className="col-md-3 py-3">Event date</label>
                    <input className="col-md-9 form-control" type="text" name="event" />
                  </div>
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                    </label>
                  </p>
                  <div className="row align-items-center mb-2">
                    <label className="col-md-3 py-3">Guest count</label>
                    <input className="col-md-9 form-control" type="number" name="guests" />
                  </div>
                  <div className="row align-items-center mb-2">
                    <label className="col-md-3 py-3">Message</label>
                    <textarea
                      className="col-md-9 form-control"
                      rows="6"
                      name="message"
                      placeholder="please include any requirements, ideas or preferences you have."
                    />
                  </div>
                  <div className="row align-items-center mb-2">
                    <div data-netlify-recaptcha="true"></div>
                  </div>

                  <div className="row">
                    <button
                      type="submit"
                      className="col-4 ml-auto py-3 align-items-center font-color-black borderbottom border-color-black"
                    >
                      <span className="mr-3">Send</span>
                      <img src="/icon/arrow-long-right.svg" />
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-6">
                <div ref={this.image} className="home-contact-banner--image ml-md-4 mt-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
