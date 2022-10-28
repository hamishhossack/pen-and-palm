import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class QuoteBanner extends Component {
  render() {
    const { categories } = this.props;

    return (
      <div className="custom-container py-5">
        <p className="font-size-display2 font-italic my-3 py-5 text-center font-family-secondary">
          “Ilona is a perfectionist and an incredible artist at calligraphy.” <br />- EC
        </p>
      </div>
    );
  }
}

export default connect((state) => state)(QuoteBanner);
