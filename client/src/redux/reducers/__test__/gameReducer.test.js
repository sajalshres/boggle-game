import { cleanup } from '@testing-library/react';
import { gameReducer, initialtestState, initialState } from '../gameReducer';
import * as actions from '../../actions';

afterEach(cleanup);

describe('test the game reducer and actions', () => {
  let testState;
  beforeEach(() => {
    testState = { ...initialtestState };
  });

  it('should return the initial state', () => {
    expect(gameReducer(testState, {})).toEqual({ ...initialtestState });
  });

  it('should change fetchPending state to true', () => {
    expect(gameReducer(testState, actions.apiRequestPending())).toEqual(
      expect.objectContaining({
        fetchPending: true,
        error: null
      })
    );
  });

  it('should update board testState on fetchGameSuccess', () => {
    expect(gameReducer(testState, actions.fetchGameSuccess('BOARD'))).toEqual(
      expect.objectContaining({
        fetchPending: false,
        board: 'BOARD',
        gameStarted: true
      })
    );
  });

  it('should update error testState on apiRequestError', () => {
    expect(gameReducer(testState, actions.apiRequestError('ERROR'))).toEqual(
      expect.objectContaining({
        fetchPending: false,
        fetchError: 'ERROR'
      })
    );
  });

  it('should update input testState on updateInput', () => {
    expect(gameReducer(testState, actions.updateInput('PUT'))).toEqual(
      expect.objectContaining({
        input: 'PUT'
      })
    );
  });

  it('should update input testState on appendInput', () => {
    testState.input = 'TE';
    expect(gameReducer(testState, actions.appendInput('ST'))).toEqual(
      expect.objectContaining({
        input: 'TEST'
      })
    );
  });

  it('should update input testState on resetInput', () => {
    testState.input = 'TEST';
    expect(gameReducer(testState, actions.resetInput())).toEqual(
      expect.objectContaining({
        input: ''
      })
    );
  });

  it('should update words testState on updateWord', () => {
    testState.words = ['Hello'];
    expect(gameReducer(testState, actions.updateWord('World'))).toEqual(
      expect.objectContaining({
        words: ['Hello', 'World']
      })
    );
  });

  it('should update total score testState on updateScore', () => {
    expect(gameReducer(testState, actions.updateScore(20))).toEqual(
      expect.objectContaining({
        totalScore: 20
      })
    );
  });

  it('should start game testState on startGame', () => {
    expect(gameReducer(testState, actions.startGame())).toEqual(
      expect.objectContaining({
        gameStarted: true
      })
    );
  });

  it('should reset total score testState on updateScore', () => {
    expect(gameReducer(testState, actions.resetGame())).toEqual(
      expect.objectContaining({
        state: initialState
      })
    );
  });
});
