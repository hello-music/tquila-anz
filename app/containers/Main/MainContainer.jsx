import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as accountsActionCreators from 'redux/modules/accounts';
import { List } from 'immutable';
import { Loading } from 'components';
import { hasAccounts } from 'helpers/selectors';
import { getAccounts } from 'helpers/api';

class MainContainer extends React.Component {
  componentDidMount() {
    if (!this.props.hasAccounts) {
      this.props.fetchAndHandleAccounts(getAccounts);
    }
  }

  render() {
    return this.props.isFetching ? (<Loading />) :
      (<div>
        {this.props.error && <p>error: {this.props.error}</p>}
        {this.props.children}
      </div>);
  }
}
MainContainer.propTypes = {
  children: PropTypes.element.isRequired,
  // connected props
  fetchAndHandleAccounts: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  hasAccounts: PropTypes.bool.isRequired,
};

function mapStateToProps({ accounts }) {
  return {
    isFetching: accounts.get('isFetching'),
    error: accounts.get('error'),
    hasAccounts: hasAccounts(accounts),
  };
}

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators(accountsActionCreators, dispatch)
)(MainContainer);
