import React, { Component, PropTypes } from 'react';

class RadioInput extends Component {
  render() {
    return (
      <radio
        style={this.props.style}
        onChange={this.props.onChange}
      >{this.props.value}</radio>
    );
  }
}

RadioInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default RadioInput;
