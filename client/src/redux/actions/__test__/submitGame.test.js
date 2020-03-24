import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actionTypes from '../actionTypes';
import submitGame from '../submitGame';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('test fetch rank action get ranks from api', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates api request pending and fech rank when submiting game', () => {
    const game = { user_name: 'TEST', total_score: 20, words: 'Hello World' };
    fetchMock.postOnce('/api/v1/games/create', {
      method: 'POST',
      body: { game },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const expectedActions = [
      { type: actionTypes.API_REQUEST_PENDING },
      { type: actionTypes.RESET_GAME }
    ];

    const store = mockStore({ game });

    store.dispatch(submitGame()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
