const routePaths = {
  home: '/',
  contacts: '/contacts',
};
export default {
  /*********************************
   * route paths
   *********************************/
  routePaths,
  /*********************************
   * card types and path name mappings
   *********************************/
  cardTypes: [
    {
      name: 'account',
      pathname: routePaths.home,
    },
    {
      name: 'contact',
      pathname: routePaths.contacts,
    },
  ],
  /*********************************
   * Mock json response
   *********************************/
  mockAccountsJson: {
    Accounts: [
      {
        Name: 'Team A',
        Phone: '0412345678',
        Email: 'team@teama.com',
        Contacts: [
          {
            Name: 'Contact AA',
            High_Risk: false,
            Amount: 20000,
          },
          {
            Name: 'Contact AB',
            High_Risk: false,
            Amount: 20000,
          },
        ],
      },
      {
        Name: 'Team B',
        Phone: '0412123123',
        Email: 'team@teamb.com',
        Contacts: [
          {
            Name: 'Contact BA',
            High_Risk: false,
            Amount: 30000,
          },
          {
            Name: 'Contact BB',
            High_Risk: true,
            Amount: 50000,
          },
        ],
      },
      {
        Name: 'Team C',
        Phone: '0402021244',
        Email: 'team@teamc.com',
        Contacts: [
          {
            Name: 'Contact CA',
            High_Risk: false,
            Amount: 1600,
          },
        ],
      },
      {
        Name: 'Team D',
        Phone: '0429060332',
        Email: 'team@teamd.com',
        Contacts: [
          {
            Name: 'Contact DA',
            High_Risk: false,
            Amount: 22500,
          },
          {
            Name: 'Contact DB',
            High_Risk: false,
            Amount: 5000,
          },
          {
            Name: 'Contact DC',
            High_Risk: false,
            Amount: 20000,
          },
        ],
      },
    ],
  },
};
