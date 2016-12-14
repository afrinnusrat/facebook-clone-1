import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import RadioInput from './';

describe('RadioInput', () => {
  let wrapper;
  let value;
  let style;
  let onChange;

  beforeEach(() => {
    value = 'test';
    style = { backgroundColor: 'blue' };
    onChange = sinon.spy();

    wrapper = shallow(
      <RadioInput
        style={style}
        value={value}
        onChange={onChange}
      />
    );
  });

  it('should render a radio tag', () => {
    expect(wrapper.find('radio')).to.have.length(1);
  });

  it('should have a sty')

});