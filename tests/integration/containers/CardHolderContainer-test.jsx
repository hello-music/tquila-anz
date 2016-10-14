import React from 'react';
import { shallow } from 'enzyme';
import { CardHolder } from 'components';
import { CardHolderContainer } from 'containers';
import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('<CardHolderContainer />', () => {
  it('renders <CardHolder/ >', () => {
    const wrapper = shallow(<CardHolderContainer />);
    expect(wrapper.find(CardHolder)).to.have.length(1);
  });
});
