import React from 'react';
import { shallow } from 'enzyme';
import { GenericPageLayout } from 'components';
import { expect } from 'chai';
import { NavBarContainer } from 'containers';

describe('<GenericPageLayout />', () => {
  it('renders <NavBarContainer />', () => {
    const wrapper = shallow(<GenericPageLayout />);
    expect(wrapper.find(NavBarContainer)).to.have.length(1);
  });
});
