import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actionTypes from '../actionTypes';
import fetchRank from '../fetchRank';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('test fetch rank action get ranks from api', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates api request pending when fetching ranks', () => {
    fetchMock.getOnce('/api/v1/games', {
      body: [{ user_name: 'TEST', total_score: 20 }],
      headers: { 'Content-Type': 'application/json' }
    });
    const ranks = [{ user_name: 'TEST', total_score: 20 }];
    const expectedActions = [
      { type: actionTypes.API_REQUEST_PENDING },
      { type: actionTypes.FETCH_RANK_SUCCESS, payload: { ranks } }
    ];

    const store = mockStore({ ranks });

    store.dispatch(fetchRank()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
