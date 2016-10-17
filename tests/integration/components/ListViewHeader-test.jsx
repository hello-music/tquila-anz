import React from 'react';
import { shallow } from 'enzyme';
import { ListViewHeader } from 'components';
import { expect } from 'chai';
import { describe, it } from 'mocha';

const mockHeader = 'header';
describe('<ListViewHeader />', () => {
  it('renders text header', () => {
    const wrapper = shallow(<ListViewHeader header={mockHeader}/>);
    expect(wrapper.text()).to.contain(mockHeader);
  });
});
