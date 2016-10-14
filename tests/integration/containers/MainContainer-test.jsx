import React from 'react';
import { mount, shallow } from 'enzyme';
import { HomePage } from 'components';
import { MainContainer } from 'containers';
import { expect } from 'chai';
import { describe, it } from 'mocha';

const MockChildComponent = () => (<div />);
describe('<MainContainer />', () => {
  it('renders props.children', () => {
    const wrapper = mount(<MainContainer><MockChildComponent /></MainContainer>);
    expect(wrapper.find(MockChildComponent)).to.have.length(1);
  });
});
