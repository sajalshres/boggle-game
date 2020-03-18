import { 
  FETCH_GAME_PENDING, 
  FETCH_GAME_SUCCESS, 
  FETCH_GAME_ERROR 
} from '../actions/actionTypes';

const initialState = {
  pending: false,
  game: {},
  error: null
}

export function fetchGameReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_GAME_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_GAME_SUCCESS:
      return {
        ...state,
        pending: false,
        game: action.payload
      }
    case FETCH_GAME_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state;  
  }
}

export const fetchGame = state => state.game;
export const fetchGamePending = state => state.pending;
export const fetchGameError = state => state.error;