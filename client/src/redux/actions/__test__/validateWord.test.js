import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actionTypes from '../actionTypes';
import validateWord from '../validateWord';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('test api request and update word action is called when validateWord', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates api request pending and fech rank when submiting game', () => {
    const word = 'TEST';
    fetchMock.postOnce('/api/v1/games/validate', {
      method: 'POST',
      body: { word },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const expectedActions = [
      { type: actionTypes.API_REQUEST_PENDING },
      { type: actionTypes.UPDATE_WORD, payload: { word } }
    ];

    const store = mockStore({ word });

    store.dispatch(validateWord('TEST')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
