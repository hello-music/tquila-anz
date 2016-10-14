import React from 'react';
import { shallow } from 'enzyme';
import { ContactCard } from 'components';
import { ContactCardContainer } from 'containers';
import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('<ContactCardContainer />', () => {
  it('renders <ContactCard/ >', () => {
    const wrapper = shallow(<ContactCardContainer />);
    expect(wrapper.find(ContactCard)).to.have.length(1);
  });
});
