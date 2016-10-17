import constants from 'config/constants';
import { normalize } from 'normalizr';
import * as schema from 'schema/schema';
import humps from 'humps';

const { mockAccountsJson } = constants;

export function getAccounts () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(normalize(humps.camelizeKeys(mockAccountsJson), { accounts: schema.arrayOfAccounts }));
    }, 500);
  });
}
