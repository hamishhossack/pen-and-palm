import React from 'react';
import Link from 'next/link';

export default function ServiceBanner() {
  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-md-6 col-12">
        <img src="/images/ilona.jpg" alt="Ilona" className="img-fluid" />
      </div>
      <div className="col-md-6 col-12">
        <p
          className="font-size-display1 font-family-secondary mt-5 text-center mx-auto"
          style={{ maxWidth: '53rem' }}
        >
          Every celebration is unique - I believe your stationery and signage should reflect your
          personality and love story.
        </p>
        <div className="d-flex align-items-center justify-content-center mt-3 mb-5">
          <Link href="/about">
            <a className="d-flex py-3 align-items-center font-color-black borderbottom border-color-black">
              <p className="mr-3">About Pen & Palm</p>
              <img alt="arrow" src="/icon/arrow-long-right.svg" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
