import React from 'react';
import { shallow } from 'enzyme';
import { ListViewHeader } from 'components';
import { ListViewHeaderContainer } from 'containers';
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

//todo to be filled in
describe('<ListViewHeader />', () => {
  //it('renders <ListViewHeader/ >', () => {
  //  const wrapper = shallow(<ListViewHeaderContainer store={store} />);
  //  expect(wrapper.find(ListViewHeader)).to.have.length(1);
  //});
});
