import React, { PropTypes }  from 'react';
import { AccountCard } from 'components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as accountsActionCreators from 'redux/modules/accounts';
import { Map } from 'immutable';

class AccountCardContainer extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (<AccountCard account={this.props.account} handleClick={this.handleClick}/>);
  }

  handleClick() {
    this.context.router.push({
      pathname: '/contacts',
      query: {
        account: this.props.id,
      },
    });
  }
}

AccountCardContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

AccountCardContainer.propTypes = {
  id: PropTypes.string.isRequired,
  account: PropTypes.instanceOf(Map).isRequired,
};

function mapStateToProps({ accounts }, props) {
  return {
    account: accounts.get(props.id),
  };
}

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators(accountsActionCreators, dispatch)
)(AccountCardContainer);
