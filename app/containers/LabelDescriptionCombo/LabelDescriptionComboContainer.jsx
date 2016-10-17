import React, { PropTypes }  from 'react';
import { LabelDescriptionCombo } from 'components';

const LabelDescriptionComboContainer = props => (
  <LabelDescriptionCombo label={props.label} description={props.description}/>);

LabelDescriptionComboContainer.propTypes = {
  label: PropTypes.any,
  description: PropTypes.string.isRequired,
};

export default LabelDescriptionComboContainer;
