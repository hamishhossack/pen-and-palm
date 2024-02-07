import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuoteBanner extends Component {
  render() {
    return (
      <div className="custom-container py-5 my-5">
        <p className="font-size-display2 font-italic my-3 text-center font-family-secondary">
          &ldquo;{this.props.quote}&rdquo;
          <br />- {this.props.by}
        </p>
      </div>
    );
  }
}

export default connect((state) => state)(QuoteBanner);
