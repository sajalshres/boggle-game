import React from 'react';
import { create } from 'react-test-renderer';

import configureStore from 'redux-mock-store';
import Game from '../index';

import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

describe('Game component', () => {
  it('should work as expected', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.props().className).toEqual('game');
    expect(wrapper.props().children).toHaveLength(2);
  });
});
