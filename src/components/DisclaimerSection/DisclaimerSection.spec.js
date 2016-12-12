import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import DisclaimerSection from './';

describe('DisclaimerSection', () => {
  let wrapper;
  let testText;
  let testImage;

  beforeEach(() => {
    testText = 'test';
    testImage = 'http://www4.ac-nancy-metz.fr/clg-p-e-victor-corcieux/new/wp-content/uploads/th1.jpg';
    wrapper = shallow(<DisclaimerSection text={testText} image={testImage} />);
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

  it('should render a p tag having its value set to the text prop', () => {
    expect(wrapper.find('div.disclaimer-section-text p').text()).to.equal(testText);
  });
});