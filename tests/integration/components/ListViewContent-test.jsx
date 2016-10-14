import React from 'react';
import { shallow } from 'enzyme';
import { ListViewContent } from 'components';
import { expect } from 'chai';

const mockContent = 'content';
describe('<ListViewContent />', () => {
  it('renders text content', () => {
    const wrapper = shallow(<ListViewContent />);
    expect(wrapper.text()).to.contain(mockContent);
  });
});
