import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from 'components';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { GenericPageLayoutContainer } from 'containers';

describe('<HomePage />', () => {
  it('renders GenericPageLayoutContainer', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(GenericPageLayoutContainer)).to.have.length(1);
  });
});
