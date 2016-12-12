import React, { Component, PropTypes } from 'react';

import DisclaimerSection from '../DisclaimerSection';

class Disclaimer extends Component {
  renderDisclaimerSections() {
    this.props.disclaimer.sections.map((section) => {
      return (
        <DisclaimerSection key={section.text} image={section.image} text={section.text} />
      );
    });
  }
  render() {
    return (
      <div className="disclaimer-container">
        <div className="disclaimer-title">
          <p>{this.props.disclaimer.title}</p>
        </div>
        { this.renderDisclaimerSections.bind(this)() }
      </div>
    );
  }
}

Disclaimer.propTypes = {
  disclaimer: PropTypes.object,
};

export default Disclaimer;
