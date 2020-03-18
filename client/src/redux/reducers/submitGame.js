import {
  SUBMIT_GAME_PENDING,
  SUBMIT_GAME_SUCCESS,
  SUBMIT_GAME_ERROR
} from '../actions/actionTypes';

const initialState = {
  pending: false,
  game: {},
  error: null
}

export function submitGameReducer(state = initialState, action) {
  switch(action.type) {
    case SUBMIT_GAME_PENDING:
      return {
        ...state,
        pending: true
      }
    case SUBMIT_GAME_SUCCESS:
      return {
        ...state,
        pending: false,
        game: action.payload
      }
    case SUBMIT_GAME_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state;  
  }
}

export const submitGame = state => state.game;
export const submitGamePending = state => state.pending;
export const submitGameError = state => state.err
