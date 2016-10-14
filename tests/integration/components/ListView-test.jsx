import React from 'react';
import { shallow } from 'enzyme';
import { ListView } from 'components';
import { expect } from 'chai';
import { ListViewHeaderContainer, ListViewContentContainer } from 'containers';

describe('<ListView />', () => {
  it('renders ListViewHeaderContainer', () => {
    const wrapper = shallow(<ListView />);
    expect(wrapper.find(ListViewHeaderContainer)).to.have.length(1);
  });
  it('renders ListViewContentContainer', () => {
    const wrapper = shallow(<ListView />);
    expect(wrapper.find(ListViewContentContainer)).to.have.length(1);
  });
});
