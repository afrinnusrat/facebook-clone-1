import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Button from './';

describe('Button',  () => {
  it('should render a button tag', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should have a style value via the style prop', () => {
    const testStyle = { backgroundColor: 'blue' };
    const wrapper = shallow(<Button style={testStyle} />);

    expect(wrapper.find('button')).to.have.style('background-color', 'blue');
  });

  it('should call the onClick passed via props on click', () => {
    const mockFunction = sinon.spy();
    const wrapper = shallow(<Button onClick={mockFunction} />);

    wrapper.find('button').simulate('click');
    expect(mockFunction.calledOnce).to.equal(true);
  });
});