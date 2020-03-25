import {
  API_REQUEST_PENDING,
  API_REQUEST_ERROR,
  FETCH_GAME_SUCCESS,
  UPDATE_INPUT,
  APPEND_INPUT,
  RESET_INPUT,
  UPDATE_WORD,
  UPDATE_SCORE,
  START_GAME,
  RESET_GAME,
  FETCH_RANK_SUCCESS
} from './actionTypes';

export const apiRequestPending = () => ({ type: API_REQUEST_PENDING });

export const apiRequestError = error => ({
  type: API_REQUEST_ERROR,
  payload: { error }
});

export const fetchGameSuccess = board => ({
  type: FETCH_GAME_SUCCESS,
  payload: { board }
});

export const updateInput = input => ({
  type: UPDATE_INPUT,
  payload: { input }
});

export const appendInput = letter => ({
  type: APPEND_INPUT,
  payload: { letter }
});

export const resetInput = () => ({ type: RESET_INPUT });

export const updateWord = word => ({
  type: UPDATE_WORD,
  payload: { word }
});

export const updateScore = total => ({
  type: UPDATE_SCORE,
  payload: { total }
});

export const startGame = () => ({
  type: START_GAME
});

export const resetGame = () => ({
  type: RESET_GAME
});

export const fetchRankSuccess = ranks => ({
  type: FETCH_RANK_SUCCESS,
  payload: { ranks }
});
