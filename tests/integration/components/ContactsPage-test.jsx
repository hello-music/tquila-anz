import React from 'react';
import { shallow } from 'enzyme';
import { ContactsPage } from 'components';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { GenericPageLayoutContainer } from 'containers';

describe('<ContactsPage />', () => {
  it('renders GenericPageLayoutContainer', () => {
    const wrapper = shallow(<ContactsPage />);
    expect(wrapper.find(GenericPageLayoutContainer)).to.have.length(1);
  });
});
