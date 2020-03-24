import { apiRequestPending, apiRequestError, fetchGameSuccess } from './index';

function fetchGame() {
  return dispatch => {
    dispatch(apiRequestPending());
    return fetch('/api/v1/games/new')
      .then(response => response.json())
      .then(json => {
        if (json.error) {
          throw json.error;
        }
        dispatch(fetchGameSuccess(json.board));
      })
      .catch(error => {
        dispatch(apiRequestError(error));
      });
  };
}

export default fetchGame;
