import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Disclaimer from './';

describe('Disclaimer', () => {
  let wrapper;

  beforeEach(() => {
    const test = {
      text: 'test',
      section: {
        text: 'test',
        image: 'http://www4.ac-nancy-metz.fr/clg-p-e-victor-corcieux/new/wp-content/uploads/th1.jpg',
      },
    };
    wrapper = shallow(<Disclaimer disclaimer={test} />);
  });

  it('should render an div with the disclaimer-container class', () => {
    expect(wrapper.find('div.disclaimer-container')).to.have.length(1);
  });
});