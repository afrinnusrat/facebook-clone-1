import React, { PropTypes } from 'react';

const SignUpContainer = (props) => {
  return (
    <div className="signup-container">
      {props.children}
    </div>
  );
};

SignUpContainer.propTypes = {
  children: PropTypes.object,
};

export default SignUpContainer;
