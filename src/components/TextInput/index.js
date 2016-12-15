import React, { Component, PropTypes } from 'react';

class TextInput extends Component {
  renderLabel() {
    if (this.props.label) {
      return <label htmlFor={this.props.id ? this.props.id : ''}>{this.props.label}</label>;
    }
  }

  render() {
    return (
      <g>
        {this.renderLabel.bind(this)()}
        <input
          id={this.props.id ? this.props.id : null}
          style={this.props.style ? this.props.style : null}
          value={this.props.value}
          placeholder={this.props.placeholder ? this.props.placeholder : null}
          onChange={this.props.onChange}
          type="text"
        />        
      </g>
    );
  }
}

TextInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextInput;
