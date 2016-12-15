import React, { Component, PropTypes } from 'react';

import DisclaimerSection from '../DisclaimerSection';

class Disclaimer extends Component {
  renderDisclaimerSections() {
    const sections = this.props.disclaimer.sections.map((section) => {
      return (
        <DisclaimerSection key={section.text} image={section.image} textBold={section.textBold} text={section.text} />
      );
    });
    return <div>{sections}</div>;
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
