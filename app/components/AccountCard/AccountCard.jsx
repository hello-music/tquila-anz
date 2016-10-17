import React, {PropTypes} from 'react';
import { Map } from 'immutable';
import EmailIcon from 'react-icons/lib/fa/envelope-o';
import MobileIcon from 'react-icons/lib/fa/mobile';
import { title, accountCard } from './styles.css';

const AccountCard = props => (
  <div className={accountCard} onClick={props.handleClick}>
    <p className={title}>{props.account.get('name')}</p>
    <p><EmailIcon />{props.account.get('email')}</p>
    <p><MobileIcon />{props.account.get('phone')}</p>
  </div>
);

AccountCard.propTypes = {
  account: PropTypes.instanceOf(Map).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default AccountCard;
