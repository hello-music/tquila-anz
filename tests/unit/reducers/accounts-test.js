import { expect } from 'chai';
import accounts, { fetchAndHandleAccounts } from 'redux/modules/accounts';
import { fromJS } from 'immutable';
import sinon from 'sinon';
import { describe, it } from 'mocha';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
  accounts,
  applyMiddleware(thunk)
);
const FETCHING_ACCOUNTS = 'FETCHING_ACCOUNTS';
const FETCHING_ACCOUNTS_FAILURE = 'FETCHING_ACCOUNTS_FAILURE';
const FETCHING_ACCOUNTS_SUCCESS = 'FETCHING_ACCOUNTS_SUCCESS';
const initialState = fromJS({ isFetching: true, error: '' });
const mockFetchingAccountsAction = {
  type: FETCHING_ACCOUNTS,
};
const mockAccountA = {
  name: 'Team A',
  phone: '0412345678',
  email: 'team@teama.com',
  contacts: ['Contact AA', 'Contact AB'],
};
const mockAccountB = {
  name: 'Team B',
  phone: '0418765432',
  email: 'team@teama.com',
  contacts: ['Contact AA', 'Contact AB'],
};
const mockContactA = {
  name: 'Contact AB',
  highRisk: false,
  amount: 20000,
};
const mockContactB = {
  name: 'Contact BA',
  highRisk: false,
  amount: 20000,
};
const mockAccounts = {
  accountA: mockAccountA,
  accountB: mockAccountB,
};
const mockContacts = {
  a: mockContactA,
  b: mockContactB,
};
const mockError = 'error';
const mockFetchingAccountsSuccessAction = {
  type: FETCHING_ACCOUNTS_SUCCESS,
  accounts: mockAccounts,
  contacts: mockContacts,
};

const mockFetchingAccountsFailureAction = {
  type: FETCHING_ACCOUNTS_FAILURE,
  error: mockError,
};
const errorMsg = 'Error fetching accounts.';
function mockGetAccountsSuccess() {
  return new Promise((resolve, reject) => {
    resolve({ entities: {} });
  });
}

function mockGetAccountsFail() {
  return new Promise((resolve, reject) => {
    reject({});
  });
}

describe('Reducer: accounts', () => {
  it('should handle FETCHING_ACCOUNTS', () => {

    const state = accounts(initialState, mockFetchingAccountsAction);

    expect(state.get('isFetching')).to.equal(true);
    expect(state.get('error')).to.equal('');
  });
  it('should handle FETCHING_ACCOUNTS_SUCCESS', () => {

    const state = accounts(initialState, mockFetchingAccountsSuccessAction);

    expect(state.get('isFetching')).to.equal(false);
    expect(state.get('error')).to.equal('');
    expect(state.get('accountA').toJS()).to.eql(mockAccountA);
    expect(state.get('accountB').toJS()).to.eql(mockAccountB);
  });
  it('should handle FETCHING_ACCOUNTS_FAILURE', () => {

    const state = accounts(initialState, mockFetchingAccountsFailureAction);

    expect(state.get('isFetching')).to.equal(false);
    expect(state.get('error')).to.equal(mockError);
  });
  it('fetchAndHandleAccounts success', (done) => {

    let state = null;
    store.dispatch(fetchAndHandleAccounts(mockGetAccountsSuccess)).then(()=> {
      state = store.getState();
      expect(state.get('isFetching')).to.equal(false);
      expect(state.get('error')).to.equal('');
      done();
    });
  });
  it('fetchAndHandleAccounts failure', (done) => {

    let state = null;
    store.dispatch(fetchAndHandleAccounts(mockGetAccountsFail)).then(()=> {
      state = store.getState();
      expect(state.get('isFetching')).to.equal(false);
      expect(state.get('error')).to.equal(errorMsg);
      done();
    });
  });
});
