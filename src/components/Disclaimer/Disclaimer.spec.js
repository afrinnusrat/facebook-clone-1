import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Disclaimer from './';
import DisclaimerSection from '../DisclaimerSection';

describe('Disclaimer', () => {
  let wrapper;
  let disclaimerTest;

  beforeEach(() => {
    disclaimerTest = {
      title: 'test',
      sections: [
        {
          text: 'test',
          image: 'http://www4.ac-nancy-metz.fr/clg-p-e-victor-corcieux/new/wp-content/uploads/th1.jpg',
        },
        {
          text: 'test',
          image: 'http://www4.ac-nancy-metz.fr/clg-p-e-victor-corcieux/new/wp-content/uploads/th1.jpg',
        },
        {
          text: 'test',
          image: 'http://www4.ac-nancy-metz.fr/clg-p-e-victor-corcieux/new/wp-content/uploads/th1.jpg',
        },
      ],
    };
    wrapper = shallow(<Disclaimer disclaimer={disclaimerTest} />);
  });

  it('should render an div with the disclaimer-container class', () => {
    expect(wrapper.find('div.disclaimer-container')).to.have.length(1);
  });

  it('should render 3 DisclaimerSection components', () => {
    const wrapper = shallow(
      <Disclaimer disclaimer={disclaimerTest}>
        <DisclaimerSection />
      </Disclaimer>
    );

    expect(wrapper.find(DisclaimerSection)).to.have.length(3);
  });
});