import React from 'react';
import { shallow } from 'enzyme';
import { AccountCard } from 'components';
import { AccountCardContainer } from 'containers';
import { expect } from 'chai';

describe('<AccountCardContainer />', () => {
  it('renders <AccountCard/ >', () => {
    const wrapper = shallow(<AccountCardContainer />);
    expect(wrapper.find(AccountCard)).to.have.length(1);
  });
});