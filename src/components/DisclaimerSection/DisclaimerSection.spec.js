import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import DisclaimerSection from './';

describe('DisclaimerSection', () => {
  let wrapper;
  let testText;
  let testTextBold;
  let testImage;

  beforeEach(() => {
    testText = 'test';
    testTextBold= 'testBold';
    testImage = 'http://www4.ac-nancy-metz.fr/clg-p-e-victor-corcieux/new/wp-content/uploads/th1.jpg';
    wrapper = shallow(<DisclaimerSection textBold={testTextBold} text={testText} image={testImage} />);
  });

  it('should render a div having a disclaimer-section class', () => {
    expect(wrapper.find('div.disclaimer-section')).to.have.length(1);
  });

  it('should render a div having a disclaimer-section-image class', () => {
    expect(wrapper.find('div.disclaimer-section-image')).to.have.length(1);
  });

  it('should render an img tag having a src attribute set to the image prop', () => {
    expect(wrapper.find('div.disclaimer-section-image img').prop('src')).to.equal(testImage);
  });

  it('should render a div having a disclaimer-section-text class', () => {
    expect(wrapper.find('div.disclaimer-section-text')).to.have.length(1);
  });

  it('should render a first p tag having its value set via the textBold prop', () => {
    expect(wrapper.find('div.disclaimer-section-text p').first().text()).to.equal(testTextBold);
  });
});