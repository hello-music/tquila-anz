import React from 'react';
import { describe, it, before, after } from 'mocha';
import { shallow } from 'enzyme';
import { ListViewContent } from 'components';
import { AccountCardContainer, ContactCardContainer } from 'containers';
import { expect } from 'chai';
import { List } from 'immutable';
import sinon from 'sinon';

const mockCardAccountType = 'account';
const mockCardContactType = 'contact';
const mockAccountCardIds = List([1,2,3]);
const mockContactCardIds = List([1,2,3]);

describe('<ListViewContent />', () => {
  it('renders AccountCardContainer', () => {
    const wrapper = shallow(
      <ListViewContent cardType={mockCardAccountType} cardIds={mockAccountCardIds} />);
    expect(wrapper.find(AccountCardContainer)).to.have.length(3);
  });
  it('renders ContactCardContainer', () => {
    const wrapper = shallow(
      <ListViewContent cardType={mockCardContactType} cardIds={mockContactCardIds} />);
    expect(wrapper.find(ContactCardContainer)).to.have.length(3);
  });
});
