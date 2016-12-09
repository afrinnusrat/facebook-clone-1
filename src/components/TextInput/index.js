import React, { Component, PropTypes } from 'react';

class TextInput extends Component {
  render() {
    return (
      <input
        style={this.props.style ? this.props.style : ''}
        value={this.props.value}
        placeholder={this.props.placeholder ? this.props.placeholder : ''}
        onChange={this.props.onChange}
        type="text"
      />
    );
  }
}

TextInput.propTypes = {
  style: PropTypes.object,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextInput;
