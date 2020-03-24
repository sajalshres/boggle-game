import React from 'react';
import { create } from 'react-test-renderer';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Board from '../Board';
import configureStore from 'redux-mock-store';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore();

describe('Board component', () => {
  it('should be rendered properly', () => {
    const initialState = {
      gameReducer: {
        fetchPending: false,
        fetchError: null,
        board: 'ARSSARPYETQMNLOE',
        words: [],
        input: '',
        totalScore: 0,
        timeLimit: 180,
        gameStarted: false
      }
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<Board store={store} />);
    const component = wrapper.dive();
    // Board should be renderd
    expect(component.render()).toHaveLength(1);
    // Should have length of 16 letters
    expect(component.render().children()).toHaveLength(16);
  });
});
