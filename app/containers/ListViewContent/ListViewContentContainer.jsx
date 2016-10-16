import React, { PropTypes }  from 'react';
import { ListViewContent } from 'components';
import { List } from 'immutable';
import { getAccountIds, getContactIdsOfAccount, isContactsPage, isHomePage } from 'helpers/selectors';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as accountsActionCreators from 'redux/modules/accounts';
import constants from 'config/constants';

const { cardTypes } = constants;
const ListViewContentContainer = props => (<ListViewContent cardIds={props.cardIds} cardType={props.cardType}/>);

ListViewContentContainer.propTypes = {
  cardIds: PropTypes.instanceOf(List).isRequired,
  cardType: PropTypes.string.isRequired,
};

function getCardType(currentPath) {
  return cardTypes.find((type) => {
    return type.pathname === currentPath;
  });
}

function mapStateToProps({ accounts, routing }) {
  const routeInfo = routing.locationBeforeTransitions,
    currentPath = routeInfo.pathname,
    accountId = isContactsPage(routing) ? routeInfo.query.account : '',
    isOnContactPage = isContactsPage(routing),
    isOnHomePage = isHomePage(routing);
  let cardIds = [];

  if (isOnContactPage || isOnHomePage) {
    cardIds = isOnContactPage ?
      getContactIdsOfAccount(accounts.get(accountId)) : getAccountIds(accounts);
  }

  return {
    cardIds,
    cardType: getCardType(currentPath).name,
  };
}

export default connect(mapStateToProps)(ListViewContentContainer);