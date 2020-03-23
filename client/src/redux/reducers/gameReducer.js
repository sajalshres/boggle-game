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
  END_GAME
} from '../actions/actionTypes';

const initialState = {
  fetchPending: false,
  fetchError: null,
  board: null,
  words: [],
  input: '',
  totalScore: 0,
  timeLimit: 180,
  gameStarted: false
};

export function gameReducer(state = initialState, action) {
  switch (action.type) {
    case API_REQUEST_PENDING:
      return {
        ...state,
        fetchPending: true,
        error: null
      };
    case FETCH_GAME_SUCCESS:
      return {
        ...state,
        fetchPending: false,
        board: action.payload.board,
        gameStarted: true
      };
    case API_REQUEST_ERROR:
      return {
        ...state,
        fetchPending: false,
        fetchError: action.payload.error
      };
    case UPDATE_INPUT:
      return {
        ...state,
        input: action.payload.input
          .toUpperCase()
          .split(' ')
          .join('')
      };
    case APPEND_INPUT:
      return Object.assign({}, state, {
        input: state.input + action.payload.letter
      });
    case RESET_INPUT:
      return {
        ...state,
        input: ''
      };
    case UPDATE_WORD:
      return Object.assign({}, state, {
        words: [...state.words, action.payload.word],
        totalScore: state.totalScore + action.payload.word.length
      });
    case UPDATE_SCORE:
      return {
        ...state,
        totalScore: action.payload.total
      };
    case START_GAME:
      return {
        ...state,
        gameStarted: true
      };
    case END_GAME:
      return {
        ...state,
        gameStarted: false
      };
    default:
      return state;
  }
}

export const getBoard = state => state.gameReducer.board;
export const gethFetchPending = state => state.gameReducer.fetchPending;
export const getFetchError = state => state.gameReducer.fetchError;
export const getWords = state => state.gameReducer.words;
