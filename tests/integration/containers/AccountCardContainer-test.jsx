import React from 'react';
import { shallow } from 'enzyme';
import { AccountCard } from 'components';
import { AccountCardContainer } from 'containers';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';

const mockStore = configureMockStore([thunk]);
const storeStateMock = {
  accounts: fromJS({
    email: {
      name: 'Team A',
      phone: 'phone',
      email: 'email',
    },
  }),
};
const store = mockStore(storeStateMock);
const context = {
  router: {},
};
const childContextTypes = {
  router: () => {},
};

// todo to be filled in
describe('<AccountCardContainer />', () => {
  //it('renders <AccountCard />', () => {
  //  const wrapper = shallow(<AccountCardContainer store={store} id={'email'} />, { context, childContextTypes });
  //  expect(wrapper.find(AccountCard)).to.have.length(1);
  //});
});
