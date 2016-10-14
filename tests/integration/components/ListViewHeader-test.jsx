import React from 'react';
import { shallow } from 'enzyme';
import { ListViewHeader } from 'components';
import { expect } from 'chai';

const mockHeader = 'header';
describe('<ListViewHeader />', () => {
  it('renders text header', () => {
    const wrapper = shallow(<ListViewHeader />);
    expect(wrapper.text()).to.contain(mockHeader);
  });
});
