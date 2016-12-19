import React, { Component, PropTypes } from 'react';

class H1 extends Component {
  render() {
    return (
      <h1>{this.props.text}</h1>
    );    
  }
}

H1.propTypes = {
  text: PropTypes.string,
};

export default H1;