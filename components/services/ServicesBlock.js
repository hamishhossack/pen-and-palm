import React from 'react';

export default class ServicesBlock extends React.Component {
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
      <div className="my-5 section-banner">
        <div className={`${this.props.bg ?? 'bg-brand300'} position-relative py-md-5`}>
          {/* Image Absolute */}
          <div className="position-md-absolute left-0 bottom-0 right-0">
            <div className="custom-container px-0">
              <div className="row">
                <div className={`col-md-5 ${this.props.imgLeft ? '' : 'offset-md-7'}`}>
                  <div className="position-relative">
                    <div className="position-md-absolute right-0 left-0 bottom-0">
                      <div ref={this.image} className={`${this.props.img}-banner--image`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={this.contactContainer} className="custom-container py-md-5">
            <div className="row py-5">
              <div className={`col-12 col-md-6 ${this.props.imgLeft ? 'offset-md-6' : ''}`}>
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
