import React, { PropTypes } from 'react';

const SignUpForm = (props) => {
  return (
    <form>
      {props.children}
    </form>
  );
};

SignUpForm.propTypes = {
  children: PropTypes.array,
};

export default SignUpForm;
