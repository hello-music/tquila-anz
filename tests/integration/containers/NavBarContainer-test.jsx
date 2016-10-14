import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from 'components';
import { NavBarContainer } from 'containers';
import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('<NavBarContainer />', () => {
  it('renders <NavBar/ >', () => {
    const wrapper = shallow(<NavBarContainer />);
    expect(wrapper.find(NavBar)).to.have.length(1);
  });
});
