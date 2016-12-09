import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import TextInput from './';

chai.use(chaiEnzyme());

describe('TextInput', () => {
  it('should render an input tag', () => {
    const wrapper = shallow(<TextInput />);

    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should have a style value via the style prop', () => {
    const testStyle = { backgroundColor: 'blue' };
    const wrapper = shallow(<TextInput style={testStyle} />);

    expect(wrapper.find('input')).to.have.style('background-color', 'blue');
  });
});