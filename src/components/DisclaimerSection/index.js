import React, { PropTypes } from 'react';

const DisclaimerSection = (props) => {
  return (
    <div className="disclaimer-section" >
      <div className="disclaimer-section-image">
        <img src={props.image} alt={`An image illustrating ${props.text}`} />
      </div>
      <div className="disclaimer-section-text">
        <p><b>{props.textBold}</b></p>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

DisclaimerSection.propTypes = {
  image: PropTypes.string,
  textBold: PropTypes.string,
  text: PropTypes.string,
};

export default DisclaimerSection;
