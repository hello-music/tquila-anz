import { expect } from 'chai';
import { describe, it } from 'mocha';
import contacts, { toggleRisk } from 'redux/modules/contacts';
import { fromJS } from 'immutable';

const FETCHING_ACCOUNTS_SUCCESS = 'FETCHING_ACCOUNTS_SUCCESS',
  TOGGLE_RISK = 'TOGGLE_RISK',
  initialState = fromJS({}),
  mockContactA = {
    name: 'Contact AB',
    highRisk: false,
    amount: 20000,
  },
  mockContactB = {
    name: 'Contact BA',
    highRisk: false,
    amount: 20000,
  },
  mockContacts = {
    [mockContactA.name]: mockContactA,
    [mockContactB.name]: mockContactB,
  },
  contactId = mockContactA.name,
  mockToggleRiskAction = {
    type: TOGGLE_RISK,
    contactId: mockContactA.name,
  },
  mockFetchingAccountsSuccessAction = {
    type: FETCHING_ACCOUNTS_SUCCESS,
    contacts: mockContacts,
  };
describe('Reducer: contacts', () => {
  it('should handle FETCHING_ACCOUNTS', () => {

    const state = contacts(initialState, mockFetchingAccountsSuccessAction);

    expect(state.get(mockContactA.name).toJS()).to.eql(mockContactA);
    expect(state.get(mockContactB.name).toJS()).to.eql(mockContactB);
  });
  it('should handle TOGGLE_RISK', () => {

    const state = contacts(fromJS(mockContacts), mockToggleRiskAction);

    expect(state.get(contactId).get('highRisk')).to.eql(!mockContactA.highRisk);
  });
});

