import React, { Component } from 'react';
import { connect } from 'react-redux';

class AsSeenInBanner extends Component {
  render() {
    return (
      <div className="custom-container py-5">
        <p className="font-size-display1 font-italic my-3 text-center font-family-secondary">
          As seen in...
        </p>
        <div className="row justify-content-center">
          <a className="col-3" href="https://prettyandpunk.co.uk" target="_blank" rel="noreferrer">
            <img src="/images/pretty_punk_1.png" alt="pretty and punk" className="img-fluid" />
          </a>
          <a className="col-3" href="https://www.greenunion.co.uk" target="_blank" rel="noreferrer">
            <img src="/images/green_union.png" alt="green union" className="img-fluid" />
          </a>
        </div>
      </div>
    );
  }
}

export default connect((state) => state)(AsSeenInBanner);
