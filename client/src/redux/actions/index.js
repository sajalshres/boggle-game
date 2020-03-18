import { 
  FETCH_GAME_PENDING, FETCH_GAME_SUCCESS, FETCH_GAME_ERROR,
  SUBMIT_GAME_PENDING, SUBMIT_GAME_SUCCESS, SUBMIT_GAME_ERROR,
  UPDATE_SCORE, RESET_SCORE
} from './actionTypes';

export const fetchGamePending = () => ({ type: FETCH_GAME_PENDING });

export const fetchGameSuccess = (game) => ({
  type: FETCH_GAME_SUCCESS,
  game: game
});

export const fetchGameError = (error) => ({
  type: FETCH_GAME_ERROR,
  error: error
});

export const submitGamePending = () => ({ type: SUBMIT_GAME_PENDING });

export const submitGameSuccess = () => ({
  type: SUBMIT_GAME_SUCCESS,
  game: game
});

export const submitGameError = () => ({
  type: SUBMIT_GAME_ERROR,
  error: error
});

export const updateScore = (score, word) => ({
  total: total,
  word: word
});

export const resetScore = () => ({ type: RESET_SCORE });