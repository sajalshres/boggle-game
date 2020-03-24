import { apiRequestPending, apiRequestError, fetchRankSuccess } from './index';

function fetchRank() {
  return dispatch => {
    dispatch(apiRequestPending());
    return fetch('/api/v1/games')
      .then(response => response.json())
      .then(json => {
        if (json.error) {
          throw json.error;
        }
        dispatch(fetchRankSuccess(json));
      })
      .catch(error => {
        dispatch(apiRequestError(error));
      });
  };
}

export default fetchRank;
