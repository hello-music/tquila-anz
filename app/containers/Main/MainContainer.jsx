import React, { PropTypes } from 'react';

const MainContainer = props => (<div>{props.children}</div>);
MainContainer.propTypes = {
  children: PropTypes.element.isRequired,
};
export default MainContainer;
