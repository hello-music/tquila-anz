import React from 'react';
import { shallow } from 'enzyme';
import { ListViewHeader } from 'components';
import { ListViewHeaderContainer } from 'containers';
import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('<ListViewHeader />', () => {
  it('renders <ListViewHeader/ >', () => {
    const wrapper = shallow(<ListViewHeaderContainer />);
    expect(wrapper.find(ListViewHeader)).to.have.length(1);
  });
});
