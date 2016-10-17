import { fromJS } from 'immutable';

const FETCHING_ACCOUNTS = 'FETCHING_ACCOUNTS';
const FETCHING_ACCOUNTS_FAILURE = 'FETCHING_ACCOUNTS_FAILURE';
export const FETCHING_ACCOUNTS_SUCCESS = 'FETCHING_ACCOUNTS_SUCCESS';

function fetchingAccounts() {
  return {
    type: FETCHING_ACCOUNTS,
  };
}

function fetchingAccountsFailure(error) {
  return {
    type: FETCHING_ACCOUNTS_FAILURE,
    error: 'Error fetching accounts.',
  };
}

function fetchingAccountsSuccess({ accounts, contacts }) {
  return {
    type: FETCHING_ACCOUNTS_SUCCESS,
    accounts,
    contacts,
  };
}

export function fetchAndHandleAccounts(getAccountsFunc) {
  return function (dispatch) {
    dispatch(fetchingAccounts());
    return getAccountsFunc().then(
      data => dispatch(fetchingAccountsSuccess(data.entities)),
      error => dispatch(fetchingAccountsFailure(error))
    );
  };
}

const initialState = fromJS({
  isFetching: false,
  error: '',
});

export default function accounts(state = initialState, action) {
  let apiDoneState = {};
  switch (action.type) {
    case FETCHING_ACCOUNTS:
      return state.merge({
        isFetching: true,
        error: '',
      });
    case FETCHING_ACCOUNTS_FAILURE:
      return state.merge({
        isFetching: false,
        error: action.error,
      });
    case FETCHING_ACCOUNTS_SUCCESS:
      apiDoneState = state.merge({
        isFetching: false,
        error: '',
      });
      return action.accounts ? apiDoneState.merge(action.accounts) : apiDoneState;
    default :
      return state;
  }
}

