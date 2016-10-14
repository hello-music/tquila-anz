import React from 'react';
import { shallow } from 'enzyme';
import { GenericPageLayout } from 'components';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { NavBarContainer, ListViewContainer } from 'containers';

describe('<GenericPageLayout />', () => {
  it('renders <NavBarContainer />', () => {
    const wrapper = shallow(<GenericPageLayout />);
    expect(wrapper.find(NavBarContainer)).to.have.length(1);
  });
  it('renders <ListViewContainer />', () => {
    const wrapper = shallow(<GenericPageLayout />);
    expect(wrapper.find(ListViewContainer)).to.have.length(1);
  });
});
