import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from 'swiper/modules';

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

        this.image.current.style.transform = `translateY(${-scrolledRatio * 400}px)`;
      }
    }
  }

  renderImage() {
    return (
      <div id="image" className="col-md-7 self-center">
        <div ref={this.image} className="ml-md-4 mt-4">
          {Array.isArray(this.props.img) ? (
            <Swiper
              slidesPerView={1}
              watchOverflow={false}
              centeredSlides={true}
              loop
              allowTouchMove
              autoplay={{ delay: 1500, pauseOnMouseEnter: true }}
              speed={1000}
              modules={[Autoplay, EffectCreative]}
            >
              {this.props.img.map((image) => (
                <SwiperSlide key={image}>
                  <div className={`${image}-banner--image`} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className={`${this.props.img}-banner--image`} />
          )}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="section-banner">
        <div
          className={`${this.props.bg} position-relative py-5 scallop-down-${
            this.props.otherBg || 'white'
          }`}
        >
          {/* Content */}
          <div ref={this.contactContainer} className="custom-container py-md-5">
            <div className="row reorder">
              {this.props.imgLeft && this.renderImage()}
              <div className="col-12 col-md-5 self-center py-5">{this.props.children}</div>
              {!this.props.imgLeft && this.renderImage()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
