import React from 'react';
import { shallow } from 'enzyme';
import { ListViewContent } from 'components';
import { expect } from 'chai';
import { List } from 'immutable';

const mockCardAccountType = 'account';
const mockCardContactType = 'contact';
const mockAccountCards = List([{}, {}, {}]);
const mockContactCards = List([{}, {}, {}]);
describe('<ListViewContent />', () => {
  it('renders text account cards', () => {
    const wrapper = shallow(
      <ListViewContent cardType={mockCardAccountType} cards={mockAccountCards} />);
    expect(wrapper.find('.account-card')).to.have.length(3);
  });
  it('renders text contact cards', () => {
    const wrapper = shallow(
      <ListViewContent cardType={mockCardContactType} cards={mockContactCards} />);
    expect(wrapper.find('.contact-card')).to.have.length(3);
  });
});
