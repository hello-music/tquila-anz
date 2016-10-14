import { createSelector } from 'reselect';
import constants from 'config/constants';

const { routePaths } = constants;
const entitiesNonIdKeys = ['isFetching', 'error'];
const accountsNonIdKeysLength = entitiesNonIdKeys.length;

export const isHomePage = createSelector(
  [routing => routing],
  (routing) => {
    return routing.locationBeforeTransitions.pathname === routePaths.home;
  }
);

export const isContactsPage = createSelector(
  [routing => routing],
  (routing) => {
    return routing.locationBeforeTransitions.pathname === routePaths.contacts;
  }
);

export const getAccountIds = createSelector(
    [accounts => accounts],
    (accounts) => {
      return accounts.keySeq().filter(key => entitiesNonIdKeys.indexOf(key) === -1).toList();
    }
);

export const getContactIdsOfAccount = createSelector(
    [account => account],
    (account) => {
      return account ? account.get('contacts').valueSeq().toList() : [];
    }
);

export const hasAccounts = createSelector(
    [accounts => accounts],
    (accounts) => {
      return accounts.size > accountsNonIdKeysLength;
    }
);
