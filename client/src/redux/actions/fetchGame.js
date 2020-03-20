import { fetchGamePending, fetchGameSuccess, fetchGameError } from './index';

function fetchGame() {
  return dispatch => {
    dispatch(fetchGamePending());
    fetch('/api/v1/games/new')
      .then(response => response.json())
      .then(json => {
        if (json.error) {
          throw json.error;
        }
        dispatch(fetchGameSuccess(json));
      })
      .catch(error => {
        dispatch(fetchGameError(error));
      });
  };
}

export default fetchGame;
