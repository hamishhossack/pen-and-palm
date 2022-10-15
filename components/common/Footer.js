import React from "react";

const Footer = () => (
  <footer className="pt-5">
    <div className="custom-container mb-5 pb-5 pt-5">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">Pen & Palm</p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="https://commercejs.com/docs/"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                About
              </a>
              <a
                href="https://commercejs.com/features"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">Follow us</p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="https://www.instagram.com/penandpalm/"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.pinterest.co.uk/penandpalm/"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pintrest
              </a>
            </div>
            <div>
              <a
                href="https://www.etsy.com/uk/shop/PenAndPalm"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Etsy
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-3">Contact</p>
          <p className="mb-3">
            Contact on email&nbsp;
            <a href="mailto: info@penandpalm.com">info@penandpalm.com</a>
          </p>
          <p>You can also DM me on any social media platform!</p>
        </div>
      </div>
    </div>
    <div className="pt-md-5">
      <div className="bg-brand300">
        <div className="custom-container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="pt-5 pb-0 pt-md-4 pb-md-4 d-flex align-items-center flex-wrap justify-content-center"></div>
          <div className="font-color-brand font-size-caption py-4 text-right">
            <a
              href="https://commercejs.com/"
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              &copy; {new Date().getFullYear()} Pen & Palm
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
