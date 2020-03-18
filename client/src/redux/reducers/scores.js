import { UPDATE_SCORE, RESET_SCORE } from '../actions/actionTypes';

const initialState = {
  total = 0,
  words = []
}

export function scoreReducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SCORE:
      return {
        ...state,
        total: action.payload.total,
        words: [...state.words, action.payload.word]
      }
    case RESET_SCORE:
      return {
        total: 0,
        words: [] 
      }
    default:
      return state;
  }
}

export const getTotalScore = state => state.total;
export const getWordScored = state => state.words;
