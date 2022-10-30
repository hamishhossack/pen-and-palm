import React from 'react';
import Link from 'next/link';

export default function HomeBanner() {
  return (
    <div className="p-5">
      <p
        className="font-size-display1 mt-5 text-center text-uppercase mx-auto"
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
  );
}
