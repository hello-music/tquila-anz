import React, {PropTypes}  from 'react';
import { List }  from 'immutable';
import { AccountCardContainer, ContactCardContainer } from 'containers';

const ListViewContent = props => (<div>{props.cardIds.map((id, index) => {
  switch (props.cardType) {
    case 'account':
      return (<AccountCardContainer key={index} id={id} />);
    case 'contact':
      return (<ContactCardContainer key={index} id={id} />);
    default:
      return null;
  }
})}</div>);

ListViewContent.propTypes = {
  cardIds: PropTypes.instanceOf('List').isRequired,
  cardType: PropTypes.string.isRequired,
}

ListViewContent.defaultProps = {
  cardIds: [],
};

export default ListViewContent;

