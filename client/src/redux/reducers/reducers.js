import {
  FETCH_GAME_PENDING,
  FETCH_GAME_SUCCESS,
  FETCH_GAME_ERROR
} from '../actions/actionTypes';

const initialState = {
  pending: false,
  game: {},
  error: null
};

export function gameReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GAME_PENDING:
      return {
        ...state,
        pending: true,
        error: null
      };
    case FETCH_GAME_SUCCESS:
      return {
        ...state,
        pending: false,
        game: action.payload.game
      };
    case FETCH_GAME_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}

export const getGame = state => state.game;
export const gethGamePending = state => state.pending;
export const getGameError = state => state.error;
