import React from 'react';
import { shallow } from 'enzyme';
import { AccountCard } from 'components';
import { LabelDescriptionComboContainer } from 'containers';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { fromJS } from 'immutable';
import sinon from 'sinon';

const mockAccount = fromJS({
  name: 'Team A',
  phone: 'phone',
  email: 'email',
});

describe('<AccountCard />', () => {
  it('renders account name, and two <LabelDescriptionComboContainer />s', () => {
    const clickSyp = sinon.spy();
    const wrapper = shallow(<AccountCard account={mockAccount} handleClick={clickSyp} />);
    expect(wrapper.text()).to.contain(mockAccount.get('name'));
    expect(wrapper.find(LabelDescriptionComboContainer)).to.have.length(2);
  });
  it('handles click', () => {
    const clickSyp = sinon.spy();
    const wrapper = shallow(<AccountCard account={mockAccount} handleClick={clickSyp} />);
    wrapper.simulate('click');
    expect(clickSyp.calledOnce).to.be.true;
  });
});
