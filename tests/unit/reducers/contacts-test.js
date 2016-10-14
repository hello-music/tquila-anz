import { expect } from 'chai';
import { describe, it } from 'mocha';
import contacts, { toggleRisk } from 'redux/modules/contacts';
import { fromJS } from 'immutable';

const ADD_CONTACTS = 'ADD_CONTACTS';
const FETCHING_ACCOUNTS_SUCCESS = 'FETCHING_ACCOUNTS_SUCCESS';
const TOGGLE_RISK = 'TOGGLE_RISK';
const initialState = fromJS({});
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
const mockContacts = {
  [mockContactA.name]: mockContactA,
  [mockContactB.name]: mockContactB,
};
const contactId = mockContactA.name;
const mockToggleRiskAction = {
  type: TOGGLE_RISK,
  contactId: mockContactA.name,
};
const mockFetchingAccountsSuccessAction = {
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

