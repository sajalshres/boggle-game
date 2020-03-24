import React from 'react';
import { create } from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import Score from '../Score';

describe('Score component', () => {
  let mockStore;
  let initialState;
  let store;

  beforeEach(() => {
    mockStore = configureStore();
    initialState = {
      gameReducer: {
        words: ['HELLO', 'WORLD']
      }
    };
    store = mockStore(initialState);
  });

  it('should render properly', () => {
    const component = create(<Score store={store} />);
    const instance = component.root;
    expect(instance.findAllByType('td')).toHaveLength(
      initialState.gameReducer.words.length * 2
    );
  });
});
