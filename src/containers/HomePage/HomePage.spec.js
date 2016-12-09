import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import HomePage from './';
import H1 from '../../components/H1/index.js';

describe('HomePage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomePage />);
  });

  it('should render an H1 component', () => {
    expect(wrapper.find(H1)).to.have.length(1);
  });
});