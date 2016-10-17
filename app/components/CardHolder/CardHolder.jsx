import React, {PropTypes}  from 'react';
import { cardHolder } from './styles.css';

const CardHolder = props => (<div className={cardHolder}>{props.children}</div>);

export default CardHolder;
