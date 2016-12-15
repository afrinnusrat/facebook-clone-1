import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button 
        style={this.props.style ? this.props.style : null}
        value={this.props.value}
        onClick={this.props.onClick}
      />
    );
  }
}

export default Button;
