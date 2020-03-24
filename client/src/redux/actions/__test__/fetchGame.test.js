import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actionTypes from '../actionTypes';
import fetchGame from '../fetchGame';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('test fetch game action get a game from api', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates api request pending when fetching game', () => {
    fetchMock.getOnce('/api/v1/games/new', {
      body: { board: 'TEST' },
      headers: { 'Content-Type': 'application/json' }
    });
    const board = 'TEST';
    const expectedActions = [
      { type: actionTypes.API_REQUEST_PENDING },
      { type: actionTypes.FETCH_GAME_SUCCESS, payload: { board } }
    ];

    const store = mockStore({ board: 'TEST' });

    store.dispatch(fetchGame()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
