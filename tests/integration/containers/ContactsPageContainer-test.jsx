import React from 'react';
import { shallow } from 'enzyme';
import { ContactsPage } from 'components';
import { ContactsPageContainer } from 'containers';
import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('<ContactsPageContainer />', () => {
  it('renders <ContactsPage/ >', () => {
    const wrapper = shallow(<ContactsPageContainer />);
    expect(wrapper.find(ContactsPage)).to.have.length(1);
  });
});
