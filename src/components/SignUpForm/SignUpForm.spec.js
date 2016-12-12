import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import SignUpForm from './';

describe('SignUpForm', () => {
  it('should render a form tag', () => {
    const wrapper = shallow(<SignUpForm />);

    expect(wrapper.find('form')).to.have.length(1);
  });

  it('should render its children', () => {

  });
});