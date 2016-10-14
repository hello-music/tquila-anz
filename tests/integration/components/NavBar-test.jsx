import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from 'components';
import { expect } from 'chai';
import { Link } from 'react-router';

describe('<NavBar />', () => {
  it('renders <Link />', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.find(Link)).to.have.length(1);
  });
});
