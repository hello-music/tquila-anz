import React from 'react';
import { shallow } from 'enzyme';
import { GenericPageLayout } from 'components';
import { GenericPageLayoutContainer } from 'containers';
import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('<GenericPageLayoutContainer />', () => {
  it('renders <GenericPageLayout/ >', () => {
    const wrapper = shallow(<GenericPageLayoutContainer />);
    expect(wrapper.find(GenericPageLayout)).to.have.length(1);
  });
});
