import React, {PropTypes} from 'react';
import { Map } from 'immutable';
import EmailIcon from 'react-icons/lib/fa/envelope-o';
import MobileIcon from 'react-icons/lib/fa/mobile';
import { formattedMobile } from 'helpers/formatters';
import { LabelDescriptionComboContainer } from 'containers';
import { title, accountCard, content } from './styles.css';

const AccountCard = props => (
  <div className={accountCard} onClick={props.handleClick}>
    <p className={title}>{props.account.get('name')}</p>
    <div className={content}>
      <LabelDescriptionComboContainer label={<EmailIcon />} description={props.account.get('email')+''}/>
      <LabelDescriptionComboContainer label={<MobileIcon />}
                                      description={formattedMobile(props.account.get('phone') + '')}/>
    </div>
  </div>
);

AccountCard.propTypes = {
  account: PropTypes.instanceOf(Map).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default AccountCard;
