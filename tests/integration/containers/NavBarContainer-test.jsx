import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from 'components';
import { NavBarContainer } from 'containers';
import { expect } from 'chai';

describe('<NavBarContainer />', () => {
  it('renders <NavBar/ >', () => {
    const wrapper = shallow(<NavBarContainer />);
    expect(wrapper.find(NavBar)).to.have.length(1);
  });
});
