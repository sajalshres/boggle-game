import {
  API_REQUEST_PENDING,
  API_REQUEST_ERROR,
  FETCH_RANK_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  fetchPending: false,
  fetchError: false,
  ranks: []
};

export function rankReducer(state = initialState, action) {
  switch (action.type) {
    case API_REQUEST_PENDING:
      return {
        ...state,
        fetchPending: true,
        fetchError: null
      };
    case API_REQUEST_ERROR:
      return {
        ...state,
        fetchPending: false,
        fetchError: action.payload.error
      };
    case FETCH_RANK_SUCCESS:
      return {
        ...state,
        fetchPending: false,
        ranks: action.payload.ranks
      };
    default:
      return state;
  }
}
