import React, {PropTypes}  from 'react';
import { Map } from 'immutable';

const ContactCard = props => (
  <div className="contact-card" onClick={props.handleClick}>
    <h3>{props.contact.get('name')}</h3>
    <p>{props.contact.get('amount')}</p>
    <p>{props.contact.get('highRisk') ? 'high' : 'low'}</p>
  </div>
);
ContactCard.propTypes = {
  handleClick: PropTypes.func.isRequired,
  contact: PropTypes.instanceOf(Map).isRequired,
};

export default ContactCard;
