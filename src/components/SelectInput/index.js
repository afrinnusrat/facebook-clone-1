import React, { Component, PropTypes } from 'react';

class SelectInput extends Component {
  renderOptions(options) {
    const optionNodes = options.map((option) => {
      return <option key={option.value} value={option.value}>option.value</option>;
    });
    return <div>{optionNodes}</div>;
  }

  render() {
    return (
      <select name="" id="">
        {this.renderOptions.bind(this, this.props.options)()}
      </select>
    );   
  }
}

SelectInput.propTypes = {
  options: PropTypes.object,
};

export default SelectInput;
