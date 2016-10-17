import React, {PropTypes}  from 'react';
import { Map } from 'immutable';
import User from 'react-icons/lib/fa/user';
import { contactCard, userIcon, highRisk, title } from './styles.css';

const ContactCard = props => (
  <div className={`${contactCard} ${props.contact.get('highRisk') && highRisk }`} onClick={props.handleClick}>
      <p className={title}>{props.contact.get('name')}</p>
      <p> {props.contact.get('highRisk') ? 'high' : 'low'}</p>
      <p>{props.contact.get('amount')}</p>
  </div>
);
ContactCard.propTypes = {
  handleClick: PropTypes.func.isRequired,
  contact: PropTypes.instanceOf(Map).isRequired,
};

export default ContactCard;
