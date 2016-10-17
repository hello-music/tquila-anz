import React from 'react';
import { ListViewHeaderContainer, ListViewContentContainer } from 'containers';
import { fullWidth, centeredContainer } from 'sharedStyles/styles.css';

const ListView = () => (<div className={`${fullWidth} ${centeredContainer}`}><ListViewHeaderContainer /><ListViewContentContainer /></div>);
export default ListView;
