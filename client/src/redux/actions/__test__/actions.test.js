import * as actions from '../';
import * as actionTypes from '../actionTypes';

describe('test actions', () => {
  it('should create an action for api request', () => {
    const expectedAction = {
      type: actionTypes.API_REQUEST_PENDING
    };
    expect(actions.apiRequestPending()).toEqual(expectedAction);
  });

  it('should create an action for api request error', () => {
    const error = 'error';
    const expectedAction = {
      type: actionTypes.API_REQUEST_ERROR,
      payload: { error }
    };
    expect(actions.apiRequestError('error')).toEqual(expectedAction);
  });

  it('should create an action for fetch game success', () => {
    const board = 'TEST';
    const expectedAction = {
      type: actionTypes.FETCH_GAME_SUCCESS,
      payload: { board }
    };
    expect(actions.fetchGameSuccess(board)).toEqual(expectedAction);
  });

  it('should create an action for update input', () => {
    const input = 'TEST';
    const expectedAction = {
      type: actionTypes.UPDATE_INPUT,
      payload: { input }
    };
    expect(actions.updateInput(input)).toEqual(expectedAction);
  });

  it('should create an action for append input', () => {
    const letter = 'TEST';
    const expectedAction = {
      type: actionTypes.APPEND_INPUT,
      payload: { letter }
    };
    expect(actions.appendInput(letter)).toEqual(expectedAction);
  });

  it('should create an action for reset input', () => {
    const expectedAction = {
      type: actionTypes.RESET_INPUT
    };
    expect(actions.resetInput()).toEqual(expectedAction);
  });

  it('should create an action for update input', () => {
    const word = 'TEST';
    const expectedAction = {
      type: actionTypes.UPDATE_WORD,
      payload: { word }
    };
    expect(actions.updateWord(word)).toEqual(expectedAction);
  });

  it('should create an action for update score', () => {
    const total = 10;
    const expectedAction = {
      type: actionTypes.UPDATE_SCORE,
      payload: { total }
    };
    expect(actions.updateScore(total)).toEqual(expectedAction);
  });

  it('should create an action for start game', () => {
    const expectedAction = {
      type: actionTypes.START_GAME
    };
    expect(actions.startGame()).toEqual(expectedAction);
  });

  it('should create an action for reset game', () => {
    const expectedAction = {
      type: actionTypes.RESET_GAME
    };
    expect(actions.resetGame()).toEqual(expectedAction);
  });

  it('should create an action for update score', () => {
    const ranks = [{ user_name: 'Test', total_score: 10 }];
    const expectedAction = {
      type: actionTypes.FETCH_RANK_SUCCESS,
      payload: { ranks }
    };
    expect(actions.fetchRankSuccess(ranks)).toEqual(expectedAction);
  });
});
