import React from 'react';
import { mount, shallow } from 'enzyme';
import { HomePage } from 'components';
import { MainContainer } from 'containers';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fromJS } from 'immutable';

const MockChildComponent = () => (<div />);
const mockStore = configureMockStore([thunk]);
const storeStateMock = {
  accounts: fromJS({
    email: {
      name: 'Team A',
      phone: 'phone',
      email: 'email',
    },
    isFetching: true,
    error: '',
  }),
};
const store = mockStore(storeStateMock);

describe('<MainContainer />', () => {
  it('renders props.children', () => {
    const wrapper = shallow(<MainContainer store={store}><MockChildComponent /></MainContainer>);
    expect(wrapper.find(MockChildComponent)).to.have.length(1);
  });
});

//todo fill in other tests
