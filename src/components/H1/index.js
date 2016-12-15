import React, { Component, PropTypes } from 'react';

class H1 extends Component {
  render() {
    return (
      <h1>{this.props.title}</h1>
    );    
  }
}

H1.propTypes = {
  title: PropTypes.string,
};

export default H1;