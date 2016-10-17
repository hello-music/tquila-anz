import React from 'react';
import { shallow } from 'enzyme';
import { ListViewHeader } from 'components';
import { LabelDescriptionComboContainer } from 'containers';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { fromJS } from 'immutable';

const mockHeader = fromJS({
  name: 'Team A',
  phone: 'phone',
  email: 'email',
});

describe('<ListViewHeader />', () => {
  it('has two <LabelDescriptionComboContainer />', () => {
    const wrapper = shallow(<ListViewHeader header={mockHeader} />);
    expect(wrapper.find(LabelDescriptionComboContainer)).to.have.length(2);
  });
});
