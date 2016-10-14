import React, {PropTypes}  from 'react';
import { Map } from 'immutable';

const ContactCard = props => (<div className="contact-card" onClick={props.handleClick}>{props.contact.get('name')}</div>);
ContactCard.propTypes = {
  handleClick: PropTypes.func.isRequired,
  contact: PropTypes.instanceOf('Map').isRequired,
};

export default ContactCard;
