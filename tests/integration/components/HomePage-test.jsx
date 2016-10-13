import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from 'components';
import { expect } from 'chai';

const helloWorld = 'Hello world!';
describe('<HomePage />', () => {
  it('renders helloWorld', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.text()).to.contain(helloWorld);
  });
});
