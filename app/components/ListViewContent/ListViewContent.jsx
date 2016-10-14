import React, {PropTypes}  from 'react';
import { List }  from 'immutable';

const ListViewContent = (props) => (<div>{props.cards.map((card) => {
  let content = null;
  switch (props.cardType) {
    case 'account':
      content = (<div className="account-card">account card template</div>);
      break;
    case 'contact':
      content = (<div className="contact-card">contact card template</div>);
      break;
    default:
      content = null;
  }
  return content;
})}</div>);

ListViewContent.propTypes = {
  cards: PropTypes.instanceOf('List').isRequired,
  cardType: PropTypes.string.isRequired,
};

export default ListViewContent;
