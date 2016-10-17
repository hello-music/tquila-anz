import { fromJS } from 'immutable';
import { FETCHING_ACCOUNTS_SUCCESS } from './accounts';

const TOGGLE_RISK = 'TOGGLE_RISK';

export function toggleRisk (contactId) {
  return {
    type: TOGGLE_RISK,
    contactId,
  };
}

const initialState = fromJS({});

export default function contacts (state = initialState, action) {
  let oldContact = null;
  switch (action.type) {
    case FETCHING_ACCOUNTS_SUCCESS:
      return state.merge(action.contacts);
    case TOGGLE_RISK:
      oldContact = state.get(action.contactId);
      return state.merge({
        [action.contactId]: oldContact.set('highRisk', !oldContact.get('highRisk')),
      });
    default :
      return state;
  }
}

