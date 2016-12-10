import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';

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

  it('should call the onChange function passed via props on change', () => {
    const onChange = sinon.spy();
    const wrapper = shallow(<TextInput onChange={onChange} />);

    wrapper.find('input').simulate('change');
    expect(onChange.calledOnce).to.equal(true);
  });

  it('should render a label if a label prop is given', () => {
    const label = 'test';
    const wrapper = shallow(<TextInput label={label} />);

    expect(wrapper.find('label').text()).to.equal(label);
  });

  it('should render an input tag with an id passed via the id prop', () => {
    const id = 'test';
    const wrapper = shallow(<TextInput id={id} />);

    expect(wrapper.find(`input#${id}`)).to.have.length(1);
  });

  it('should render a label tag bound with htmlFor to the id passed via props', () => {
    const label = 'test-label';
    const id = 'test-id';
    const wrapper = shallow(<TextInput label={label} id={id} />);

    expect(wrapper.find('label').prop('htmlFor')).to.equal(id);
  });
});