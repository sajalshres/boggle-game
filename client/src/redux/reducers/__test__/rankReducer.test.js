import { cleanup } from '@testing-library/react';
import { rankReducer, initialState } from '../rankReducer';
import * as actions from '../../actions';

afterEach(cleanup);

describe('test the rank reducer and corresponding actions', () => {
  let testState;

  beforeEach(() => {
    testState = { ...testState };
  });

  it('should return the inital test', () => {
    expect(rankReducer(testState, {})).toEqual({ ...initialState });
  });

  it('should change fetchPending state to true', () => {
    expect(rankReducer(testState, actions.apiRequestPending())).toEqual(
      expect.objectContaining({
        fetchPending: true,
        fetchError: null
      })
    );
  });

  it('should change fetchError state to error', () => {
    expect(rankReducer(testState, actions.apiRequestError('error'))).toEqual(
      expect.objectContaining({
        fetchPending: false,
        fetchError: 'error'
      })
    );
  });

  it('should change rank state to rank', () => {
    const rank = [
      {
        user_name: 'test',
        total_score: 20,
        words: 'hello world'
      }
    ];
    expect(rankReducer(testState, actions.fetchRankSuccess(rank))).toEqual(
      expect.objectContaining({
        ranks: rank
      })
    );
  });
});
