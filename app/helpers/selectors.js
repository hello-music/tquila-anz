import { createSelector } from 'reselect';

const entitiesNonIdKeys = ['isFetching', 'error'];
const accountsNonIdKeysLength = entitiesNonIdKeys.length;

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
