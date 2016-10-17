import React  from 'react';
import { formattedMobile } from 'helpers/formatters';
import EmailIcon from 'react-icons/lib/fa/envelope-o';
import MobileIcon from 'react-icons/lib/fa/mobile';
import { LabelDescriptionComboContainer } from 'containers';
import { header } from './styles.css';

const ListViewHeader = props => props.header ? (
  <div className={header}>
    <p>{props.header.get('name')}</p>
    <LabelDescriptionComboContainer label={<EmailIcon />} description={props.header.get('email')+''}/>
    <LabelDescriptionComboContainer label={<MobileIcon />}
                                    description={formattedMobile(props.header.get('phone') + '')}/>
  </div>) :
  (<div></div>);
ListViewHeader.defaultProps = {
  header: null,
};
export default ListViewHeader;
