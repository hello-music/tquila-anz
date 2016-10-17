import React from 'react';
import { shallow } from 'enzyme';
import { ContactCard } from 'components';
import { ContactCardContainer } from 'containers';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import configureMockStore from 'redux-mock-store';
import { fromJS } from 'immutable';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);
const storeStateMock = {
  contacts: fromJS({
    'Team A': {
      name: 'Team A',
      amount: '123',
      highRisk: false,
    },
  }),
};
const store = mockStore(storeStateMock);

describe('<ContactCardContainer />', () => {
  it('renders <ContactCard/ >', () => {
    const wrapper = shallow(<ContactCardContainer store={store} id="Team A"/>);
    expect(wrapper.find(ContactCard)).to.have.length(1);
  });
});
