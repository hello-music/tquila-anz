import React  from 'react';
import { NavBarContainer, ListViewContainer } from 'containers';
import { fullWidth } from 'sharedStyles/styles.css';
import { listViewContainer, footer } from './styles.css'

const GenericPageLayout = () => (<div className={fullWidth}>
  <NavBarContainer />
  <div className={listViewContainer}>
    <ListViewContainer />
  </div>
  <div className={footer} />
</div>);
export default GenericPageLayout;
