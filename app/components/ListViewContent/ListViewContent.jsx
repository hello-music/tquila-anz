import React, {PropTypes}  from 'react';
import { List }  from 'immutable';

const ListViewContent = (props) => (<div>{props.cards.map((card, index) => {
  let content = null;
  switch (props.cardType) {
    case 'account':
      content = (<div className="account-card" key={index}>account card template</div>);
      break;
    case 'contact':
      content = (<div className="contact-card" key={index}>contact card template</div>);
      break;
    default:
      content = null;
  }
  return content;
})}</div>);

export default ListViewContent;
