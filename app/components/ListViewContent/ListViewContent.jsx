import React, {PropTypes}  from 'react';
import { List }  from 'immutable';
import { AccountCardContainer, ContactCardContainer, CardHolderContainer } from 'containers';
import { listContent, item, cardList } from './styles.css';

const ListViewContent = props => (<div className={listContent}>
  {props.cardIds.map((id, index) => {
    switch (props.cardType) {
      case 'account':
        return (
          <div className={item} key={index}><CardHolderContainer><AccountCardContainer id={id}/></CardHolderContainer>
          </div>);
      case 'contact':
        return (
          <div className={item} key={index}><CardHolderContainer><ContactCardContainer id={id}/></CardHolderContainer>
          </div>);
      default:
        return null;
    }
  })}
</div>);

ListViewContent.propTypes = {
  cardIds: PropTypes.instanceOf(List).isRequired,
  cardType: PropTypes.string.isRequired,
};

export default ListViewContent;

