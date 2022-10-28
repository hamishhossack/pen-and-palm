import React from 'react';
import Link from 'next/link';

const imagesInfo = [
  {
    image: '/images/insta/1.jpg',
    translateRatio: -50,
  },
  {
    image: '/images/insta/2.jpg',
    translateRatio: 30,
  },
  {
    image: '/images/insta/3.jpg',
    translateRatio: 0,
  },
  {
    image: '/images/insta/4.jpg',
    translateRatio: -20,
  },
  {
    image: '/images/insta/5.jpg',
    translateRatio: -80,
  },
];

export default class SocialMedia extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="pt-5">
        <div className="custom-container px-3 mb-5">
          <div className="row">
            {imagesInfo.map((item, i) => (
              <a
                key={item.image}
                href="https://www.instagram.com/penandpalm/"
                className="col"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  style={{
                    paddingBottom: '100%',
                    background: `url("${item.image}") center center/cover`,
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </footer>
    );
  }
}
