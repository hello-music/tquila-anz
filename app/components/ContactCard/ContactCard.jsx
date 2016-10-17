import React, {PropTypes}  from 'react';
import { Map } from 'immutable';
import User from 'react-icons/lib/fa/user';
import BombIcon from 'react-icons/lib/fa/bomb';
import FrownIcon from 'react-icons/lib/fa/frown-o';
import SmileIcon from 'react-icons/lib/fa/smile-o';
import { formattedMoney } from 'helpers/formatters';
import { contactCard, userIcon, highRisk, title, amount } from './styles.css';

const ContactCard = props => (
  <div className={`${contactCard} ${props.contact.get('highRisk') && highRisk }`} onClick={props.handleClick}>
    <p className={title}>{props.contact.get('name')}</p>
    <p className={title}>{props.contact.get('highRisk') ? <FrownIcon/> : <SmileIcon/>}</p>
    <p className={amount}>{`$ ${formattedMoney(`${props.contact.get('amount')}`)}`}</p>
  </div>
);
ContactCard.propTypes = {
  handleClick: PropTypes.func.isRequired,
  contact: PropTypes.instanceOf(Map).isRequired,
};

export default ContactCard;
