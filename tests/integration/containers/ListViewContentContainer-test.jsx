import React from 'react';
import { shallow } from 'enzyme';
import { ListViewContent } from 'components';
import { ListViewContentContainer } from 'containers';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import configureMockStore from 'redux-mock-store';
import { fromJS } from 'immutable';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const mockStore = configureMockStore([thunk]);
const storeStateMock = {
  accounts: fromJS({
    email: {
      name: 'Team A',
      phone: 'phone',
      email: 'email',
    },
  }),
  contacts: fromJS({
    'Team A': {
      name: 'Team A',
      amount: '123',
      highRisk: false,
    },
  }),
  routing: {
    locationBeforeTransitions: {
      pathname: '/',
      query: {
        account: 'email',
      },
    },
  },
};
const accountRouter = {
  locationBeforeTransitions: {
    pathname: '/',
  },
};
const contactRouter = {
  locationBeforeTransitions: {
    pathname: '/contacts',
    query: {
      account: 'email',
    },
  },
};
const store = mockStore(storeStateMock);
const getContext = router => router;
const childContextTypes = {
  locationBeforeTransitions: React.PropTypes.object,
};

describe('<ListViewContentContainer />', () => {
  it('renders <ListViewContent/ >', () => {
    //todo fill in this test
    //const wrapper = shallow(<ListViewContentContainer store={store} />, {
    //  context: getContext(accountRouter),
    //  childContextTypes,
    //});
    //expect(wrapper.find(ListViewContent)).to.have.length(1);
  });
});
