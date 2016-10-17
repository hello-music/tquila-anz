import React  from 'react';
import { ListViewHeader } from 'components';
import { isContactsPage } from 'helpers/selectors';
import { connect } from 'react-redux';

const ListViewHeaderContainer = props => (<ListViewHeader header={props.header}/>);


function mapStateToProps({ accounts, routing }) {
  const routeInfo = routing.locationBeforeTransitions,
    accountId = isContactsPage(routing) ? routeInfo.query.account : '';
  return {
    header: accounts.get(accountId),
  };
}

export default connect(mapStateToProps)(ListViewHeaderContainer);
