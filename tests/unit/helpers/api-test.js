import { getAccounts } from 'helpers/api';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import constants from 'config/constants';
import { normalize } from 'normalizr';
import humps from 'humps';
import * as schema from 'schema/schema';

const { mockAccountsJson } = constants;
const normalisedAccounts = normalize(humps.camelizeKeys(mockAccountsJson), { accounts: schema.arrayOfAccounts });

describe('Helpers: api', () => {
  describe('getAccounts', () => {
    it('returns normalised mock accounts', (done) => {
      getAccounts().then((response) => {
        expect(response).to.eql(normalisedAccounts);
        done();
      });
    });
  });
});
