import { Schema, arrayOf } from 'normalizr';

// accounts
const account = new Schema('accounts', { idAttribute: 'email' });
export const arrayOfAccounts = arrayOf(account);

// contacts
const contact = new Schema('contacts', { idAttribute: 'name' });
const arrayOfContacts = arrayOf(contact);

// nested relations
account.define({
  contacts: arrayOfContacts,
});
