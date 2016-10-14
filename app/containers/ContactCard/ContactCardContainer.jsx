import React, { PropTypes }  from 'react';
import { ContactCard } from 'components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as contactsActionCreators from 'redux/modules/contacts';
import { Map } from 'immutable';

class ContactCardContainer extends React.Component {
  render() {
    return (<ContactCard contact={this.props.contact} handleClick={this.handleClick} />);
  }

  handleClick() {
    console.log('clicked');
  }
}

ContactCardContainer.propTypes = {
  id: PropTypes.string.isRequired,
  contact: PropTypes.instanceOf('Map').isRequired,
};

function mapStateToProps({ contacts }, props) {
  return {
    contact: contacts.get(props.id),
  };
}

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators(contactsActionCreators, dispatch)
)(ContactCardContainer);
