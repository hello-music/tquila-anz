import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from 'components';
import { HomePageContainer } from 'containers';
import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('<HomePageContainer />', () => {
  it('renders <HomePage/ >', () => {
    const wrapper = shallow(<HomePageContainer />);
    expect(wrapper.find(HomePage)).to.have.length(1);
  });
});
