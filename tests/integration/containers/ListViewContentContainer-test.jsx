import React from 'react';
import { shallow } from 'enzyme';
import { ListViewContent } from 'components';
import { ListViewContentContainer } from 'containers';
import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('<ListViewContentContainer />', () => {
  it('renders <ListViewContent/ >', () => {
    const wrapper = shallow(<ListViewContentContainer />);
    expect(wrapper.find(ListViewContent)).to.have.length(1);
  });
});
