import React, {PropTypes} from 'react';
import { Map } from 'immutable';

const AccountCard = props => (
  <div className="account-card" onClick={props.handleClick}>
    <p>{props.account.get('name')}</p>
    <p>{props.account.get('email')}</p>
    <p>{props.account.get('phone')}</p>
  </div>
);

AccountCard.propTypes = {
  account: PropTypes.instanceOf(Map).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default AccountCard;
