import { FETCHING_ACCOUNTS_SUCCESS } from './accounts';
import { fromJS } from 'immutable';
const ADD_CONTACTS = 'ADD_CONTACTS';
const TOGGLE_RISK = 'TOGGLE_RISK';

export function toggleRisk(contactId) {
  return {
    type: TOGGLE_RISK,
    contactId,
  };
}

const initialState = fromJS({});

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case FETCHING_ACCOUNTS_SUCCESS:
      return state.merge(action.contacts);
    case TOGGLE_RISK:
      const oldContact = state.get(action.contactId);
      return state.merge({
        [action.contactId]: oldContact.set('highRisk', !oldContact.get('highRisk')),
      });
    default :
      return state;
  }
}

