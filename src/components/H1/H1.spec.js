import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import H1 from './';

describe('H1', () => {
  it('should render an h1', () => {
    const wrapper = shallow(<H1 />);

    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should render the text value passed via the text prop', () => {
    const wrapper = shallow(<H1 text="Facebook" />);

    expect(wrapper.find('h1').text()).to.equal('Facebook');
  });
});
