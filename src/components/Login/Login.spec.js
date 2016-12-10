import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Login from './';
import TextInput from '../TextInput';

describe('Login', () => {
  it('should render its children', () => {
    const wrapper = shallow(
      <Login>
        <TextInput />
      </Login>
    );

    expect(wrapper.children()).to.have.length(1);
  });
});