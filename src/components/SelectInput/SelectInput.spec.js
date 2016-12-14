import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import SelectInput from './';

describe('SelectInput', () => {
  let wrapper;
  let style;
  let options;
  beforeEach(() => {
    style = { backgroundColor: 'blue'};
    options = [
      { value: 'test' },
      { value: 'test2' },
      { value: 'test3' },
    ];
    wrapper = shallow(<SelectInput style={style} options={options} />);
  });

  it('should render a select tag', () => {
    expect(wrapper.find('select')).to.have.length(1);
  });

  it('should have a style value set via the style prop', () => {
    expect(wrapper.find('select')).to.have.style('background-color', 'blue');
  });
});