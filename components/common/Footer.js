import Link from 'next/link';
import React from 'react';

const Footer = () => (
  <footer className="bg-brand300 mt-5 pt-5">
    <div className="custom-container py-5">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-3 offset-md-1">
          <p className="font-family-secondary font-size-display1 mb-4">Pen & Palm</p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <Link href="/about">
                <a className="mb-3 d-block font-color-medium">About</a>
              </Link>
              <Link href="/services">
                <a className="mb-3 d-block font-color-medium">Services</a>
              </Link>
              <Link href="/contact">
                <a className="mb-3 d-block font-color-medium">Contact</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3 offset-md-1">
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
                href="https://www.etsy.com/uk/shop/PenAndPalm"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Etsy
              </a>
              <a
                href="https://www.pinterest.co.uk/penandpalm/"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pinterest
              </a>
              <a
                href="https://www.facebook.com/penandpalm/"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 offset-md-1">
          <p className="font-family-secondary font-size-display1 mb-4">The serious stuff..</p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <Link href="/privacy">
                <a className="mb-3 d-block font-color-medium">Privacy Policy</a>
              </Link>
              <Link href="/terms">
                <a className="mb-3 d-block font-color-medium">Terms & Conditions</a>
              </Link>
              <Link href="/credits">
                <a className="mb-3 d-block font-color-medium">Credits</a>
              </Link>
              <Link href="/sustainability">
                <a className="mb-3 d-block font-color-medium">Sustainability</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="pt-md-5">
      <div className="custom-container d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div className="d-flex align-items-center flex-wrap justify-content-center"></div>
        <div className="font-size-caption py-4 text-right">
          <a
            href="https://commercejs.com/"
            className="font-color-medium font-size-caption text-uppercase text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            &copy; {new Date().getFullYear()} Pen & Palm
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
