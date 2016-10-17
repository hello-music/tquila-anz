import React, { PropTypes }  from 'react';
import { NavBarContainer, ListViewContainer } from 'containers';
import { fullWidth } from 'sharedStyles/styles.css';
import { labelDescriptionContainer, label, description } from './styles.css';

const LabelDescriptionCombo = props =>
  (<div className={labelDescriptionContainer}>
    <div className={label}>{props.label}</div>
    <p className={description}>{props.description}</p>
  </div>);

LabelDescriptionCombo.propTypes = {
  label: PropTypes.any,
  description: PropTypes.string.isRequired,
};
export default LabelDescriptionCombo;
