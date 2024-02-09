import React, { Component } from 'react';
import { connect } from 'react-redux';

class AsSeenInBanner extends Component {
  render() {
    return (
      <div className="custom-container py-5">
        <div className="row justify-content-center">
          <a
            className="col-md-2"
            href="https://www.cocoweddingvenues.co.uk"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/coco-featured-500.png"
              alt="Coco Wedding Venues"
              className="img-fluid"
            />
          </a>

          <a
            className="col-md-2"
            href="https://prettyandpunk.co.uk"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/pretty_punk_1.png" alt="pretty and punk" className="img-fluid" />
          </a>
          <a
            className="col-md-2"
            href="https://www.greenunion.co.uk"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/green_union.png" alt="green union" className="img-fluid" />
          </a>
        </div>
      </div>
    );
  }
}

export default connect((state) => state)(AsSeenInBanner);
