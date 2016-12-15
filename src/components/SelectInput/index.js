import React, { Component, PropTypes } from 'react';

class SelectInput extends Component {
  renderOptions(options) {
    const optionNodes = options.map((option) => {
      return <option key={option.value} value={option.value}>option.value</option>;
    });
    return [optionNodes];
  }

  render() {
    return (
      <select 
        style={this.props.style ? this.props.style : null}>
        {this.renderOptions.bind(this, this.props.options)()}
      </select>
    );   
  }
}

SelectInput.propTypes = {
  options: PropTypes.array,
  style: PropTypes.object,
};

export default SelectInput;
