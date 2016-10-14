import React  from 'react';

const AccountCard = props => (
  <div className="account-card" onClick={props.handleClick}>
    <p>{props.account.get('name')}</p>
    <p>{props.account.get('email')}</p>
    <p>{props.account.get('phone')}</p>
  </div>
);

export default AccountCard;
